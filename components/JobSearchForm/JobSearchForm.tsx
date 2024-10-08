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
import { updateJobSearchForm } from '@/rtk/features/searchCandidateForm/searchCandidate';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { STYLES } from '@/global/CONSTS';

type TProps = {
  gridCols?: number;
};

const JobSearchForm = ({ gridCols = 1 }: TProps) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.jobSearch);

  // Define the form state using useForm from Mantine
  const form = useForm({
    initialValues: formState,
    // Add validation rules for the form fields
    validate: {
      specialty: (value) => (value ? null : 'Please select a position'),
      experience: (value) => (value ? null : 'Please select your experience level'),
      gender: (value) => (value ? null : 'Please select your gender'),
      age: (value) => (value >= 14 && value <= 90 ? null : 'Please enter a valid age (14-90)'),
      salary: (value) => (value >= 10000 ? null : 'Please enter a valid salary (min 10000)'),
      limit: (value) => (value >= 1 && value <= 200 ? null : 'Please enter a valid number of resumes (1-200)'),
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateJobSearchForm({ [name]: value }));
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="p-4 px-8 w-full relative max-w-full text-black dark:text-white">
      <form
        onSubmit={form.onSubmit((values) => {
          console.log('Form submitted with values:', values);
          dispatch(updateJobSearchForm(values));
        })}
        className={`text-left grid ${gridCols === 3 ? 'grid-cols-3' : 'grid-cols-1'} gap-6 w-full max-w-full relative`}
      >
        <div className='flex flex-col gap-6 w-full max-w-full'>
          {/* Specialty */}
          <Select
            label="Должность *"
            placeholder="--------"
            labelProps={{ style: customLabelStyle }}
            data={[
              { value: 'developer', label: 'Developer' },
              { value: 'designer', label: 'Designer' },
            ]}
            {...form.getInputProps('specialty')}
          />

          {/* Area */}
          <div>
            <InputLabel htmlFor="area" style={customLabelStyle}>Регион</InputLabel>
            <Group>
              {/* Populate dynamically */}
              <Checkbox
                label="Москва"
                value="moscow"
                {...form.getInputProps('area', { type: 'checkbox' })}
              />
              <Checkbox
                label="Санкт-Петербург"
                value="spb"
                {...form.getInputProps('area', { type: 'checkbox' })}
              />
            </Group>
          </div>

          {/* Relocation Type */}
          <div className="flex flex-col gap-4">
            <Select
              label="Готовность к переезду"
              placeholder="Живет в регионе или готов переехать"
              labelProps={{ style: customLabelStyle }}
              data={[
                { value: 'living_or_relocation', label: 'Живет в регионе или готов переехать' },
                { value: 'living', label: 'Живет в регионе' },
                { value: 'relocation', label: 'Не живет, но готов переехать' },
              ]}
              {...form.getInputProps('relocation_type')}
            />
          </div>

          {/* Schedule */}
          <Checkbox.Group
            label="График работы *"
            {...form.getInputProps('schedule', { type: 'checkbox' })}
          >
            <Checkbox value="fullDay" label="Полный день" mt={STYLES.FORM.labelMargin} />
            <Checkbox value="shift" label="Сменный график" mt="xs" />
            <Checkbox value="flexible" label="Гибкий" mt="xs" />
            <Checkbox value="remote" label="Удаленная работа" mt="xs" />
            <Checkbox value="flyInFlyOut" label="Вахта" mt="xs" />
          </Checkbox.Group>
        </div>
        <div className='flex flex-col gap-6'>
          {/* Skills */}
          <div className="flex flex-col ">
            <InputLabel htmlFor="skills">Навыки</InputLabel>
            {/* Populate dynamically */}
            <Checkbox
              mt={STYLES.FORM.labelMargin}
              label="Мерчендайзинг"
              value="merchandising"
              {...form.getInputProps('skills', { type: 'checkbox' })}
            />
          </div>

          {/* Experience */}
          <Select
            label="Опыт работы (лет) *"
            labelProps={{ style: customLabelStyle }}
            placeholder="Нет опыта"
            data={[
              { value: 'noExperience', label: 'Нет опыта' },
              { value: 'between1And3', label: 'От 1 года до 3 лет' },
              { value: 'between3And6', label: 'От 3 до 6 лет' },
              { value: 'moreThan6', label: 'Более 6 лет' },
            ]}
            {...form.getInputProps('experience')}
          />

          {/* Gender */}
          <Select
            label="Пол *"
            placeholder="Мужской"
            labelProps={{ style: customLabelStyle }}
            data={[
              { value: 'male', label: 'Мужской' },
              { value: 'female', label: 'Женский' },
            ]}
            {...form.getInputProps('gender')}
          />

          {/* Age */}
          <NumberInput
            labelProps={{ style: customLabelStyle }}
            label="Возраст (от) *"
            placeholder="Введите возраст"
            {...form.getInputProps('age')}
          />
        </div>
        <div className='flex flex-col gap-6 w-full max-w-full'>
          {/* Salary */}
          <NumberInput
            labelProps={{ style: customLabelStyle }}
            label="Зарплата (до) *"
            placeholder="Введите зарплату"
            {...form.getInputProps('salary')}
          />

          {/* Job search status */}
          <Checkbox.Group
            label="Статус поиска работы"
            {...form.getInputProps('job_search_status', { type: 'checkbox' })}
          >
            <Checkbox mt={STYLES.FORM.labelMargin} value="active_search" label="Активно ищет работу" />
            <Checkbox mt="xs" value="looking_for_offers" label="Рассматривает предложения" />
            <Checkbox mt="xs" value="has_job_offer" label="Предложили работу, решает" />
            <Checkbox mt="xs" value="not_looking_for_job" label="Не ищет работу" />
          </Checkbox.Group>

          {/* Limit */}
          <NumberInput
            label="Требуемое кол-во резюме (до) *"
            labelProps={{ style: customLabelStyle }}
            placeholder="Введите количество резюме"
            {...form.getInputProps('limit')}
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
