'use client';

import { useForm } from '@mantine/form';
import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Select,
  Checkbox,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { createVacancy } from '@/rtk/features/vacancy/vacancySlice';
import { NewVacancyFormValues } from '@/types/HHVacancy';
import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancySliceHHReal';
//import { useCreateVacancyMutation } from '@/rtk/features/vacancy/vacancyZayavkaSlice';

const NewVacancyForm = () => {
  //const dispatch = useDispatch();

  // Define the form state using useForm from Mantine
  const form = useForm<NewVacancyFormValues>({
    initialValues: {
      name: 'Тестовая вакансия (не откликаться)',//'',
      professional_roles: "Мерчандайзер",//'',
      employment: null,
      area: 'Санкт-Петербург',//'',
      salary: {
        currency: 'RUR',
        bottom: 10000,
        gross: true,
        to: 200000,
      },
      type: '',
      description: '',
      billing_type: '',
      accept_handicapped: false,
      accept_kids: false,
      accept_temporary: false,
      allow_messages: true,
    },
    validate: {
   /*!!   name: (value) => (value ? null : 'Пожалуйста, укажите название вакансии'),
      professional_roles: (value) =>
        value ? null : 'Пожалуйста, укажите должность',
      area: (value) => (value ? null : 'Пожалуйста, укажите регион поиска'),
      description: (value) =>
        value && value.length >= 200
          ? null
          : 'Описание вакансии должно быть не менее 200 символов',
      type: (value) => (value ? null : 'Пожалуйста, укажите тип вакансии'),
      billing_type: (value) =>
        value ? null : 'Пожалуйста, укажите систему биллинга',
      employment: (value) =>
        value ? null : 'Пожалуйста, укажите тип занятости',
      */
    },
  });

 /* const handleSubmit = (values: NewVacancyFormValues) => {
    console.log('Form submitted with values:', values);
   // useCreateVacancyMutation 
   // dispatch(createVacancy(values));
  };*/

  const [createVacancy, { isLoading, error }] = useCreateVacancyMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values:NewVacancyFormValues) => {
    try {
      const response = await createVacancy(values).unwrap();
      //dispatch(resetForm());
      // Handle success (e.g., show notification)
      console.log('suc', response);
    } catch (err) {
      // Handle error
      console.error('Failed to create vacancy:', err);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      {/* Job Name */}
      <TextInput
        label="Название вакансии *"
        placeholder="Введите название вакансии"
        {...form.getInputProps('name')}
      />

      {/* Professional Roles */}
      <TextInput
        label="Должность *"
        placeholder="Введите должность"
        {...form.getInputProps('professional_roles')}
      />

      {/* Employment Type */}
      <Select
        label="Тип занятости *"
        placeholder="Выберите тип занятости"
        data={[
          { value: 'full', label: 'Полная занятость' },
          { value: 'part', label: 'Частичная занятость' },
          { value: 'project', label: 'Проектная работа' },
          { value: 'probation', label: 'Стажировка' },
          { value: 'volunteer', label: 'Волонтерство' },
        ]}
        {...form.getInputProps('employment')}
      />

      {/* Area */}
      <TextInput
        label="Регион поиска *"
        placeholder="Введите регион"
        {...form.getInputProps('area')}
      />

      {/* Salary */}
      <div className="grid grid-cols-1 gap-4">
        <TextInput
          label="Валюта"
          placeholder="Введите код валюты"
          {...form.getInputProps('salary.currency')}
        />
        <NumberInput
          label="Нижняя граница ЗП"
          placeholder="Введите минимальную зарплату"
          {...form.getInputProps('salary.bottom')}
        />
        <NumberInput
          label="Верхняя граница ЗП"
          placeholder="Введите максимальную зарплату"
          {...form.getInputProps('salary.to')}
        />
        <Checkbox
          label="С вычетом налога"
          {...form.getInputProps('salary.gross', { type: 'checkbox' })}
        />
      </div>

      {/* Vacancy Type */}
      <Select
        label="Тип вакансии *"
        placeholder="Выберите тип вакансии"
        data={[
          { value: 'open', label: 'Открытая' },
          { value: 'closed', label: 'Закрытая' },
          { value: 'anonymous', label: 'Анонимная' },
          { value: 'direct', label: 'Рекламная' },
        ]}
        {...form.getInputProps('type')}
      />

      {/* Description */}
      <Textarea
        label="Описание вакансии *"
        placeholder="Опишите вакансию"
        {...form.getInputProps('description')}
      />

      {/* Billing Type */}
      <Select
        label="Система биллинга *"
        placeholder="Выберите систему биллинга"
        data={[
          { value: 'free', label: 'Бесплатная' },
          { value: 'standard', label: 'Стандарт' },
          { value: 'standard_plus', label: 'Стандарт плюс' },
          { value: 'premium', label: 'Премиум' },
        ]}
        {...form.getInputProps('billing_type')}
      />

      {/* Checkboxes */}
      <Checkbox
        label="Соискатель с инвалидностью"
        {...form.getInputProps('accept_handicapped', { type: 'checkbox' })}
      />
      <Checkbox
        label="Соискатель старше 14"
        {...form.getInputProps('accept_kids', { type: 'checkbox' })}
      />
      <Checkbox
        label="Временное трудоустройство"
        {...form.getInputProps('accept_temporary', { type: 'checkbox' })}
      />
      <Checkbox
        label="Разрешение на сообщения"
        {...form.getInputProps('allow_messages', { type: 'checkbox' })}
      />

      {/* Submit Button */}
      <Group 
      //position="center" 
      mt="md">
        <Button type="submit">Создать вакансию</Button>
      </Group>
    </form>
  );
};

export default NewVacancyForm;
