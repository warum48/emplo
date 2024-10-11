import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
//import { useMutation } from "@reduxjs/toolkit";
import React from "react";
import { TFromStepperProps } from "./NewProfile";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import { BasicError } from "@/components/Errors/BasicError";
import { useMutationNotifications } from "@/hooks/useNotifications";
import { LinkButton } from "@/components/__atoms/Buttons/LinkButton";
import { CustomisableField } from "@/components/__atoms/Forms/CustomisableField";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import "@mantine/tiptap/styles.css";
//import Highlight from '@tiptap/extension-highlight';
//import Underline from '@tiptap/extension-underline';
//import TextAlign from '@tiptap/extension-text-align';
//import Superscript from '@tiptap/extension-superscript';
//import SubScript from '@tiptap/extension-subscript';

export type FieldObject = {
  type: "TextInput" | "Textarea" | "Select" | "RichTextEditor"; // Limiting the type to these specific strings
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  options?: { value: string; label: string }[]; // Optional for Select fields
};

export type FieldComponent = {
  component: React.FC<any>; //any;//React.JSX.Element; //
  props: any;
  customisable?: boolean;
  //dependency?: string; // field is enabled only if this dependency field is not empty
};

export type FieldConfig = FieldObject | FieldComponent;

type FormTemplateProps = {
  _formValues: any;
  setFormValues: React.Dispatch<React.SetStateAction<any>>;
  templateValues: any;
  initialValues: any;
  validate: any;
  onSubmit: (values: any) => void;
  fields: FieldConfig[][];
  mutation: any; // RTK Mutation function
  data: any;
  loading: boolean;
  error: any;
};

export const FormTemplate: React.FC<FormTemplateProps & TFromStepperProps> = ({
  //form,
  _formValues,
  setFormValues,
  templateValues,
  initialValues,
  validate,
  onSubmit,
  fields,
  mutation,
  data,
  loading,
  error,

  activeStep,
  setActiveStep,
  onNext,
  stepNames,
}) => {
  const form = useForm({
    initialValues,
    validate,
    onValuesChange: (values) => {
      console.log(values);
      setFormValues(values);
    },
  });
  //const [customized, setCustomized] = React.useState(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const handleSubmit = async (values: any) => {
    try {
      await mutation(values).unwrap();
      onSubmit(values);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  useMutationNotifications({
    text: "Готово!",
    data: data,
    data_details: (data as any)?.msg
      ? (data as any)?.msg
      : "Информация обновлена",
    error: error,
  });

  function fillFormWithTemplateValues() {
    form.setValues(templateValues);
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
    //  Underline,
      Link,
   //   Superscript,
   //   SubScript,
   //   Highlight,
   //   TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
   // content,
  });

  return (
    <div className="relative w-full max-w-full p-4 text-black dark:text-white">
      <form
        onSubmit={form.onSubmit(handleSubmit)} //className="form-template"
        className="relative grid w-full max-w-full grid-cols-1 gap-6 text-left"
      >
        <div className="flex w-full max-w-full flex-col gap-6">
          <div className="flex items-end justify-between">
            <Title order={2} className="font-light">
              {stepNames[activeStep]}
            </Title>
            {/*<LinkButton  onClick={()=>{}} colorScheme={colorScheme}>Заполнить базовыми данными</LinkButton>*/}
            <div
              className="link-button cursor-pointer text-xs"
              onClick={() => {
                fillFormWithTemplateValues();
              }}
            >
              Заполнить базовыми данными
            </div>
          </div>
          {fields.map((steps, index) => (
            <>
              {activeStep === index && (
                <>
                  {steps.map((field, index) => (
                    <div key={index}>
                      {"component" in field ? ( // Type narrowing using "in" to check if it's a component
                        // field.component
                        <CustomisableField
                          form={form}
                          field={field}
                          // {...form.getInputProps(field.props.formFieldName)}
                        />
                      ) : (
                        <>
                          {" "}
                          {field.type === "TextInput" && (
                            <TextInput
                              label={field.label}
                              placeholder={field.placeholder}
                              required={field.required}
                              {...form.getInputProps(field.name)}
                            />
                          )}
                          {field.type === "Textarea" && (
                            <Textarea
                              label={field.label}
                              placeholder={field.placeholder}
                              required={field.required}
                              autosize
                              minRows={2}
                              maxRows={10}
                              {...form.getInputProps(field.name)}
                            />
                          )}
                          {field.type === "RichTextEditor" && (
                            <><div className='text-sm'>{ field.label}</div>
                            <RichTextEditor editor={editor}  >
                              
                               
                              <RichTextEditor.Toolbar sticky stickyOffset={60}  {...form.getInputProps(field.name)} >
                                <RichTextEditor.ControlsGroup>
                                  <RichTextEditor.Bold />
                                  <RichTextEditor.Italic />
                                  <RichTextEditor.Underline />
                                  <RichTextEditor.Strikethrough />
                                  <RichTextEditor.ClearFormatting />
                                  <RichTextEditor.Highlight />
                                  <RichTextEditor.Code />
                                </RichTextEditor.ControlsGroup>
                              </RichTextEditor.Toolbar>
                              <RichTextEditor.Content />
                            </RichTextEditor>
                            </>
                          )}
                          {field.type === "Select" && field.options && (
                            <Select
                              label={field.label}
                              placeholder={field.placeholder}
                              data={field.options}
                              disabled={field.disabled}
                              {...form.getInputProps(field.name)}
                            />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </>
          ))}
          <div
            className={`mt-4 flex w-full ${activeStep == 0 ? "justify-center" : "justify-center"} gap-4`}
          >
            {activeStep > 0 && (
              <Button
                variant="outline"
                onClick={() =>
                  setActiveStep((activeStep: number) => activeStep - 1)
                }
                className="w-full max-w-80"
              >
                Назад
              </Button>
            )}
            {activeStep < stepNames.length - 1 && (
              <Button
                onClick={() =>
                  // setActiveStep((activeStep: number) => activeStep + 1)
                  setActiveStep((current) => {
                    if (form.validate().hasErrors) {
                      return current;
                    }
                    return current < stepNames.length ? current + 1 : current;
                  })
                }
                className="w-full max-w-80"
              >
                Далее
              </Button>
            )}
            {activeStep == stepNames.length - 1 && (
              <Button type="submit" className="w-full max-w-80">
                Отправить
              </Button>
            )}
          </div>
          {/*loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>*/}
          {loading && <Preloader />}
          {error && <BasicError error={error} />}
        </div>
      </form>
      <JSONViewer data={form.values} />
    </div>
  );
};

/*
<div>
                          <field.component form={form} {...field.props} />
                          <div
                            className="mt-2 text-xs opacity-50"
                            onClick={() => {
                              setCustomized(!customized);
                            }}
                          >
                            {customized
                              ? "Заполнить вручную"
                              : "Выбрать из списка"}
                          </div>
                        </div>
                        */
