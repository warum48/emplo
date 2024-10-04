"use client";

import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Select,
  Checkbox,
  NumberInput,
  Button,
  Group,
  Title,
  Divider,
} from "@mantine/core";
import { STYLES } from "@/global/CONSTS";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/rtk/store/store";
import {
  useCreateJobOrderMutation,
  useCreateProfileMutation,
  useGetProfilesQuery,
  useGetSearchCritsQuery,
  useLazyGetSearchCritsQuery,
} from "@/rtk/queries/joborder";
import { BasicError } from "@/components/Errors/BasicError";
import { SpaceYMain } from "@/components/__atoms/Spacers/Spacers";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import React from "react";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { TextHint } from "@/components/__atoms/TextBlocks/TextBlocks";
import { useMutationNotifications } from "@/hooks/useNotifications";
import { DatePickerInput } from "@mantine/dates";
import "dayjs/locale/ru";
//import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyApiSlice';

type TProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  //onBack: () => void;
  onNext: (values: any) => void;
  stepNames: string[];
};

export const NewRequestForm = ({
  activeStep,
  setActiveStep,
  onNext,
  stepNames,
}: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [
    createProfile,
    { isLoading, isSuccess, isError, error, data, isUninitialized, reset },
  ] = useCreateJobOrderMutation();
  //useDebugFormMutation();
  const {
    data: data_crits,
    isLoading: loading_crits,
    error: error_crits,
  } = useGetSearchCritsQuery();
  const {
    data: data_profiles,
    isLoading: loading_profiles,
    error: error_profiles,
  } = useGetProfilesQuery();
  const [
    getLazyCrits,
    {
      data: lazy_crits,
      isLoading: loading_lazy_crits,
      error: error_lazy_crits,
    },
  ] = useLazyGetSearchCritsQuery();
  const [critsSelectData, setCritsSelectData] = React.useState<any[]>([]);
  const [profilesSelectData, setProfilesSelectData] = React.useState<any[]>([]);

  //  org_unit - Подразделение
  //org_department - Отдел
  //org_project - Проект

  const demoValues = {
    

    deadline: "",
    profile: "",
    priority: 2, //'Средний',
    responsible: "",
    is_confirmed: false,
    is_mass_selection: false,
    description: "Не указано",

    job_profile: {
      name: "Профиль 24907bc16f2849058e82f53afe4ff68a",
      speciality: "Мерчандайзер",
      org: "Чистая Линия",
      org_unit: "Не указано",
      org_department: "Не указано",
      org_job_name: "Не указано",
      org_project: "Не указан",
      org_area_of_business: "Не указан",
      job_description: "",
      job_conditions: "",
      job_requirements: "",
      description: "Не указано",
    },

    criteria: {
      id: 0,
      speciality: "",
      area: "",
      metro: "",
      schedule: "",
      relocation_type: "",
      experience: 0,
      gender: '',
      age: 0,
      salary: 0,
      job_search_status: "",
      search_limit_target: 0,
      created_by: "",
    },


    /* name: "Новый профиль", //Наименование

    speciality: "Водитель-курьер", //Должность
    org_unit: "Подразделение", //Подразделение
    org_project: "Проект", //Проект/направление
    org: 'Чистая Линия',
    job_description: "тестовое описание", //Обязанности
    job_conditions: "тестовые условия", //Условия
    job_requirements: "тестовые требования", //Требования */

    // number: 0,
    //   open_date: '',

    // search_limit_target: 1,

    // profile_type: 'Единичный',
    //requirements: '',
    //conditions: '',
    //department: '',
    //candidates: '',
    //city_metro: '',
    //responsibilities: '',

    // missed:""

    /*
    org: 'Чистая линия',
    org_job_name: 'Водитель-курьер',
    org_department: "Отдел",
    org_area_of_business: "Направление деятельности",
    
    description: 'Тестовое описание тестового профайла тестовой вакансии',
    */
  };

  const form = useForm({
    //<VacancyZayavka>
    initialValues: demoValues,

    validate: {},
  });

  useMutationNotifications({
    text: "Профиль успешно создан",
    data: data,
    data_details: (data as any)?.msg
      ? (data as any)?.msg
      : "Вы можете найти его в списке профилей",
    // data_code: data_req?.requestAvailableDocument?.statusCode,
    // data_details:
    //   data_req?.requestAvailableDocument?.detailsRu || data_req?.requestAvailableDocument?.details,
    error: error,
    //  traceId: data_req?.requestAvailableDocument?.traceId,
    // onSuccess: onSuccess,
  });

  React.useEffect(() => {
    if (isSuccess) {
      // Perform action on success, e.g., show a success message or redirect
      console.log("Profile created successfully:", data);
      // You can also trigger any additional actions here, like navigating to another page
      // router.push('/profile');
    }

    if (isError) {
      // Handle error, log, or notify user
      console.error("Error creating profile:", error);
    }
  }, [isSuccess, isError, data, error]);

  React.useEffect(() => {
    //  form.setInitialValues({ criteria:data_crits[0]});
    if (data_crits && data_crits[0]) {
      // form.setInitialValues({ criteria:data_crits[0]}); //ts error, !!TODO fill types
      //  form.setValues({ criteria: data_crits[0] });

      const selectData = data_crits.map((item: any) => ({
        value: item.id.toString(), // Using `id` as value
        label: item.name, // Using `name` as label
      }));

      setCritsSelectData(selectData);
    }
  }, [data_crits]);

  React.useEffect(() => {
    //  form.setInitialValues({ criteria:data_crits[0]});
    if (data_profiles && data_profiles[0]) {
      // form.setInitialValues({ criteria:data_crits[0]}); //ts error, !!TODO fill types
      //  form.setValues({ criteria: data_crits[0] });

      const selectData = data_profiles.map((item: any) => ({
        value: item.id.toString(), // Using `id` as value
        label: item.name, // Using `name` as label
      }));

      setProfilesSelectData(selectData);
    }
  }, [data_profiles]);

  function handleSelectCritsChange(value: any) {
    console.log("value", value);
    const selectedCrit = data_crits?.find((item: any) => item.id == value);
    console.log("selectedCrit", selectedCrit);
    if (selectedCrit) {
       //form.setValues({ criteria: selectedCrit });
       const updatedValues = structuredClone(selectedCrit); // Deep copy
form.setValues({ 
  ...form.values, 
  criteria: updatedValues 
});
    }
  }
  function handleSelectProfilesChange(value: any) {
    console.log("value", value);
    const selectedProfile = data_profiles?.find((item: any) => item.id == value);
    console.log("selectedCrit", selectedProfile);
    if (selectedProfile) {
      form.setValues({ job_profile: selectedProfile});
    }
  }

  /*const handleSubmit = (values: VacancyZayavka) => {
    console.log('Form values:', values);
    //!!dispatch(createVacancyHH(values));
  };*/

  /*  const resetForm = () => {
    //  dispatch(updateJobSearchForm(candidateSearchFormInitialState));
      form.setValues(candidateSearchFormInitialState);
      // form.reset()
      setFormRenderCount((prev) => prev + 1);
      console.log('reseted');
    }; */

  const handleSubmit = async (values: any) => {
    //: VacancyZayavka
    try {
      await createProfile(values).unwrap();
      console.log("Vacancy created successfully");
    } catch (error) {
      console.error("Failed to create vacancy:", error);
    }
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="relative w-full max-w-full p-4 text-black dark:text-white">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="relative grid w-full max-w-full grid-cols-1 gap-6 text-left"
      >
        <div className="flex w-full max-w-full flex-col gap-6">
          <Title order={2} className="font-light">
            {stepNames[activeStep]}
          </Title>

          {activeStep === 0 && (
            <>
              <div>
                <TextInput
                  label="Имя заявки (или будет создано автоматически)"
                  placeholder="Имя заявки" //штатное расписание для совместимости с 1С или системами Заказчика
                  labelProps={{ style: customLabelStyle }}
                  {...form.getInputProps("name")}
                />
                <TextHint dimmed>
                  По этому имени вы сможете найти заявку вакансии в списках и
                  таблицах
                </TextHint>
              </div>

              <DatePickerInput
                locale="ru"
                label="Дата закрытия"
                placeholder="Выберите дату"
                minDate={new Date()}
                labelProps={{ style: customLabelStyle }}
                //value={value}
                //onChange={setValue}
                {...form.getInputProps("deadline")}
              />

              <Select
                label="Приоритет"
                placeholder="Выберите приоритет"
                data={[
                  {
                    value: "0",
                    label: "Низкий",
                  },
                  { value: "1", label: "Средний" },
                  { value: "2", label: "Высокий" },
                ]}
                {...form.getInputProps("priority")}
              />
              {/*---------------------------------------------from profile------------------------------------------*/}
              <Select
                label="Профиль"
                placeholder="Выберите профиль"
                data={profilesSelectData} // Replace with actual data
                multiple
                onChange={(e) => handleSelectProfilesChange(e)}
              />
              <TextInput
                label="Должность"
                placeholder="Должность" //штатное расписание для совместимости с 1С или системами Заказчика
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("job_profile.speciality")}
              />
              <TextInput
                label="Подразделение"
                placeholder="Подразделение"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("job_profile.org_unit")}
              />

              <Textarea
                label="Обязанности"
                placeholder="Описание обязанностей (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_profile.job_description")}
              />

              <Textarea
                label="Условия"
                placeholder="Описание условий (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_profile.job_conditions")}
              />

              <Textarea
                label="Требования"
                placeholder="Описание требований (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_profile.job_requirements")}
              />

              {/*

<TextInput
                label="Проект"
                placeholder="На всякий случай: еще один аналитический разрез для фильтрации и группировки подбора (как у Сбера)"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_project")}
              />


              <TextInput
                label="Организация"
                placeholder="" //Отдел/подразделение - организационная единица, в которую осуществляется подбор (может передаваться по обмену)
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org")}
              />

              <TextInput
                label="Наименование вакансии"
                placeholder="Введите наименование вакансии"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_job_name")}
              />

              <Textarea
                label="Описание"
                placeholder="Описание"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("description")}
              />

              <TextInput
                label="Отдел"
                placeholder="Отдел"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_department")}
              />

              <TextInput
                label="Направление деятельности"
                placeholder="Введите наименование вакансии"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_area_of_business")}
              />
              */}
              {/*
              <TextInput
                label="ID вакансии"
                placeholder="ID вакансии. Укажите номер или идентификатор вакансии из ваших систем (например, из 1С), чтобы не путать вакансии с одинаковыми названиями между собой. Может быть пустым или заполняться вручную если нет обмена."
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('jobID')}
              />

              <TextInput
                label="Желаемая дата закрытия"
                placeholder="Введите желаемую дату закрытия вакансии"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('desiredClosureDate')}
              />

              <Checkbox
                label="Массовый подбор"
                checked={form.values.massRecruitment}
                onChange={(event) =>
                  form.setFieldValue('massRecruitment', event.currentTarget.checked)
                }
                // labelProps={{ style: customLabelStyle }}
              />

              <NumberInput
                label="Количество кандидатов"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите количество кандидатов, после работы ИИ для рассмотрения Заказчиком"
                min={1}
                {...form.getInputProps('candidateCount')}
              />

              
              */}
            </>
          )}

          {activeStep === 1 && (
            <>
              Внимание, вы можете заполнить этот шаг автоматически из шаблона
              критериев.
              <Select
                label="Критерии"
                placeholder="Выберите критерии"
                data={critsSelectData} // Replace with actual data
                multiple
                onChange={(e) => handleSelectCritsChange(e)}
              />
              <Divider />
              <TextInput
                label="Метро/район"
                placeholder="Метро/район"
                // data={[]} // Replace with actual data
                //  multiple
                {...form.getInputProps("criteria.metro")}
              />
              <Select
                label="Готовность к переезду"
                placeholder="Выберите готовность к переезду"
                data={[
                  {
                    value: "living_or_relocation",
                    label: "Проживание или переезд",
                  },
                  { value: "living", label: "Проживание" },
                  { value: "relocation", label: "Переезд" },
                ]}
                {...form.getInputProps("criteria.relocation_type")}
              />
              <Checkbox.Group
                label="График работы"
                {...form.getInputProps("criteria.schedule")}
                className="checkbox-group"
              >
                <Checkbox value="fullDay" label="Полный день" />
                <Checkbox value="shift" label="Сменный график" />
                <Checkbox value="flexible" label="Гибкий" />
                <Checkbox value="remote" label="Удаленная работа" />
                <Checkbox value="flyInFlyOut" label="Вахта" />
              </Checkbox.Group>
              <NumberInput
                label="Опыт работы (лет)"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите количество лет опыта"
                min={0}
                {...form.getInputProps("criteria.experience")}
              />
              <Select
                label="Пол"
                placeholder="Выберите пол"
                data={[
                  { value: "male", label: "Муж" },
                  { value: "female", label: "Жен" },
                ]}
                {...form.getInputProps("criteria.gender")}
              />
              <Group>
                <NumberInput
                  label="Возраст (от)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст от"
                  min={0}
                  {...form.getInputProps("criteria.age")}
                />

                <NumberInput
                  label="Возраст (до)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст до (не обязательно)"
                  min={0}
                  {...form.getInputProps("criteria.age.to")}
                />
              </Group>
              <NumberInput
                label="Зарплата до"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите зарплату до (не обязательно)"
                min={0}
                {...form.getInputProps("criteria.salary")}
              />
              <Textarea
                label="description"
                placeholder="Внутренний комментарий (не обязательно)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("description")}
              />
            </>
          )}

          {activeStep === 2 && (
            <>
              <Select
                label="Этап работы"
                placeholder="Выберите этап работы"
                data={[]} // Replace with actual data
                //multiple
                disabled
                // {...form.getInputProps("missed")}
              />
              <Checkbox
                label="Массовый плдбор"
                {...form.getInputProps("is_mass_selection")}
              />
              <Select
                label="Ответсвенный"
                placeholder="Выберите ответсвенного"
                data={[]} // Replace with actual data
                multiple
                disabled
                {...form.getInputProps("responsible")}
              />
              <Checkbox.Group
                label="Парсинг"
                {...form.getInputProps("parsing")}
              >
                <Checkbox disabled value="hh" label="hh.ru" />
                <Checkbox disabled value="rabota" label="rabota.ru" />
              </Checkbox.Group>

              <Checkbox.Group
                label="Разместить вакансию"
                {...form.getInputProps("postVacancy")}
              >
                <Checkbox disabled value="hh" label="hh.ru" />
                <Checkbox disabled value="rabota" label="rabota.ru" />
              </Checkbox.Group>
            </>
          )}

          {/*activeStep === 1 && (
            <>
              Внимание, вы можете заполнить этот шаг автоматически из шаблона
              критериев.
              <Select
                label="Критерии"
                placeholder="Выберите критерии"
                data={critsSelectData} // Replace with actual data
                multiple
                onChange={(e) => handleSelectChange(e)}
              />
              <Divider />
             
              <TextInput
                label="Метро/район"
                placeholder="Метро/район"
                // data={[]} // Replace with actual data
                //  multiple
                {...form.getInputProps("criteria.metro")}
              />
              <Select
                label="Готовность к переезду"
                placeholder="Выберите готовность к переезду"
                data={[
                  {
                    value: "living_or_relocation",
                    label: "Проживание или переезд",
                  },
                  { value: "living", label: "Проживание" },
                  { value: "relocation", label: "Переезд" },
                ]}
                {...form.getInputProps("criteria.relocation_type")}
              />
              <Checkbox.Group
                label="График работы"
                {...form.getInputProps("criteria.schedule")}
                className="checkbox-group"
              >
                <Checkbox value="fullDay" label="Полный день" />
                <Checkbox value="shift" label="Сменный график" />
                <Checkbox value="flexible" label="Гибкий" />
                <Checkbox value="remote" label="Удаленная работа" />
                <Checkbox value="flyInFlyOut" label="Вахта" />
              </Checkbox.Group>
              <NumberInput
                label="Опыт работы (лет)"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите количество лет опыта"
                min={0}
                {...form.getInputProps("criteria.experience")}
              />
              <Select
                label="Пол"
                placeholder="Выберите пол"
                data={[
                  { value: "male", label: "Муж" },
                  { value: "female", label: "Жен" },
                ]}
                {...form.getInputProps("criteria.gender")}
              />
              <Group>
                <NumberInput
                  label="Возраст (от)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст от"
                  min={0}
                  {...form.getInputProps("criteria.age")}
                />

                <NumberInput
                  label="Возраст (до)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст до (не обязательно)"
                  min={0}
                  {...form.getInputProps("criteria.age.to")}
                />
              </Group>
              <NumberInput
                label="Зарплата до"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите зарплату до (не обязательно)"
                min={0}
                {...form.getInputProps("criteria.salary")}
              />
            </>
          )*/}

          {/*activeStep === 2 && (
            <>
              <Checkbox.Group
                label="Парсинг"
                {...form.getInputProps("parsing")}
              >
                <Checkbox value="hh" label="hh.ru" />
                <Checkbox value="rabota" label="rabota.ru" />
              </Checkbox.Group>

              <Checkbox.Group
                label="Разместить вакансию"
                {...form.getInputProps("postVacancy")}
              >
                <Checkbox value="hh" label="hh.ru" />
                <Checkbox value="rabota" label="rabota.ru" />
              </Checkbox.Group>

              

              <Checkbox.Group
                label="Разместить вакансию"
                {...form.getInputProps("postVacancy")}
              >
                <Checkbox value="hh" label="hh.ru" />
                <Checkbox value="rabota" label="rabota.ru" />
              </Checkbox.Group>
            </>
          )*/}

          {/*
           {/*<Select
                label="Метро/район"
                placeholder="Выберите один или несколько регионов"
                data={[]} // Replace with actual data
                multiple
                {...form.getInputProps('criteria.metro')}
              />*/}

          <div
            className={`mt-4 flex w-full ${activeStep == 0 ? "justify-center" : "justify-center"} gap-4`}
          >
            {activeStep > 0 && (
              <Button
                // variant="default"
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
                Создать вакансию
              </Button>
            )}
          </div>
        </div>

        {/*}  <Button type="submit" className="w-full max-w-80">
          Создать тестовый профиль вакансии
        </Button> */}
      </form>
      <SpaceYMain />
      {isLoading && <Preloader />}
      {(error || isError) && <BasicError error={error} />}
      <JSONViewer data={form.values} />
    </div>
  );
};

