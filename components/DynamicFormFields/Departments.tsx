'use client';

import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import React from 'react';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { TDynamicFormFieldProps } from '@/types/formComponents/TDynamicFormFieldProps';
import { useLazyGetDepartmentsQuery } from '@/rtk/queries/joborder';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';

export const DepartmentsSelect = ({ form, size = 'sm', showLabel = true, className = '', formFieldName = 'professional_roles', dependency }: TDynamicFormFieldProps) => {
    const [orgName, setOrgName] = useState<string>('');

    // useLazyGetDepartmentsQuery returns a tuple: [triggerFunction, queryState]
    const [getDepartments, { data, error, isLoading}] = useLazyGetDepartmentsQuery();
    
    useEffect(() => {
      if (orgName) {
        getDepartments(orgName);
        console.log('CALLING LIST', orgName);
      }
    }, [orgName, getDepartments]);

    useEffect(() => {
      if (dependency && form.values?.[dependency]) {
        setOrgName(form.values?.[dependency]);
      }else{
        setOrgName('');
      }
    }, [dependency, form?.values?.[dependency || '']]);

  const [formatedData, setFormatedData] = useState<{ value: string; label: string }[] >([]);


  useEffect(() => {
    if (data) {
      const _formattedData = data.map((org: { id: number; name: string }) => (org.name));
      setFormatedData(_formattedData);
    } 
    if (error) {
      // Clear formatted data in case of an error
      setFormatedData([]);
    }
  }, [data, error]); // Runs when orgs data is fetched/updated

  return (
    <>
        <Select
          label={showLabel ? 'Организация' : null}
          size={size}
          className={className}
          placeholder="Выберите организацию"
         // labelProps={{ style: customLabelStyle }}
          required
          data={formatedData} // Using the mapped orgs data
          disabled = {formatedData.length == 0 }
          {...(form ? form.getInputProps(formFieldName) : {})}
        />
      {formatedData.length == 0 && (
        <>
        <div className="mt-1 text-sm">! Для выбора из списка необходимо выбрать организацию выше</div>
        <QueryStateDisplay
          isLoading={isLoading}
          error={error}
          onRetry={() => getDepartments(orgName)}
        />
        </>
      )}
      {/*<JSONViewer data={orgs} />*/}
    </>
  );
};
