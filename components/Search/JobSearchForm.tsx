'use client';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Checkbox,
  Select,
  NumberInput,
  Button,
  MultiSelect,
} from '@mantine/core';
import {
  updateJobSearchForm,
  candidateSearchFormInitialState,
} from '@/rtk/slices/searchCandidateForm/searchCandidate';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { STYLES } from '@/global/CONSTS';
import {
  useGetSpecialitiesQuery,
  useSearchCandidatesMutation,
  useSearchHHCandidatesMutation,
} from '@/rtk/queries/candidates';
import { setSearchResults } from '@/rtk/slices/search/searchSlice';
import { Preloader } from '../__atoms/Preloader/Preloader';
import ErrorList, { ErrorDetail } from '../Errors/ErrorList';
import { setSearchHHResults } from '@/rtk/slices/search/searchHHSlice';
import { HTMLError } from '../Errors/HTMLError';
import { ResetFormButton } from '../__atoms/Buttons/ResetFormButton';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';
import { Confirmator } from '../__uiutils/Confirmator';
import React from 'react';
import { SearchType } from '@/types/local/SearchType';
import { SpecialitiesSelect } from '../DynamicFormFields/Specialities';
import { RegionsSelect } from '../DynamicFormFields/Regions';

type TProps = {
  gridCols?: number;
  onSearch?: () => void;
  searchType?: SearchType;
};

