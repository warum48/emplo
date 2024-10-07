import { useForm } from "@mantine/form";
import { TextInput, Textarea, Select, Button, Title } from "@mantine/core";
//import { useMutation } from "@reduxjs/toolkit";
import React from "react";
import { TFromStepperProps } from "./NewProfile";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import { BasicError } from "@/components/Errors/BasicError";
import { useMutationNotifications } from "@/hooks/useNotifications";

export type FieldObject = {
  type: "TextInput" | "Textarea" | "Select"; // Limiting the type to these specific strings
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
};

export type FieldConfig = FieldObject | FieldComponent;

type FormTemplateProps = {
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
  const form = useForm({ initialValues, validate });

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

  return (
    <div className="relative w-full max-w-full p-4 text-black dark:text-white">
      <form
        onSubmit={form.onSubmit(handleSubmit)} //className="form-template"
        className="relative grid w-full max-w-full grid-cols-1 gap-6 text-left"
      >
        <div className="flex w-full max-w-full flex-col gap-6">
          <Title order={2} className="font-light">
            {stepNames[activeStep]}
          </Title>
          {fields.map((steps, index) => (
            <>
              {activeStep === index && (
                <>
                  {steps.map((field, index) => (
                    <div key={index}>
                      {"component" in field ? ( // Type narrowing using "in" to check if it's a component
                       // field.component
                       <field.component {...field.props} />
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
                              {...form.getInputProps(field.name)}
                            />
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
                  setActiveStep((activeStep: number) => activeStep + 1)
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
    </div>
  );
};
