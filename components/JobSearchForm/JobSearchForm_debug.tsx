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
import { updateJobSearchForm } from '@/features/searchJobForm/searchJob';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
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
    marginBottom: '8px', // Adjust this value to set the distance you want
  };

  return (
    <div className="p-4 w-full relative max-w-full border-box">
      {/*
     <Box size="sm" m="xl" className="text-left flex flex-col gap-8">
     
     } <Title order={1}>Поиск</Title>
     <h1 className="text-4xl  mb-4 text-left font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Поиск</h1>*/
     
     //sm:grid-cols-1
     }

      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className={`text-left grid grid-cols-${gridCols}  gap-6 w-full max-w-full relative `}
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
            // Add more positions as needed
          ]}
          {...form.getInputProps('position')}
        />

       
       

       
        </div>
        <div className='flex flex-col gap-6'>
        2
        </div>
        <div className='flex flex-col gap-6 w-full max-w-full'>
        3

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
