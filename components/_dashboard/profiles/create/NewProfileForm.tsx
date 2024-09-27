'use client';

import { useForm } from '@mantine/form';
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
  Text
} from '@mantine/core';
import { STYLES } from '@/global/CONSTS';
import { useDispatch } from 'react-redux';
import { createVacancyHH } from '@/rtk/slices/vacancy/vacancySliceHH';
import { AppDispatch } from '@/rtk/store/store';
import { VacancyZayavka } from '@/types/Vacancy';
import { useCreateVacancyMutation } from '@/rtk/slices/vacancy/vacancyZayavkaSlice';
import { RelocationType } from '@/types/CandidateSearchForm';
import {
  useCreateProfileMutation,
  useGetSearchCritsQuery,
  useLazyGetSearchCritsQuery,
} from '@/rtk/queries/joborder';
import { BasicError } from '@/components/Errors/BasicError';
import { SpaceYMain } from '@/components/__atoms/Spacers/Spacers';
import { Preloader } from '@/components/__atoms/Preloader/Preloader';
import React from 'react';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { TextHint } from '@/components/__atoms/TextBlocks/TextBlocks';
//import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyApiSlice';

type TProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  //onBack: () => void;
  onNext: (values: any) => void;
  stepNames: string[];
};

export const NewProfileForm = ({ activeStep, setActiveStep, onNext, stepNames }: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [createProfile, { isLoading, isSuccess, isError, error, data, isUninitialized, reset }] =
    useCreateProfileMutation();
  const {
    data: data_crits,
    isLoading: loading_crits,
    error: error_crits,
  } = useGetSearchCritsQuery();
  const [
    getLazyCrits,
    { data: lazy_crits, isLoading: loading_lazy_crits, error: error_lazy_crits },
  ] = useLazyGetSearchCritsQuery();
  const [critsSelectData, setCritsSelectData] = React.useState<any[]>([]);

//  org_unit - Подразделение
//org_department - Отдел
//org_project - Проект
  const demoValues = {
    name: "Новый профиль",

    speciality: 'Водитель-курьер',
    org: 'Чистая линия',
    org_job_name: 'Водитель-курьер',

    org_unit: "Подразделение",
    org_department: "Отдел",
    org_project: "Проект",
    org_area_of_business: "Направление деятельности",

    criteria: {
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
    },
    description: 'Тестовое описание тестового профайла тестовой вакансии',
  //  "created_at": "2024-09-27T13:55:42.906Z",
  //  "created_by": "string",
    /*
    {
    "name": "string",
    "speciality": "string",
    "org": "string",
    "org_unit": "string",
    "org_department": "string",
    "org_job_name": "string",
    "org_project": "string",
    "org_area_of_business": "string",
    "criteria": {
      "id": 0,
      "speciality": "string",
      "area": "string",
      "metro": "string",
      "schedule": "string",
      "relocation_type": "string",
      "experience": 0,
      "gender": 0,
      "age": 0,
      "salary": 0,
      "job_search_status": "string",
      "search_limit_target": 0,
      "created_by": "string"
    },
    "description": "string",
    "created_at": "2024-09-27T13:55:42.906Z",
    "created_by": "string"
    */
    
    //{}
     /* {
    "id": 0,
    "speciality": "Водитель-курьер",
    "area": "Москва",
    "metro": "Речной вокзал",
    "schedule": "24/7",
    "relocation_type": "Только для релокантов",
    "experience": 2,
    "gender": 0,
    "age": 16,
    "salary": 0,
    "job_search_status": "Любой",
    "search_limit_target": 100,
    "created_by": "Warum"
  },*/
   // description: 'Тестовое описание тестового профайла тестовой вакансии',
  };

  const form = useForm({
    //<VacancyZayavka>
    initialValues: demoValues /*{
      
      jobTitle: '',
      department: '',
      projectDirection: '',
      jobName: '',
      jobID: '',
      desiredClosureDate: '',
      area: [],
      relocation_type: undefined,
      schedule: [],
      experience: 0,
      gender: 'male',
      age: { from: 0, to: 0 },
      salary: 0,
      parsing: [], //{ hh: false, rabota: false },
      postVacancy: [], //{ hh: false, rabota: false },
      massRecruitment: false,
      candidateCount: 1,
      responsibilities: '',
      conditions: '',
      requirements: '',
    }, */,

    validate: {
      /* jobTitle: (value) => (value ? null : 'Введите должность'),
      department: (value) => (value ? null : 'Укажите подразделение'),
      projectDirection: (value) => (value ? null : 'Укажите проект/направление'),
      jobName: (value) => (value ? null : 'Укажите наименование вакансии'),*/
      /*validate: (values) => {
      const errors = {} as any;
      if (activeStep === 0 && values.field1.length < 2) {
        errors.field1 = 'Field 1 must have at least 2 characters';
      }
      if (activeStep === 1 && values.field2.length < 5) {
        errors.field2 = 'Field 2 must have at least 5 characters';
      }
      return errors;
    },*/
    },
  });

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
    console.log('value', value);
    const selectedCrit = data_crits?.find((item: any) => item.id == value);
    console.log('selectedCrit', selectedCrit);
    if (selectedCrit) {
      form.setValues({ criteria: selectedCrit });
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
      console.log('Vacancy created successfully');
    } catch (error) {
      console.error('Failed to create vacancy:', error);
    }
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="p-4 w-full relative max-w-full text-black dark:text-white">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="text-left grid grid-cols-1 gap-6 w-full max-w-full relative"
      >
        <div className="flex flex-col gap-6 w-full max-w-full">
          <Title order={2} className="font-light">
            {stepNames[activeStep]}
          </Title>

          {activeStep === 0 && (
            <>
           <div>
            <TextInput
                label="Имя профиля"
                placeholder="Имя профиля" //штатное расписание для совместимости с 1С или системами Заказчика
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('name')}
              />
              <TextHint dimmed>По этому имени вы сможете найти профиль вакансии в списках и таблицах</TextHint>
              </div>
              <TextInput
                label="Должность"
                placeholder="Должность" //штатное расписание для совместимости с 1С или системами Заказчика
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('speciality')}
              />
              <TextInput
                label="Организация"
                placeholder="" //Отдел/подразделение - организационная единица, в которую осуществляется подбор (может передаваться по обмену)
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('org')}
              />

              <TextInput
                label="Наименование вакансии"
                placeholder="Введите наименование вакансии"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('org_job_name')}
              />

              <Textarea
                label="Описание"
                placeholder="Описание"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps('description')}
              />
              
              <TextInput
                label="Подразделение"
                placeholder="Подразделение"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('org_unit')}
              />

