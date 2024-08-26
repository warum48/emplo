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
import { createVacancyHH, Vacancy } from '@/rtk/slices/vacancy/vacancySliceHH';
import { AppDispatch } from '@/rtk/store/store';
//import { createVacancy } from '@/rtk/features/vacancies/vacanciesSlice';
//import { createVacancy } from '@/rtk/features/vacancy/vacancySliceHH';

const VacancyCreationFormHH = () => {
  //const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>(); 

  const form = useForm<Vacancy>({
    initialValues: {
      vacancyTitle: '',
      vacancyCode: '',
      specialization: '',
      jobLocation: '',
      hiringPlan: 1,
      salaryFrom: 0,
      salaryTo: 0,
      beforeTax: true,
      jobAddress: '',
      experience: 'no_experience',
      vacancyDescription: '',
      keySkills: '',
    },

    validate: {
      vacancyTitle: (value) => (value ? null : 'Введите название вакансии'),
      jobLocation: (value) => (value ? null : 'Укажите хотя бы один город'),
    },
  });

  const handleSubmit = (values: Vacancy) => {
    console.log('Form values:', values);
    dispatch(createVacancyHH(values));
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
            label="Название вакансии"
            placeholder="Введите название вакансии"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('vacancyTitle')}
          />
          
          <TextInput
            label="Указать код вакансии"
            placeholder="Введите код вакансии"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('vacancyCode')}
          />

          <TextInput
            label="Специализация"
            placeholder="Укажите специализацию"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('specialization')}
          />

          <TextInput
            label="Где искать сотрудника"
            placeholder="Укажите города для размещения"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('jobLocation')}
          />

          <NumberInput
            label="Сколько нужно человек"
            labelProps={{ style: customLabelStyle }}
            placeholder="Введите количество человек"
            min={1}
            {...form.getInputProps('hiringPlan')}
          />
<div>
          <Group 
         // position="apart"
          >
            <NumberInput
              label="Предполагаемый уровень дохода от"
              labelProps={{ style: customLabelStyle }}
              placeholder="От"
              min={0}
              {...form.getInputProps('salaryFrom')}
            />
            <NumberInput
              label="до"
              labelProps={{ style: customLabelStyle }}
              placeholder="До"
              min={0}
              {...form.getInputProps('salaryTo')}
            />
          </Group>

          <Checkbox
          
            label="До вычета налогов"
            checked={form.values.beforeTax}
            onChange={(event) => form.setFieldValue('beforeTax', event.currentTarget.checked)}
            mt="sm"
          />
          </div>

          <TextInput
            label="Где будет работать сотрудник"
            placeholder="Укажите адрес"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('jobAddress')}
          />

          <Select
            label="Опыт работы"
            labelProps={{ style: customLabelStyle }}
            placeholder="Выберите опыт работы"
            data={[
              { value: 'no_experience', label: 'Нет опыта' },
              { value: '1_to_3_years', label: 'От 1 года до 3 лет' },
              { value: '3_to_6_years', label: 'От 3 до 6 лет' },
              { value: 'over_6_years', label: 'Более 6 лет' },
            ]}
            {...form.getInputProps('experience')}
          />

          <Textarea
            label="Расскажите про вакансию"
            placeholder="Опишите обязанности, требования и условия"
            labelProps={{ style: customLabelStyle }}
            minRows={4}
            {...form.getInputProps('vacancyDescription')}
          />

          <TextInput
            label="Ключевые навыки"
            placeholder="Например, организация конференций"
            labelProps={{ style: customLabelStyle }}
            {...form.getInputProps('keySkills')}
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

export default VacancyCreationFormHH;