//export default VacancyCreationFormHH;

/*

I have form , but I want to reformat it , make template for all similar forms, I need to pass form (initValues, validate) as params, also is very important to pass  my RTK query as props, also all fields (here I want to make an array of objects, where object will have type on Input, array of values if it is select or checkboxexs group, label, placeholder. 

"use client";

import { useForm } from "@mantine/form";
import { TextInput, Textarea, Select, Button, Title } from "@mantine/core";
import { STYLES } from "@/global/CONSTS";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/rtk/store/store";
import {
  useCreateProfileMutation,
  useGetSearchCritsQuery,
} from "@/rtk/queries/joborder";
import { BasicError } from "@/components/Errors/BasicError";
import { SpaceYMain } from "@/components/__atoms/Spacers/Spacers";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import React from "react";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { TextHint } from "@/components/__atoms/TextBlocks/TextBlocks";
import { useMutationNotifications } from "@/hooks/useNotifications";
type TProps = {
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
}: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [
    createProfile,
    { isLoading, isSuccess, isError, error, data, isUninitialized, reset },
  ] = useCreateProfileMutation();
  //useDebugFormMutation();
  const {
    data: data_crits,
    isLoading: loading_crits,
    error: error_crits,
  } = useGetSearchCritsQuery();

  const [critsSelectData, setCritsSelectData] = React.useState<any[]>([]);

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

  const form = useForm({
    initialValues: demoValues,
    validate: {},
  });

  useMutationNotifications({
    text: "Профиль успешно создан",
    data: data,
    data_details: (data as any)?.msg
      ? (data as any)?.msg
      : "Вы можете найти его в списке профилей",
    error: error,
  });

  React.useEffect(() => {
    if (data_crits && data_crits[0]) {
      const selectData = data_crits.map((item: any) => ({
        value: item.id.toString(), // Using `id` as value
        label: item.name, // Using `name` as label
      }));
      setCritsSelectData(selectData);
    }
  }, [data_crits]);

  const handleSubmit = async (values: any) => {
    try {
      await createProfile(values).unwrap();
      console.log("Vacancy created successfully");
    } catch (error) {
      console.error("Failed to create vacancy:", error);
    }
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="relative w-full max-w-full p-4 text-black dark:text-white">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="relative grid w-full max-w-full grid-cols-1 gap-6 text-left"
      >
        <div className="flex w-full max-w-full flex-col gap-6">
          <Title order={2} className="font-light">
            {stepNames[activeStep]}
          </Title>

          {activeStep === 0 && (
            <>
              <div>
                <TextInput
                  label="Имя профиля"
                  placeholder="Имя профиля" 
                  labelProps={{ style: customLabelStyle }}
                  {...form.getInputProps("name")}
                />
                <TextHint dimmed>
                  По этому имени вы сможете найти профиль вакансии в списках и
                  таблицах
                </TextHint>
              </div>
              <TextInput
                label="Должность"
                placeholder="Должность"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("speciality")}
              />
              <TextInput
                label="Подразделение"
                placeholder="Подразделение"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_unit")}
              />
              <TextInput
                label="Проект"
                placeholder="На всякий случай: еще один аналитический разрез для фильтрации и группировки подбора (как у Сбера)"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_project")}
              />

              <Textarea
                label="Обязанности"
                placeholder="Описание обязанностей (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_description")}
              />

              <Textarea
                label="Условия"
                placeholder="Описание условий (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_conditions")}
              />

              <Textarea
                label="Требования"
                placeholder="Описание требований (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_requirements")}
              />
            </>
          )}

          {activeStep === 1 && (
            <>
              <Select
                label="Этап работы"
                placeholder="Выберите этап работы"
                data={[]} 
                disabled
              />
              <Select
                label="Согласование"
                placeholder="Выберите согласующего"
                data={[]} 
                multiple
                disabled
              />
            </>
          )}

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
                Создать вакансию
              </Button>
            )}
          </div>
        </div>

      </form>
      <SpaceYMain />
      {isLoading && <Preloader />}
      {(error || isError) && <BasicError error={error} />}
      <JSONViewer data={form.values} />
    </div>
  );
};


*/
