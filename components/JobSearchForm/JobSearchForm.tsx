'use client';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Select, NumberInput, Button, Group, Container, Title } from '@mantine/core';
import { updateJobSearchForm } from '@/features/searchJobForm/searchJob';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
//import { updateJobSearchForm } from '@/features/JobSearchForm/JobSearchForm/jobSearchSlice';

const JobSearchForm = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.jobSearch);

  
  // Define the form state using useForm from Mantine
  const form = useForm({
   /* initialValues: {
      position: '',
      region: [],
      relocation: '',
      workSchedule: [],
      skills: '',
      experience: '',
      gender: '',
      ageFrom: 0,
      salaryUpTo: 0,
      jobSearchStatus: [],
      requiredResumes: 0,
    },*/
    initialValues:formState,
    // Add validation rules for the form fields
    validate: {
      position: (value) => (value ? null : 'Please select a position'),
      experience: (value) => (value ? null : 'Please select your experience level'),
      gender: (value) => (value ? null : 'Please select your gender'),
      ageFrom: (value) => (value >= 0 ? null : 'Please enter a valid age'),
      salaryUpTo: (value) => (value >= 0 ? null : 'Please enter a valid salary'),
      requiredResumes: (value) => (value >= 0 ? null : 'Please enter a valid number of resumes'),
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateJobSearchForm({ [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = (values: typeof form.values) => {
    // Process form data here
    console.log('Form submitted with values:', values);
    dispatch(updateJobSearchForm(values));
  };

  return (
    <Container size="sm" style={{ marginTop: 20 }}>
      <Title order={1}>Поиск</Title>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        {/* Position Input */}
        <Select
          label="Должность *"
          placeholder="--------"
          data={[
            { value: 'developer', label: 'Developer' },
            { value: 'designer', label: 'Designer' },
            // Add more positions as needed
          ]}
          {...form.getInputProps('position')}
        />

        {/* Region Input */}
        <Group mt="md">
          <Checkbox label="Москва" value="moscow" {...form.getInputProps('region', { type: 'checkbox' })} />
          <Checkbox label="Санкт-Петербург" value="spb" {...form.getInputProps('region', { type: 'checkbox' })} />
        </Group>

        {/* Willingness to relocate */}
        <Select
          label="Готовность к переезду"
          placeholder="Живет в регионе или готов переехать"
          data={[
            { value: 'ready_to_relocate', label: 'Готов к переезду' },
            { value: 'not_ready_to_relocate', label: 'Не готов к переезду' },
          ]}
          {...form.getInputProps('relocation')}
        />

        {/* Work schedule */}
        <Checkbox.Group
          label="График работы *"
          mt="md"
          //onChange={handleChange}
          {...form.getInputProps('workSchedule', { type: 'checkbox' })}
        >
          <Checkbox value="full_day" label="Полный день" />
          <Checkbox value="shift" label="Сменный график" />
          <Checkbox value="flexible" label="Гибкий" />
          <Checkbox value="remote" label="Удаленная работа" />
          <Checkbox value="rotation" label="Вахта" onChange={handleChange}/>
        </Checkbox.Group>

        {/* Skills */}
        <Checkbox
          mt="md"
          label="Мерчендайзинг"
          value="merchandising"
          {...form.getInputProps('skills', { type: 'checkbox' })}
        />

        {/* Experience */}
        <Select
          label="Опыт работы (лет) *"
          placeholder="Нет опыта"
          data={[
            { value: 'no_experience', label: 'Нет опыта' },
            { value: '1_year', label: '1 год' },
            { value: '2_years', label: '2 года' },
            { value: '3_years', label: '3 года' },
            { value: '5_years', label: '5 лет' },
            { value: '10_years', label: '10 лет' },
            // Add more experience levels as needed
          ]}
          {...form.getInputProps('experience')}
        />

        {/* Gender */}
        <Select
          label="Пол *"
          placeholder="Мужской"
          data={[
            { value: 'male', label: 'Мужской' },
            { value: 'female', label: 'Женский' },
            { value: 'other', label: 'Другой' },
          ]}
          {...form.getInputProps('gender')}
        />

        {/* Age */}
        <NumberInput
          mt="md"
          label="Возраст (от) *"
          placeholder="Введите возраст"
          {...form.getInputProps('ageFrom')}
        />

        {/* Salary */}
        <NumberInput
          mt="md"
          label="Зарплата (до) *"
          placeholder="Введите зарплату"
          {...form.getInputProps('salaryUpTo')}
        />

        {/* Job search status */}
        <Checkbox.Group
          label="Статус поиска работы"
          mt="md"
          {...form.getInputProps('jobSearchStatus', { type: 'checkbox' })}
        >
          <Checkbox value="actively_looking" label="Активно ищет работу" />
          <Checkbox value="open_to_offers" label="Рассматривает предложения" />
          <Checkbox value="considering_offer" label="Предложили работу, решает" />
          <Checkbox value="not_looking" label="Не ищет работу" />
        </Checkbox.Group>

        {/* Required number of resumes */}
        <NumberInput
          mt="md"
          label="Требуемое кол-во резюме (до) *"
          placeholder="Введите количество резюме"
          {...form.getInputProps('requiredResumes')}
        />

        {/* Submit button */}
        <Button mt="md" type="submit">
          Искать
        </Button>
      </form>
    </Container>
  );
};

export default JobSearchForm;
