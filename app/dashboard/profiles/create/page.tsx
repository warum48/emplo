"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { Stepper } from "@mantine/core";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconRobot } from "@tabler/icons-react";
//import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfileForm";
import { FormWithStepperBg } from "@/components/BgColors/FormWithStepperBg";
import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfile"; //Form
import DataDisplay from "@/components/__atoms/DataDisplay/DataDisplay";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { DepartmentsSelect } from "@/components/DynamicFormFields/Departments";
import { OrganizationsSelect } from "@/components/DynamicFormFields/Organizations";
import {
  FieldConfig,
  FormTemplate,
} from "@/components/_dashboard/profiles/create/FormTemplate";
import { useCreateProfileMutation } from "@/rtk/queries/joborder";
import { SpecialitiesSelect } from "@/components/DynamicFormFields/Specialities";
import { UnitSelect } from "@/components/DynamicFormFields/Units";

const Settings = () => {
  const [_formValues, setFormValues] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ field1: "", field2: "" });
  const stepNames = [
    "Основная информация",
    "Критерии",
    // 'Настройки и администрирование'
  ]; //"Этапы работы с кандидатами","Параметры поиска","Согласование","История"
  const md = useMediaQuery("(min-width: 768px)");

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = (values: any) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    if (activeStep < 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log("Final form data:", { ...formData, ...values });
    }
  };

  const [createProfile, { isLoading, isError, error, data }] =
    useCreateProfileMutation();

 

  const fields: FieldConfig[][] = [
    [
      {
        type: "TextInput",
        name: "name",
        label: "Имя профиля",
        placeholder: "Введите имя профиля",
        required: true,
      },
     
      {
        component: SpecialitiesSelect,
        props: {
          formFieldName: "speciality",
          label: "Должность",
          placeholder: "Введите должность",
        },
        customisable: true,
      },
      {
        component: OrganizationsSelect,
        props: {
          formFieldName: "org",
          label: "Организация (Юр. лицо)",
          placeholder: "Введите организацию",
        },
        customisable: true,
      },


      {
        component: UnitSelect,
        props: {
          formFieldName: "org_unit",
          label: "Подразделение",
          placeholder: "Введите Подразделение",
          //  dependency: "org",
          dependencies: [
            { formFieldName: "org", getParamName: "org_name", ruName: "Подразделение" },
           // { formFieldName: "org", getParamName: "department_name", ruName: "Департмент" },
          ],
        },

        customisable: true,
      },

      {
        type: "TextInput",
        name: "org_project",
        label: "Проект",
        placeholder: "Введите проект",
      },

      {
        type: "RichTextEditor",
        //type: "Textarea",
        name: "job_description",
        label: "Обязанности",
        placeholder: "Опишите обязанности",
      },
      {
        type: "Textarea",
        name: "job_conditions",
        label: "Условия",
        placeholder: "Опишите условия",
      },
      {
        type: "Textarea",
        name: "job_requirements",
        label: "Треования",
        placeholder: "Опишите требования",
      },
    ],
    [
      {
        name: "",
        type: "Select",
        label: "Этап работы",
        placeholder: "Выберите этап работы",
        options: [],
        disabled: true,
      },
      {
        name: "",
        type: "Select",
        label: "Согласование",
        placeholder: "Выберите согласующего",
        options: [],
        //multiple:true,
        disabled: true,
      },
    ],
  ];

  const demoValues = {
    name: "Новый профиль", //Наименование
    speciality: "Водитель-курьер", //Должность
    org_unit: "Подразделение", //Подразделение
    org_project: "Проект", //Проект/направление
    org: "Чистая Линия",
    job_description: "тестовое описание", //Обязанности
    job_conditions: "тестовые условия", //Условия
    job_requirements: "тестовые требования", //Требования
  };

  const templateValues = {
    name: "Новый профиль", //Наименование
    speciality: "Водитель-курьер", //Должность
    org_unit: "Подразделение", //Подразделение
    org_project: "Проект", //Проект/направление
    org: "Чистая Линия",
    job_description: `Выполнение основных задач и функций в рамках данной должности. 
Организация и контроль рабочих процессов в соответствии с требованиями. 
Взаимодействие с коллегами и внешними партнерами по рабочим вопросам.`, //Обязанности
    job_conditions: `Конкурентоспособная заработная плата и соцпакет.
Возможности профессионального роста и обучения.
Комфортные условия труда и гибкий график.`, //Условия
    job_requirements: `Опыт работы в аналогичной должности будет преимуществом.
Знание профильных программ и инструментов.
Высокая степень ответственности и внимательность к деталям.`, //Требования
  };

  const initialValues = {
    name: "",
    speciality: "",
    job_description: "",
    org_unit: "",
  };

  /* const validate = {
  name: (value: string) => (value ? null : "Name is required"),
}; */

  const toShort = "Поле заполнено не верно, склишком мало букв";
  const minLength = 2;

  const validate = (values: any) => {
    if (activeStep === 0) {
      return {
        // username:
        //   values.username.trim().length < 6
        //     ? 'Username must include at least 6 characters'
        //     : null,
        // password:
        //   values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        org_unit: values.org_unit.length < minLength ? toShort : null,
        name: values.name.length < minLength ? toShort : null,
        speciality: values.org_unit.length < minLength ? toShort : null,
        // org_unit: "Подразделение", //Подразделение
        org_project: values.org_project.length < minLength ? toShort : null,
        org: values.org.length < minLength ? toShort : null,
        job_description:
          values.job_description.length < minLength ? toShort : null,
        job_conditions:
          values.job_conditions.length < minLength ? toShort : null,
        job_requirements:
          values.job_requirements.length < minLength ? toShort : null,
      };
    }

    if (activeStep === 1) {
      return {
        // name: values.name.trim().length < minLength ? 'Name must include at least 2 characters' : null,
        // email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
      };
    }

    return {};
  };

  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  const formValuesToStepDetails = (stepNumber:number) => {
   // return fields.map((step) => {
  const stepFields =  fields[stepNumber].map((field) => {
        return {
          name: 'label' in field ? field?.label :field?.props?.label,
          value: 'label' in field ?_formValues[field.name as keyof typeof _formValues] : _formValues[field?.props?.formFieldName as keyof typeof _formValues],
        };
      })
  //  })
  console.log('stf', stepFields);
  return stepFields;
  }
  
  const formValuesToStepDetailsObject = (stepNumber: number) => {
    const stepFields = fields[stepNumber].map((field) => {
      return {
        name: 'label' in field ? field?.label : field?.props?.label,
        value:
          'label' in field
            ? _formValues[field.name as keyof typeof _formValues] || '-'
            : (_formValues[
                field?.props?.formFieldName as keyof typeof _formValues
              ] || '-' ),
      };
    });
  
    // Convert the array of objects into a single object
    const stepDetailsObject = stepFields.reduce((acc, { name, value }) => {
      if (name) {
        acc[name] = value;
      }
      return acc;
    }, {} as Record<string, string>);
  
    console.log('stepDetailsObject', stepDetailsObject);
    return stepDetailsObject;
  };
  
  return (
    <DashBoardPageContainer header="Создать профиль" Icon={IconRobot}>
      <div className="flex w-full flex-col items-center">
        <FormWithStepperBg />

        <div className="flex w-full flex-col items-start justify-center gap-4 md:flex-row">
          <div className="formcont relative order-2 w-full max-w-screen-md rounded-2xl bg-white p-4 text-black dark:bg-customGray-950/85 dark:text-white md:order-1">
           

            <FormTemplate
              // form={form}
              _formValues={_formValues}
              setFormValues={setFormValues}
              //initialValues={initialValues}
              templateValues={templateValues}
              initialValues={demoValues}
              validate={validate}
              onSubmit={handleFormSubmit}
              fields={fields}
              mutation={createProfile}
              data={data}
              loading={isLoading}
              error={isError ? error : null}
              activeStep={activeStep}
              // onNext={onNext}
              onNext={handleNext}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />
          </div>

          <div className="rightcol order-1 w-full pl-4 pt-8 md:order-2 md:w-[196px] lg:w-[250px]">
            <Stepper
              active={activeStep}
              onStepClick={setActiveStep}
              orientation={!md ? "horizontal" : "vertical"}
            >
              {stepNames.map((name, index) => (
                <Stepper.Step
                  label={"Шаг " + (index + 1)}
                  //description={name}
                  // description={<StepDescription description={name} />}
                  //description={<DataDisplay data={formData}/>}
                  description={
                    <DataDisplay
                      name={name}
                      //data={_formValues ? _formValues : {}}
                      data={formValuesToStepDetailsObject(index)}
                    />
                  }
                />
              ))}
            </Stepper>
          </div>
        </div>
      </div>
      <JSONViewer data={_formValues} />
    </DashBoardPageContainer>
  );
};

    /* {
      type: "TextInput",
      name: "speciality",
      label: "Должность",
      placeholder: "Введите должность",
    },*/

        /*   {
        type: "TextInput",
        name: "org_unit",
        label: "Подразделение",
        placeholder: "Введите подразделение",
      },

     {
        component: DepartmentsSelect,
        props: {
          formFieldName: "speciality",
          label: "department",
          placeholder: "Введите department",
          dependency: "org",
        },

        customisable: true,
      },
*/

 {/*  <div className="flex w-full flex-col justify-center gap-4 md:flex-row items-start">
          <div className="formcont relative order-2 w-full  max-w-screen-md rounded-2xl bg-white p-4 text-black dark:bg-customGray-950/85 dark:text-white md:order-1">
           <VacancyCreationFormHH />
            <NewProfileForm
              _formValues={_formValues}
              setFormValues={setFormValues}
              activeStep={activeStep}
              onNext={handleNext}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />*/}

const StepDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">
        vyjuj vyjuj vyjuj vyjujv yvuvju sdfsdf sdf sdf sdf sdf sdfsdfsdfsdf
        sdfsdfsdf sdfsdfsdf sdf sdfsdfsdf sdfsdfsdf sdf sdfsdfsdf sdfsdfsdf
        sdfsdfsdf sdfsdf sdfsdfsdf sdfsdf vuvjuv jujvujuvjvu jvujvu jvuvj uvjuvj{" "}
        {description}
      </h2>
    </div>
  );
};

export default Settings;
