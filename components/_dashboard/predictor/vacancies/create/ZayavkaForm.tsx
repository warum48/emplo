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
} from '@mantine/core';
import { STYLES } from '@/global/CONSTS';
import { useDispatch } from 'react-redux';
import { createVacancyHH } from '@/rtk/features/vacancy/vacancySliceHH';
import { AppDispatch } from '@/rtk/store/store';
import { VacancyZayavka } from '@/types/Vacancy';
import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyZayavkaSlice';
import { RelocationType } from '@/types/CandidateSearchForm';
//import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyApiSlice';

type TProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  //onBack: () => void;
  onNext: (values: any) => void;
  stepNames: string[];
};

export const VacancyCreationFormZayavka = ({ activeStep, setActiveStep, onNext, stepNames }: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [createVacancy] = useCreateVacancyMutation();



  const form = useForm<VacancyZayavka>({
    initialValues: {
      /*  jobTitle: '',
      department: '',
      projectDirection: '',
      jobName: '',
      jobID: '',
      desiredClosureDate: '',
      massRecruitment: false,
      candidateCount: 1,
      responsibilities: '',
      conditions: '',
      requirements: '',*/
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
    },

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

  /*const handleSubmit = (values: VacancyZayavka) => {
    console.log('Form values:', values);
    //!!dispatch(createVacancyHH(values));
  };*/

  const handleSubmit = async (values: VacancyZayavka) => {
    try {
      //!!!!await createVacancy(values).unwrap();
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
              <TextInput
                label="Должность"
                placeholder="штатное расписание для совместимости с 1С или системами Заказчика"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('jobTitle')}
              />

              <TextInput
                label="Подразделение"
                placeholder="Отдел/подразделение - организационная единица, в которую осуществляется подбор (может передаваться по обмену)"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('department')}
              />

              <TextInput
                label="Проект/направление"
                placeholder="На всякий случай: еще один аналитический разрез для фильтрации и группировки подбора (как у Сбера)"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('projectDirection')}
              />

              <TextInput
                label="Наименование вакансии"
                placeholder="Введите наименование вакансии"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps('jobName')}
              />

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
            </>
          )}

          {/*---------------------------------*/}
          {activeStep === 1 && (
            <>
              <Select
                label="Метро/район"
                placeholder="Выберите один или несколько регионов"
                data={[]} // Replace with actual data
                multiple
                {...form.getInputProps('area')}
              />

              <Select
                label="Готовность к переезду"
                placeholder="Выберите готовность к переезду"
                data={[
                  { value: 'living_or_relocation', label: 'Проживание или переезд' },
                  { value: 'living', label: 'Проживание' },
                  { value: 'relocation', label: 'Переезд' },
                ]}
                {...form.getInputProps('relocationType')}
              />

              <Checkbox.Group label="График работы" {...form.getInputProps('schedule')}>
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
                {...form.getInputProps('experience')}
              />

              <Select
                label="Пол"
                placeholder="Выберите пол"
                data={[
                  { value: 'male', label: 'Муж' },
                  { value: 'female', label: 'Жен' },
                ]}
                {...form.getInputProps('gender')}
              />

              <Group>
                <NumberInput
                  label="Возраст (от)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст от"
                  min={0}
                  {...form.getInputProps('age.from')}
                />

                <NumberInput
                  label="Возраст (до)"
                  labelProps={{ style: customLabelStyle }}
                  placeholder="Введите возраст до (не обязательно)"
                  min={0}
                  {...form.getInputProps('age.to')}
                />
              </Group>

              <NumberInput
                label="Зарплата до"
                labelProps={{ style: customLabelStyle }}
                placeholder="Введите зарплату до (не обязательно)"
                min={0}
                {...form.getInputProps('salary')}
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

          {/*
          <Checkbox
            label="Массовый подбор"
            {...form.getInputProps('massRecruitment', { type: 'checkbox' })}
          />

          <NumberInput
            label="Количество кандидатов"
            labelProps={{ style: customLabelStyle }}
            placeholder="Введите количество кандидатов"
            min={1}
            {...form.getInputProps('candidateCount')}
          />

          <Textarea
            label="Обязанности"
            placeholder="Введите обязанности"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('responsibilities')}
          />

          <Textarea
            label="Условия"
            placeholder="Введите условия"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('conditions')}
          />

          <Textarea
            label="Требования"
            placeholder="Введите требования"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('requirements')}
          />
          */}

<div className={`mt-4 w-full flex ${activeStep == 0 ? 'justify-center' : 'justify-between'} `}>
          
            {activeStep > 0 && (
              <Button
                variant="default"
                onClick={() => setActiveStep((activeStep:number) => activeStep - 1)}
                className="w-full max-w-80"
              >
                Назад
              </Button>
            )}
            {activeStep < stepNames.length - 1 && (
              <Button
                onClick={() => setActiveStep((activeStep:number) => activeStep + 1)}
                className="w-full max-w-80"
              >
                Далее
              </Button>
            )}
            {activeStep == stepNames.length - 1 &&
            <Button  type="submit" className="w-full max-w-80">
              Создать вакансию
            </Button>
}
          </div>
          </div>
       
      </form>
    </div>
  );
};

//export default VacancyCreationFormHH;
