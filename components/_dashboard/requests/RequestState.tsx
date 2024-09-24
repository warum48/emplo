import { ResetFormButton } from '@/components/__atoms/Buttons/ResetFormButton';
import { TextInfo, TitleLabel } from '@/components/__atoms/TextBlocks/TextBlocks';
import { candidate } from '@/mockdata/negotiations';
import { customLabelStyle } from '@/styles/mantine_styles';
import { Button, Group, NumberInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

export const RequestState = () => {
  const [showConfirmator, setShowConfirmator] = React.useState<boolean>(false);

  const form = useForm({
    //mode: 'uncontrolled',
    initialValues: {
      number: 0,
      open_date: '',
      close_date: '',
      profile: '',
      profile_type: 'Единичный',
      priority: 'Средний',
      responsible: '',
      requirements: '',
      conditions: '',
      department: '',
      candidates: '',
      city_metro: '',
      responsibilities: '',
    },
    // Add validation rules for the form fields
    validate: {
      // specialty: (value) => (value ? null : 'Please select a position'),
      /* experience: (value) => (value ? null : 'Please select your experience level'),
      gender: (value) => (value ? null : 'Please select your gender'),
      age: (value) => (value >= 14 && value <= 90 ? null : 'Please enter a valid age (14-90)'),
      salary: (value) => (value >= 10000 ? null : 'Please enter a valid salary (min 10000)'),
      limit: (value) => (value >= 1 && value <= 200 ? null : 'Please enter a valid number of resumes (1-200)'),*/
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log('submit', values);
  };

  return (
    <div className="">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))} className="p-4  text-left grid grid-cols-1 gap-6 w-full max-w-full relative">
       
      {/*<NumberInput
          label="Номер"
          labelProps={{ style: customLabelStyle }}
          placeholder="Создается автоматически"
          {...form.getInputProps('number')}
        />*/}
        <div className="form-header">Заявка номер 345</div>
       

        <NumberInput
          label="Дата открытия"
          labelProps={{ style: customLabelStyle }}
          placeholder="Создается автоматически"
          {...form.getInputProps('open_date')}
        />

        <NumberInput
          label="Дата закрытия"
          labelProps={{ style: customLabelStyle }}
          placeholder="Руками или автоматически"
          {...form.getInputProps('close_date')}
        />

        <TextInput
          label="Профиль"
          labelProps={{ style: customLabelStyle }}
          placeholder="Ссылка на наименование профиля"
          {...form.getInputProps('profile')}
        />

        <Select
          label="Тип профиля"
          labelProps={{ style: customLabelStyle }}
          placeholder="Единичный"
          data={[
            { value: 'single', label: 'Единичный' },
            { value: 'mass', label: 'Массовый' },
          ]}
          {...form.getInputProps('profile_type')}
        />

        <Select
          label="Приоритет"
          labelProps={{ style: customLabelStyle }}
          placeholder="Высокий"
          data={[
            { value: 'high', label: 'Высокий' },
            { value: 'medium', label: 'Средний' },
            { value: 'low', label: 'Низкий' },
          ]}
          {...form.getInputProps('priority')}
        />

        <TextInput
          label="Подразделение"
          labelProps={{ style: customLabelStyle }}
          placeholder="Ссылка из Профиля"
          {...form.getInputProps('department')}
        />

        <NumberInput
          label="Сколько кандидатов"
          labelProps={{ style: customLabelStyle }}
          placeholder="Ссылка из Профиля"
          {...form.getInputProps('candidates')}
        />

        <TextInput
          label="Город/метро"
          labelProps={{ style: customLabelStyle }}
          placeholder="Ссылка из Профиля"
          {...form.getInputProps('city_metro')}
        />

        <TextInput
          label="Обязанности"
          labelProps={{ style: customLabelStyle }}
          placeholder="Из профиля"
          {...form.getInputProps('responsibilities')}
        />

        <TextInput
          label="Требования"
          labelProps={{ style: customLabelStyle }}
          placeholder="Из профиля"
          {...form.getInputProps('requirements')}
        />

        <TextInput
          label="Условия"
          labelProps={{ style: customLabelStyle }}
          placeholder="Из профиля"
          {...form.getInputProps('conditions')}
        />

        <TextInput
          label="Ответственный"
          labelProps={{ style: customLabelStyle }}
          placeholder="Ф.И.О Пользователя системы"
          {...form.getInputProps('responsible')}
        />
        

        <div className="flex gap-4 ">
                <Button variant='outline'>Отмена</Button>
                <Button >Сохранить</Button>
              </div>
      </form>
    </div>
  );
};