const JobSearchForm = ({ gridCols = 1, onSearch = () => {}, searchType = 'internal' }: TProps) => {
  const [errors, setErrors] = useState<ErrorDetail[]>();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.jobSearch);
  const [searchCandidates, { data, error, isLoading }] = useSearchCandidatesMutation();
  const [searchHHCandidates, { data: hhData, error: hhError, isLoading: hhIsLoading }] =
    useSearchHHCandidatesMutation();
  const [aiError, setAiError] = useState('');
  const [formRenderCount, setFormRenderCount] = useState(0);
  const [showConfirmator, setShowConfirmator] = React.useState<boolean>(false);



  const handleSubmit = async (values: typeof form.values) => {
    console.log('submit', values);
    try {
      const candidates =
        searchType === 'internal'
          ? await searchCandidates(values).unwrap()
          : await searchHHCandidates(values).unwrap();
      if (Array.isArray(candidates?.items)) {
        if (searchType === 'internal') {
          dispatch(setSearchResults(candidates));
        } else {
          dispatch(setSearchHHResults(candidates));
        }
        onSearch();
      } else {
        console.error('Failed to search candidates: results is not an array', candidates);
        if (candidates?.error) {
          setAiError(candidates.error);
        }
      }
    } catch (error: any) {
      console.error('Failed to search candidates:', error);
      if (error?.data?.detail) {
        setErrors(error.data.detail);
      }
    }
  };

  // Define the form state using useForm from Mantine
  const form = useForm({
    //mode: 'uncontrolled',
    initialValues: formState,
    // Add validation rules for the form fields
    validate: {
     // specialty: (value) => (value ? null : 'Please select a position'),
      /* experience: (value) => (value ? null : 'Please select your experience level'),
      gender: (value) => (value ? null : 'Please select your gender'),
      age: (value) => (value >= 14 && value <= 90 ? null : 'Please enter a valid age (14-90)'),
      salary: (value) => (value >= 10000 ? null : 'Please enter a valid salary (min 10000)'),
      limit: (value) => (value >= 1 && value <= 200 ? null : 'Please enter a valid number of resumes (1-200)'),*/
    },
    onValuesChange: (values) => {
      console.log(values);
     // setShowError(false);
      setErrors(undefined);
      setAiError('');
    },
  });



  const handleChange = (field: string, value: any) => {
    dispatch(updateJobSearchForm({ [field]: value }));
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  const resetForm = () => {
    dispatch(updateJobSearchForm(candidateSearchFormInitialState));
    form.setValues(candidateSearchFormInitialState);
    // form.reset()
    setFormRenderCount((prev) => prev + 1);
    console.log('reseted');
  };

  return (
    <div className="p-4 px-8 pb-8 w-full relative max-w-full text-black dark:text-white">
      <form
        key={'form_render_' + formRenderCount}
        onSubmit={form.onSubmit((values) => {
          console.log('Form submitted with values:', values);
          dispatch(updateJobSearchForm(values));
          handleSubmit(values);
        })}
        className={`text-left grid ${gridCols === 3 ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1'} gap-x-12 gap-y-6 w-full max-w-full relative`}
      >
        <div
          className={`flex flex-col gap-6 
            ${
              gridCols === 3
                ? "relative flex-1 after:content-[''] after:absolute after:-right-6 after:top-1/2 after:transform after:-translate-y-1/2 after:w-px after:h-0 lg:after:h-full after:bg-gray-200 dark:after:bg-gray-800"
                : ''
            }`}
        >
          <SpecialitiesSelect form={form} formFieldName="speciality"/>

          <RegionsSelect form={form} />

          <Select
            label="Готовность к переезду"
            placeholder="Готовность к переезду"
            labelProps={{ style: customLabelStyle }}
            data={[
              { value: 'living_or_relocation', label: 'Живет в регионе или готов переехать' },
              { value: 'living', label: 'Живет в регионе' },
              { value: 'relocation', label: 'Не живет, но готов переехать' },
            ]}
            {...form.getInputProps('relocation_type')}
          />
        </div>
        <div
          className={`flex flex-col gap-6 
            ${
              gridCols === 3
                ? "relative flex-1 after:content-[''] after:absolute after:-right-6 after:top-1/2 after:transform after:-translate-y-1/2 after:w-px after:h-0 lg:after:h-full after:bg-gray-200 dark:after:bg-gray-800"
                : ''
            }`}
        >

          <div className="flex flex-col ">
            <Checkbox.Group
              label="Навыки"
              {...form.getInputProps('skills', { type: 'checkbox' })}
              defaultValue={form.values.skills}
              onChange={(value) => {
                handleChange('skills', value);
                form.getInputProps('skills').onChange(value);
              }}
            >
              <Checkbox label="Мерчендайзинг" value="merchandising" mt={STYLES.FORM.labelMargin} />
              <Checkbox value="flyInFlyOut" label="Вахта" mt="xs" />
            </Checkbox.Group>
          </div>

          <NumberInput
            label="Опыт работы (лет)"
            labelProps={{ style: customLabelStyle }}
            placeholder="Введите опыт работы"
            {...form.getInputProps('experience')}
          />

          <Select
            label="Пол *"
            placeholder="Пол кандидата"
            labelProps={{ style: customLabelStyle }}
            data={[
              { value: 'male', label: 'Мужской' },
              { value: 'female', label: 'Женский' },
            ]}
            {...form.getInputProps('gender')}
          />

          <NumberInput
            labelProps={{ style: customLabelStyle }}
            label="Возраст (от)"
            placeholder="Введите возраст"
            {...form.getInputProps('age')}
          />
        </div>
        <div className="flex flex-col gap-6 w-full max-w-full">
          <NumberInput
            labelProps={{ style: customLabelStyle }}
            label="Зарплата (до)"
            placeholder="Введите зарплату"
            {...form.getInputProps('salary')}
          />

          <Checkbox.Group
            label="Статус поиска работы"
            {...form.getInputProps('job_search_status', { type: 'checkbox' })}
            defaultValue={form.values.job_search_status}
            onChange={(value) => {
              handleChange('job_search_status', value);
              form.getInputProps('job_search_status').onChange(value);
            }}
          >
            <Checkbox
              mt={STYLES.FORM.labelMargin}
              value="active_search"
              label="Активно ищет работу"
            />
            <Checkbox mt="xs" value="looking_for_offers" label="Рассматривает предложения" />
            <Checkbox mt="xs" value="has_job_offer" label="Предложили работу, решает" />
            <Checkbox mt="xs" value="not_looking_for_job" label="Не ищет работу" />
          </Checkbox.Group>

          <NumberInput
            label="Требуемое кол-во резюме (до)"
            labelProps={{ style: customLabelStyle }}
            placeholder="Введите количество резюме"
            {...form.getInputProps('limit')}
          />

          {errors && <ErrorList errors={errors} />}
          {aiError && <HTMLError error={aiError} />}

          <div className="flex gap-4 mt-4">
            <ResetFormButton
              onClick={() =>
                setShowConfirmator(true)
              }
            />
            <Button
              type="submit"
              className="w-full max-w-full"
              disabled={
                isLoading
              }
            >
              Искать{' '}
              {isLoading && (
                <span className="-mt-1">
                  <Preloader />
                </span>
              )}
            </Button>
          </div>
        </div>
      </form>
      <JSONViewer data={form.values} />
      <Confirmator
        onConfirm={resetForm} //
        header={'Вы действительно хотите очистить форму?'}
        showConfirmator={showConfirmator}
        setShowConfirmator={setShowConfirmator}
        closeOnConfirm={true}
      />
    </div>
  );
};

export default JobSearchForm;
