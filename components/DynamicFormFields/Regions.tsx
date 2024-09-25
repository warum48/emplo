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
    form: any
    size?:string;
    showLabel?:boolean;
    className?:string;
}

export const RegionsSelect = ({form, size='md', showLabel=true, className=''}: TProps) => {
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
              label={showLabel ? "Регион поиска" : null} //"Регион поиска"
              size={size}
              className={className}
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