<TextInput
                label="Отдел"
                placeholder="Отдел"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('org_department')}
              />

              <TextInput
                label="Проект"
                placeholder="На всякий случай: еще один аналитический разрез для фильтрации и группировки подбора (как у Сбера)"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('org_project')}
              />

              <TextInput
                label="Направление деятельности"
                placeholder="Введите наименование вакансии"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('org_area_of_business')}
              />
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

              <Textarea
                label="Обязанности"
                placeholder="Описание обязанностей (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps('responsibilities')}
              />

              <Textarea
                label="Условия"
                placeholder="Описание условий (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps('conditions')}
              />

              <Textarea
                label="Требования"
                placeholder="Описание требований (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps('requirements')}
              />
              */}
            </>
          )}

          {activeStep === 1 && (
            <>
              Внимание, вы можете заполнить этот шаг автоматически из шаблона критериев.
              <Select
                label="Критерии"
                placeholder="Выберите критерии"
                data={critsSelectData} // Replace with actual data
                multiple
                onChange={(e) => handleSelectChange(e)}
              />
              <Divider />
              {/*<Select
                label="Метро/район"
                placeholder="Выберите один или несколько регионов"
                data={[]} // Replace with actual data
                multiple
                {...form.getInputProps('criteria.metro')}
              />*/}
              <TextInput
                label="Метро/район"
                placeholder="Метро/район"
               // data={[]} // Replace with actual data
              //  multiple
                {...form.getInputProps('criteria.metro')}
              />
              <Select
                label="Готовность к переезду"
                placeholder="Выберите готовность к переезду"
                data={[
                  { value: 'living_or_relocation', label: 'Проживание или переезд' },
                  { value: 'living', label: 'Проживание' },
                  { value: 'relocation', label: 'Переезд' },
                ]}
                {...form.getInputProps('criteria.relocation_type')}
              />
              <Checkbox.Group label="График работы" {...form.getInputProps('criteria.schedule')} className="checkbox-group">
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
                {...form.getInputProps('criteria.experience')}
              />
              <Select
                label="Пол"
                placeholder="Выберите пол"
                data={[
                  { value: 'male', label: 'Муж' },
                  { value: 'female', label: 'Жен' },
                ]}
                {...form.getInputProps('criteria.gender')}
              />
              <Group>
                <NumberInput
                  label="Возраст (от)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст от"
                  min={0}
                  {...form.getInputProps('criteria.age')}
                />

                <NumberInput
                  label="Возраст (до)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст до (не обязательно)"
                  min={0}
                  {...form.getInputProps('criteria.age.to')}
                />
              </Group>
              <NumberInput
                label="Зарплата до"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите зарплату до (не обязательно)"
                min={0}
                {...form.getInputProps('criteria.salary')}
              />
            </>
          )}

          {activeStep === 2 && (
            <>
              <Checkbox.Group label="Парсинг" {...form.getInputProps('parsing')}>
                <Checkbox value="hh" label="hh.ru" />
                <Checkbox value="rabota" label="rabota.ru" />
              </Checkbox.Group>

              <Checkbox.Group label="Разместить вакансию" {...form.getInputProps('postVacancy')}>
                <Checkbox value="hh" label="hh.ru" />
                <Checkbox value="rabota" label="rabota.ru" />
              </Checkbox.Group>

              <Select
                label="Согласование"
                placeholder="Выберите согласующего"
                data={[]} // Replace with actual data
                multiple
                {...form.getInputProps('area')}
              />

              <Checkbox.Group label="Разместить вакансию" {...form.getInputProps('postVacancy')}>
                <Checkbox value="hh" label="hh.ru" />
                <Checkbox value="rabota" label="rabota.ru" />
              </Checkbox.Group>
            </>
          )}

          <div
            className={`mt-4 w-full flex ${activeStep == 0 ? 'justify-center' : 'justify-center'} gap-4`}
          >
            {activeStep > 0 && (
              <Button
               // variant="default"
                variant='outline'
                onClick={() => setActiveStep((activeStep: number) => activeStep - 1)}
                className="w-full max-w-80"
              >
                Назад
              </Button>
            )}
            {activeStep < stepNames.length - 1 && (
              <Button
                onClick={() => setActiveStep((activeStep: number) => activeStep + 1)}
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
