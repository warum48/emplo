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
  Text,
} from "@mantine/core";
import { STYLES } from "@/global/CONSTS";
import { useDispatch } from "react-redux";
import { createVacancyHH } from "@/rtk/slices/vacancy/vacancySliceHH";
import { AppDispatch } from "@/rtk/store/store";
import { VacancyZayavka } from "@/types/Vacancy";
import { useCreateVacancyMutation } from "@/rtk/slices/vacancy/vacancyZayavkaSlice";
import { RelocationType } from "@/types/CandidateSearchForm";
import {
    useCreateCriteriaMutation,
  useCreateProfileMutation,
  useGetSearchCritsQuery,
  useLazyGetSearchCritsQuery,
} from "@/rtk/queries/joborder";
import { BasicError } from "@/components/Errors/BasicError";
import { SpaceYMain } from "@/components/__atoms/Spacers/Spacers";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import React from "react";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { TextHint } from "@/components/__atoms/TextBlocks/TextBlocks";
import { useDebugFormMutation } from "@/rtk/queries/debug";
import { useMutationNotifications } from "@/hooks/useNotifications";
//import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyApiSlice';

type TProps = {
  activeStep?: number;
  setActiveStep?: React.Dispatch<React.SetStateAction<number>>;
  //onBack: () => void;
  onNext?: (values: any) => void;
  stepNames?: string[];
};

export const NewCriteriaForm = ({
  activeStep = 0,
  setActiveStep = ()=>{},
  onNext= ()=>{},
  stepNames = ["Критерии"],
}: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [
    createProfile,
    { isLoading, isSuccess, isError, error, data, isUninitialized, reset },
  ] =
  useCreateCriteriaMutation();
    //useDebugFormMutation();
  const {
    data: data_crits,
    isLoading: loading_crits,
    error: error_crits,
  } = useGetSearchCritsQuery();
  const [
    getLazyCrits,
    {
      data: lazy_crits,
      isLoading: loading_lazy_crits,
      error: error_lazy_crits,
    },
  ] = useLazyGetSearchCritsQuery();
  const [critsSelectData, setCritsSelectData] = React.useState<any[]>([]);

  //  org_unit - Подразделение
  //org_department - Отдел
  //org_project - Проект

  const demoValues = {
    
   /* criteria: {
      "id": 0,
      "speciality": "",
      "area": "",
      "metro": "",
      "schedule": "",
      "relocation_type": "",
      "experience": 0,
      "gender": 0,
      "age": 0,
      "salary": 0,
      "job_search_status": "",
      "search_limit_target": 0,
      "created_by": ""
    },*/

    
        //"name": "Критерий", //55e53ef3f2914a3c94b773cc75b53fa3
        "speciality": "Мерчандайзер",
        "area": "Санкт-Петербург",
        "metro": "Не указана",
        "schedule": "fullDay",
        "relocation_type": "living_or_relocation",
        "experience": 1,
        "gender": "male",
        "age": 18,
        "salary": 30000,
        "job_search_status": "active_search",
        "search_limit_target": 1,
       // "created_by": "string"
      
    
  };

  const form = useForm({
    //<VacancyZayavka>
    initialValues: demoValues,

    validate: {},
  });

  useMutationNotifications({
    text: "Критерий успешно создан",
    data: data,
    data_details:
      (data as any)?.msg ? (data as any)?.msg : "Вы можете найти его в списке критериев",
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

  function handleSelectChange(value: any) {
    console.log("value", value);
    const selectedCrit = data_crits?.find((item: any) => item.id == value);
    console.log("selectedCrit", selectedCrit);
    if (selectedCrit) {
      //!!! form.setValues({ criteria: selectedCrit });
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

         
              <TextInput
                label="Метро/район"
                placeholder="Метро/район"
                // data={[]} // Replace with actual data
                //  multiple
                {...form.getInputProps("metro")}
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
                {...form.getInputProps("relocation_type")}
              />
              <Checkbox.Group
                label="График работы"
                {...form.getInputProps("schedule")}
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
                {...form.getInputProps("experience")}
              />
              <Select
                label="Пол"
                placeholder="Выберите пол"
                data={[
                  { value: "male", label: "Муж" },
                  { value: "female", label: "Жен" },
                ]}
                {...form.getInputProps("gender")}
              />
              <Group>
                <NumberInput
                  label="Возраст (от)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст от"
                  min={0}
                  {...form.getInputProps("age")}
                />

                <NumberInput
                  label="Возраст (до)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст до (не обязательно)"
                  min={0}
                  {...form.getInputProps("age.to")}
                />
              </Group>
              <NumberInput
                label="Зарплата до"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите зарплату до (не обязательно)"
                min={0}
                {...form.getInputProps("salary")}
              />
            
          

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
                Создать критерии
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

//---------------
/*
Request URL:
https://irs-back.digital-solutions.org/api/joborder/search_crits
Request Method:
POST
Status Code:
405 Method Not Allowed


Request URL:
https://irs-back.digital-solutions.org/api/joborder/search_crits/
Request Method:
POST
Status Code:
405 Method Not Allowed

*/


/*
another problem : we pass gender as 'female' - then it transforms in list to 'Женский',  then I try to pass 'Женский" in new job_order , it says "Пола: Женский нет среди доступных"

*/