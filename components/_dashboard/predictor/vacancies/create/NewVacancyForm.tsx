'use client';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Select,
 // DateInput,
} from '@mantine/core';
import { STYLES } from '@/global/CONSTS';
import { useDispatch } from 'react-redux';
//import { createVacancy } from '@/rtk/features/vacancy/vacancySlice';
import { DateInput } from '@mantine/dates';
import { createVacancy } from '@/rtk/features/vacancy/vacancySlice';

const VacancyForm = () => {
  const dispatch = useDispatch();

  // Define the form state using useForm from Mantine
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      company_name: '',
      location: '',
      salary_from: 0,
      salary_to: 0,
      employment_type: '',
      experience_required: '',
      skills_required: '',
      contact_email: '',
      contact_phone: '',
      publish_date: '',
      application_deadline: '',
    },
    validate: {
      title: (value) => (value ? null : 'Пожалуйста, укажите название вакансии'),
      company_name: (value) => (value ? null : 'Пожалуйста, укажите название компании'),
      salary_from: (value) => (value >= 0 ? null : 'Пожалуйста, укажите корректную зарплату'),
      salary_to: (value) => (value >= 0 ? null : 'Пожалуйста, укажите корректную зарплату'),
      contact_email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неверный email'),
      contact_phone: (value) => (value ? null : 'Пожалуйста, укажите контактный телефон'),
    },
  });

  // Handler for form submission
  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted with values:', values);
    dispatch(createVacancy(values));
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="p-4 w-full relative max-w-full text-black dark:text-white">
      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className="text-left grid grid-cols-1 gap-6 w-full max-w-full relative"
      >
        {/* Job Title */}
        <TextInput
          label="Название вакансии *"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите название вакансии"
          {...form.getInputProps('title')}
        />

        {/* Company Name */}
        <TextInput
          label="Название компании *"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите название компании"
          {...form.getInputProps('company_name')}
        />

        {/* Job Description */}
        <Textarea
          label="Описание вакансии"
          labelProps={{ style: customLabelStyle }}
          placeholder="Опишите вакансию"
          {...form.getInputProps('description')}
        />

        {/* Location */}
        <TextInput
          label="Местоположение"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите местоположение"
          {...form.getInputProps('location')}
        />

        {/* Salary From */}
        <NumberInput
          label="Зарплата от *"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите минимальную зарплату"
          {...form.getInputProps('salary_from')}
        />

        {/* Salary To */}
        <NumberInput
          label="Зарплата до *"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите максимальную зарплату"
          {...form.getInputProps('salary_to')}
        />

        {/* Employment Type */}
        <Select
          label="Тип занятости"
          labelProps={{ style: customLabelStyle }}
          placeholder="Выберите тип занятости"
          data={[
            { value: 'full_time', label: 'Полная занятость' },
            { value: 'part_time', label: 'Частичная занятость' },
            { value: 'contract', label: 'Контракт' },
          ]}
          {...form.getInputProps('employment_type')}
        />

        {/* Experience Required */}
        <TextInput
          label="Требуемый опыт"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите требуемый опыт"
          {...form.getInputProps('experience_required')}
        />

        {/* Skills Required */}
        <TextInput
          label="Требуемые навыки"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите требуемые навыки"
          {...form.getInputProps('skills_required')}
        />

        {/* Contact Email */}
        <TextInput
          label="Контактный email *"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите контактный email"
          {...form.getInputProps('contact_email')}
        />

        {/* Contact Phone */}
        <TextInput
          label="Контактный телефон *"
          labelProps={{ style: customLabelStyle }}
          placeholder="Введите контактный телефон"
          {...form.getInputProps('contact_phone')}
        />

        {/* Publish Date */}
        <DateInput
          label="Дата публикации"
          labelProps={{ style: customLabelStyle }}
          placeholder="Выберите дату публикации"
          {...form.getInputProps('publish_date')}
        />

        {/* Application Deadline */}
        <DateInput
          label="Срок подачи заявок"
          labelProps={{ style: customLabelStyle }}
          placeholder="Выберите срок подачи заявок"
          {...form.getInputProps('application_deadline')}
        />

        {/* Submit button */}
        <div className="w-full flex justify-center">
        <Button mt="md" type="submit" className='w-full max-w-80'>
          Создать вакансию
        </Button>
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;
