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
  Divider,
  Text,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { createVacancy } from '@/rtk/slices/vacancy/vacancySlice';
import { NewVacancyFormValues } from '@/types/HHVacancy';
//import { useCreateVacancyMutation } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import { STYLES } from '@/global/CONSTS';
import ErrorList, { ErrorDetail } from '@/components/Errors/ErrorList';
import React from 'react';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { useCreateVacancyMutation } from '@/rtk/queries/vacancy';
import { useGetRegionsQuery, useGetSpecialitiesQuery } from '@/rtk/queries/candidates';
import { Preloader } from '@/components/__atoms/Preloader/Preloader';
import { BasicError } from '@/components/Errors/BasicError';
import { isNetworkError, isSerializedError } from '@/components/Errors/isNetworkError';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { customLabelStyle } from '@/styles/mantine_styles';

type TProps = {
    form: any
}

export const Regions = ({form}: TProps) => {
    const {
        data: regions,
        error: regionsError,
        isLoading: regionsIsLoading,
        refetch: refetchRegions,
      } = useGetRegionsQuery();
    return (
        <>
        {regions ? (
            <Select
              label="Регион поиска *"
              placeholder="Выберите регион поиска"
              labelProps={{ style: customLabelStyle }}
              required
              data={regions}
              {...form.getInputProps('area')}
            />
          ) :  (
            <QueryStateDisplay
              isLoading={regionsIsLoading}
              error={regionsError}
              onRetry={refetchRegions}
            />
          )}
          </>
    )
}

