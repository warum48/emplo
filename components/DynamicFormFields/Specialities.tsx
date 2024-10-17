'use client';

import {
  Select,
} from '@mantine/core';
import React from 'react';
import { useGetSpecialitiesQuery } from '@/rtk/queries/candidates';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { customLabelStyle } from '@/styles/mantine_styles';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';

type TProps = {
    form: any
    size?:string;
    showLabel?:boolean;
    className?:string;
    formFieldName?:string;
}

export const SpecialitiesSelect = ({form, size='sm', showLabel=true, className='', formFieldName='professional_roles'}: TProps) => {
    const {
        data: specialities,
        error: specialitiesError,
        isLoading: specialitiesIsLoading,
        refetch: refetchSpecialities,
      } = useGetSpecialitiesQuery();
    
    return (
        <>
        {specialities ? (
          <Select
            label={showLabel ? "Должность" : null} //"Регион поиска"
              size={size}
              className={className}
            placeholder="Выберите должность"
            labelProps={{ style: customLabelStyle }}
            required
            data={specialities}
            //{...form.getInputProps(formFieldName)}
            {...(form ? form.getInputProps(formFieldName) : {})}
          />
        ):  (
            <QueryStateDisplay
              isLoading={specialitiesIsLoading}
              error={specialitiesError}
              onRetry={refetchSpecialities}
            />
          )}
        {/*  <JSONViewer data={specialities} /> */}
          </>
    )
}

