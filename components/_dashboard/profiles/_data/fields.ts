
import { FieldConfig } from "@/components/__atoms/Forms/types/FieldConfig";
import { OrganizationsSelect } from "@/components/DynamicFormFields/Organizations";
import { SpecialitiesSelect } from "@/components/DynamicFormFields/Specialities";
import { UnitSelect } from "@/components/DynamicFormFields/Units";

export const fields: FieldConfig[][] = [
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
          description:
            "Компания в которой требуется сотудник (справочник - перечисление)",
        },
        customisable: true,
      },

      {
        component: UnitSelect,
        props: {
          formFieldName: "org_unit",
          label: "Подразделение",
          placeholder: "Введите Подразделение",
          description:
            "Отдел/подразделение  - организационная единица, в которую осуществляется подбор (может передаваться по обмену)",
          //  dependency: "org",
          dependencies: [
            {
              formFieldName: "org",
              getParamName: "org_name",
              ruName: "Подразделение",
            },
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

  