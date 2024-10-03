'use client';

import {
  MultiSelect,
  Select,
} from '@mantine/core';
//import { useCreateVacancyMutation } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import React from 'react';
import { useGetRegionsQuery } from '@/rtk/queries/candidates';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { customLabelStyle } from '@/styles/mantine_styles';

type TProps = {
    form?: any
    formFieldName?:string
    size?:string;
    showLabel?:boolean;
    className?:string;
    onChange?:any;
}

export const RegionsSelect = ({form, formFieldName='area', onChange, size='md', showLabel=true, className=''}: TProps) => {
    const {
        data: regions,
        error: regionsError,
        isLoading: regionsIsLoading,
        refetch: refetchRegions,
      } = useGetRegionsQuery();
    return (
        <>
        {regions ? (
            <MultiSelect
              label={showLabel ? "Регион" : null} //"Регион поиска"
              size={size}
              className={className}
              placeholder="Выберите регион"
              labelProps={{ style: customLabelStyle }}
              required
              data={regions}

              onChange={(value) => {
                if(onChange) { onChange(value)};
                if (form) {
                  form.getInputProps(formFieldName).onChange(value); // Safely access form if it exists
                }
              }}
              {...(form ? form.getInputProps('formFieldName') : {})} 
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

