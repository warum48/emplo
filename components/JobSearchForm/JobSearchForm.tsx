'use client';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Text,
  Checkbox,
  Select,
  NumberInput,
  Button,
  Group,
  Container,
  Title,
  Box,
  InputLabel,
} from '@mantine/core';
import { updateJobSearchForm } from '@/rtk/features/searchJobForm/searchJob';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { STYLES } from '@/global/CONSTS';
//import { updateJobSearchForm } from '@/features/JobSearchForm/JobSearchForm/jobSearchSlice';

type TProps = {
  gridCols?: number;
}

const JobSearchForm = ({ gridCols = 1 }: TProps ) => {
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
    initialValues: formState,
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

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin//'4px', // Adjust this value to set the distance you want
  };

  return (
    <div className="p-4 w-full relative max-w-full text-black dark:text-white">

      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className={`text-left grid ${gridCols === 3 ? 'grid-cols-3':'grid-cols-1'}   gap-6 w-full max-w-full relative `}
      >
        <div className='flex flex-col gap-6 w-full max-w-full'>
        {/* Position Input */}
        <Select
          label="Должность *"
          placeholder="--------"
          labelProps={{ style: customLabelStyle}}
          data={[
            { value: 'developer', label: 'Developer' },
            { value: 'designer', label: 'Designer' },
          ]}
          {...form.getInputProps('position')}
        />

        {/* Region Input */}
        <div>
          <InputLabel htmlFor="region" style={customLabelStyle}>Регион</InputLabel>
          <Group>
            <Checkbox
              label="Москва"
              value="moscow"
              {...form.getInputProps('region', { type: 'checkbox' })}
            />
            <Checkbox
              label="Санкт-Петербург"
              value="spb"
              {...form.getInputProps('region', { type: 'checkbox' })}
            />
          </Group>
        </div>

        {/* Willingness to relocate */}
        <div className="flex flex-col gap-4">
        <Select
          label="Готовность к переезду"
          placeholder="Живет в регионе или готов переехать"
          labelProps={{ style: customLabelStyle}}
          data={[
            { value: 'ready_to_relocate', label: 'Готов к переезду' },
            { value: 'not_ready_to_relocate', label: 'Не готов к переезду' },
          ]}
          {...form.getInputProps('relocation')}
        />
        </div>

        {/* Work schedule */}
        <Checkbox.Group
          label="График работы *"
          {...form.getInputProps('workSchedule', { type: 'checkbox' })}
        >
          <Checkbox value="full_day" label="Полный день" mt={STYLES.FORM.labelMargin} />
          <Checkbox value="shift" label="Сменный график" mt="xs" />
          <Checkbox value="flexible" label="Гибкий" mt="xs" />
          <Checkbox value="remote" label="Удаленная работа" mt="xs" />
          <Checkbox value="rotation" label="Вахта" onChange={handleChange} mt="xs" />
        </Checkbox.Group>

       
        </div>
        <div className='flex flex-col gap-6'>
        {/* Experience */}
        <Select
          label="Опыт работы (лет) *"
          labelProps={{ style: customLabelStyle}}
          placeholder="Нет опыта"
          data={[
            { value: 'no_experience', label: 'Нет опыта' },
            { value: '1_year', label: '1 год' },
            { value: '2_years', label: '2 года' },
            { value: '3_years', label: '3 года' },
            { value: '5_years', label: '5 лет' },
            { value: '10_years', label: '10 лет' },
          ]}
          {...form.getInputProps('experience')}
        />

         {/* Skills */}
         <div className="flex flex-col ">
          <InputLabel htmlFor="skills">Навыки</InputLabel>
        <Checkbox
          //mt="md"
          mt={STYLES.FORM.labelMargin}
          label="Мерчендайзинг"
          value="merchandising"
          {...form.getInputProps('skills', { type: 'checkbox' })}
        />
        </div>

        {/* Gender */}
        <Select
          label="Пол *"
          placeholder="Мужской"
          labelProps={{ style: customLabelStyle}}
          data={[
            { value: 'male', label: 'Мужской' },
            { value: 'female', label: 'Женский' },
            { value: 'other', label: 'Другой' },
          ]}
          {...form.getInputProps('gender')}
        />

        {/* Age */}
        <NumberInput
          labelProps={{ style: customLabelStyle}}
          label="Возраст (от) *"
          placeholder="Введите возраст"
          {...form.getInputProps('ageFrom')}
        />
        </div>
        <div className='flex flex-col gap-6 w-full max-w-full'>
        {/* Salary */}
        <NumberInput
          labelProps={{ style: customLabelStyle}}
          label="Зарплата (до) *"
          placeholder="Введите зарплату"
          {...form.getInputProps('salaryUpTo')}
        />

        {/* Job search status */}
        <Checkbox.Group
          label="Статус поиска работы"
          {...form.getInputProps('jobSearchStatus', { type: 'checkbox' })}
        >
          <Checkbox mt={STYLES.FORM.labelMargin} value="actively_looking" label="Активно ищет работу" />
          <Checkbox mt="xs" value="open_to_offers" label="Рассматривает предложения" />
          <Checkbox mt="xs" value="considering_offer" label="Предложили работу, решает" />
          <Checkbox mt="xs" value="not_looking" label="Не ищет работу" />
        </Checkbox.Group>

        {/* Required number of resumes */}
        <NumberInput
          label="Требуемое кол-во резюме (до) *"
          labelProps={{ style: customLabelStyle}}
          placeholder="Введите количество резюме"
          {...form.getInputProps('requiredResumes')}
        />

        {/* Submit button */}
        <Button mt="md" type="submit" className='w-full max-w-full'>
          Искать
        </Button>
        </div>
      </form>
    </div>
  );
};

export default JobSearchForm;
