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
//import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyApiSlice';


export const VacancyCreationFormZayavka = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const [createVacancy] = useCreateVacancyMutation();

  const form = useForm<VacancyZayavka>({
    initialValues: {
      jobTitle: '',
      department: '',
      projectDirection: '',
      jobName: '',
      jobID: '',
      desiredClosureDate: '',
      massRecruitment: false,
      candidateCount: 1,
      responsibilities: '',
      conditions: '',
      requirements: '',
    },

    validate: {
      jobTitle: (value) => (value ? null : 'Введите должность'),
      department: (value) => (value ? null : 'Укажите подразделение'),
      projectDirection: (value) => (value ? null : 'Укажите проект/направление'),
      jobName: (value) => (value ? null : 'Укажите наименование вакансии'),
    },
  });

  /*const handleSubmit = (values: VacancyZayavka) => {
    console.log('Form values:', values);
    //!!dispatch(createVacancyHH(values));
  };*/

  const handleSubmit = async (values: VacancyZayavka) => {
    try {
      await createVacancy(values).unwrap();
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
          <Title order={2} className="font-light">Основная информация</Title>

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
            onChange={(event) => form.setFieldValue('massRecruitment', event.currentTarget.checked)}
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

          <div className="w-full flex justify-center">
            <Button mt="md" type="submit" className='w-full max-w-80'>
              Создать вакансию
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

//export default VacancyCreationFormHH;
