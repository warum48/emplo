import { useCreateProfileMutation } from "@/rtk/queries/joborder";
import {  FormTemplate } from "./FormTemplate"; //FieldConfig,
import { OrganizationsSelect } from "@/components/DynamicFormFields/Organizations";
import { SpecialitiesSelect } from "@/components/DynamicFormFields/Specialities";
import { DepartmentsSelect } from "@/components/DynamicFormFields/Departments";
import { FieldConfig } from "@/components/__atoms/Forms/types/FieldConfig";

export type TFromStepperProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  onNext: (values: any) => void;
  stepNames: string[];
  _formValues:any;
  setFormValues:React.Dispatch<React.SetStateAction<any>>
};

export const NewProfileForm = ({
  _formValues,
  setFormValues,
  activeStep,
  setActiveStep,
  onNext,
  stepNames,
}: TFromStepperProps) => {
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
      /* {
        type: "TextInput",
        name: "speciality",
        label: "Должность",
        placeholder: "Введите должность",
      },*/
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

      {
        type: "TextInput",
        name: "org_project",
        label: "Проект",
        placeholder: "Введите проект",
      },

      {
        type: "Textarea",
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

  return (
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
      onNext={onNext}
      stepNames={stepNames}
      setActiveStep={setActiveStep}
    />
  );
};

/*
{
        type: "Select",
        name: "org_unit",
        label: "Подразделение",
        placeholder: "Выберите подразделение",
        options: [
          { value: "1", label: "Отдел 1" },
          { value: "2", label: "Отдел 2" },
        ],
      },
      */
