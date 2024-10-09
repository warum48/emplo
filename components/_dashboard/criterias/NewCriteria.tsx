import {
  FieldConfig,
  FormTemplate,
} from "@/components/__atoms/Forms/FormTemplate_unused";
import { useCreateProfileMutation } from "@/rtk/queries/joborder";
//import { FieldConfig, FormTemplate } from "./FormTemplate";

export type TFromStepperProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  onNext: (values: any) => void;
  stepNames: string[];
};

export const NewProfileForm = ({
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
      {
        type: "TextInput",
        name: "speciality",
        label: "Должность",
        placeholder: "Введите должность",
      },

      {
        type: "TextInput",
        name: "org_unit",
        label: "Подразделение",
        placeholder: "Введите подразделение",
      },

      {
        type: "TextInput",
        name: "org_unit",
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

  const initialValues = {
    name: "",
    speciality: "",
    job_description: "",
    org_unit: "",
  };

  const validate = {
    name: (value: string) => (value ? null : "Name is required"),
  };

  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <FormTemplate
      //initialValues={initialValues}
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
