'use client';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Text,
  Textarea,
  NumberInput,
  Button,
  Group,
  Container,
  Title,
  Box,
  InputLabel,
 // DateInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { updateResumeForm } from '@/rtk/slices/resumeForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { STYLES } from '@/global/CONSTS';

type TProps = {
  gridCols?: number;
}

const ResumeForm = ({ gridCols = 1 }: TProps ) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.resumeForm);

  // Определяем состояние формы с использованием useForm от Mantine
  const form = useForm({
    initialValues: formState,
    // Добавляем правила валидации для полей формы
    validate: {
      fullName: (value) => (value ? null : 'Пожалуйста, введите ваше полное имя'),
      jobTitle: (value) => (value ? null : 'Пожалуйста, укажите вашу должность'),
      experience: (value) => (value ? null : 'Пожалуйста, укажите ваш опыт работы'),
      story: (value) => (value ? null : 'Пожалуйста, расскажите о себе'),
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateResumeForm({ [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = (values: typeof form.values) => {
    console.log('Форма отправлена с данными:', values);
    dispatch(updateResumeForm(values));
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="p-4 w-full relative max-w-full text-black dark:text-white ">

      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className={`text-left grid ${gridCols === 3 ? 'grid-cols-3':'grid-cols-1'} gap-6 w-full max-w-full relative `}
      >
        <div className='flex flex-col gap-6 w-full max-w-full '>

        {/* Full Name */}
        <TextInput
          label="Полное имя *"
          placeholder="Введите ваше полное имя"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('fullName')}
        />

        {/* Job Title */}
        <TextInput
          label="Должность *"
          placeholder="Введите вашу должность"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('jobTitle')}
        />

        {/* Experience */}
        <Textarea
          label="Опыт работы *"
          placeholder="Опишите ваш опыт работы"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('experience')}
        />

        {/* Previous Job Title */}
        <TextInput
          label="Предыдущая должность"
          placeholder="Введите вашу предыдущую должность"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('previousJobTitle')}
        />

        {/* Previous Job Dates */}
        <DateInput
          label="Даты работы на предыдущей должности"
          placeholder="Выберите даты"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('previousJobDates')}
        />

        {/* Personal Story */}
        <Textarea
          label="О себе *"
          placeholder="Расскажите о себе"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('story')}
        />

        </div>

        <div className='flex flex-col gap-6 w-full max-w-full'>

        {/* Education */}
        <TextInput
          label="Образование"
          placeholder="Введите ваше образование"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('education')}
        />

        {/* Skills */}
        <Textarea
          label="Навыки"
          placeholder="Перечислите ваши навыки"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('skills')}
        />

        {/* Contact Information */}
        <TextInput
          label="Контактная информация *"
          placeholder="Введите ваш email или телефон"
          labelProps={{ style: customLabelStyle }}
          {...form.getInputProps('contactInfo')}
        />

        {/* Submit button */}
        <div className="w-full flex justify-center">
        <Button mt="md" type="submit" className='w-full max-w-80'>
          Создать резюме
        </Button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
