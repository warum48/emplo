'use client';

import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import React from 'react';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { TDynamicFormFieldProps } from '@/types/formComponents/TDynamicFormFieldProps';
import { useLazyGetUnitsQuery } from '@/rtk/queries/joborder';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';

// Assuming TDependency type is defined as:
type TDependency = {
  formFieldName: string;
  getParamName: string;
  ruName?: string;
};

export const UnitSelect = ({ form, size = 'sm',  showLabel = true, className = '', formFieldName = 'professional_roles', dependencies = [] , label, description, required, placeholder }: TDynamicFormFieldProps & { dependencies: TDependency[] }) => {
  // State for dynamic dependencies
  const [paramsObject, setParamsObject] = useState<Record<string, string>>({});

  const [getUnits, { data, error, isLoading }] = useLazyGetUnitsQuery();

  // Update paramsObject based on form values
  useEffect(() => {
    const newParams: Record<string, string> = {};
    dependencies.forEach(dep => {
      const formValue = form?.values?.[dep.formFieldName] || '';
      newParams[dep.getParamName] = formValue;
    });
    setParamsObject(newParams);
  }, [form?.values, dependencies]);

  // Trigger the API call whenever paramsObject is updated
  useEffect(() => {
    if (Object.values(paramsObject).some(value => value)) {
      getUnits(paramsObject);
      console.log('CALLING LIST with params:', paramsObject);
    }
  }, [paramsObject, getUnits]);

  const [formattedData, setFormattedData] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      const _formattedData = data.map((unit: { name?: string | null}) => unit.name ?? '');
      setFormattedData(_formattedData);
    } else {
      setFormattedData([]);
    }
  }, [data, error]);

  return (
    <>
      <Select
        label={showLabel ? label : null}
        description={description}
        size={size}
        className={className}
        placeholder={placeholder || "Выберите подразделение"}   
        required={required}
        data={formattedData}
        disabled={formattedData.length === 0}
        {...(form ? form.getInputProps(formFieldName) : {})}
      />
      {formattedData.length === 0 && (
        <>
          <div className="mt-1 text-sm">! Для выбора из списка необходимо заполнить поля выше</div>
          <QueryStateDisplay
            isLoading={isLoading}
            error={error}
            onRetry={() => getUnits(paramsObject)}
          />
        </>
      )}
      <JSONViewer data={dependencies} />
    </>
  );
};


/*

import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import React from 'react';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { TDynamicFormFieldProps } from '@/types/formComponents/TDynamicFormFieldProps';
import { useLazyGetDepartmentsQuery, useLazyGetUnitsQuery } from '@/rtk/queries/joborder';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';

export const UnitSelect = ({ form, size = 'sm', showLabel = true, className = '', formFieldName = 'professional_roles', dependency, dependencies }: TDynamicFormFieldProps) => {
    const [orgName, setOrgName] = useState<string>('');
    const [departmentName, setDepartmentName] = useState<string>('');

    const paramsObject = {}
    const [getUnits, { data, error, isLoading}] = useLazyGetUnitsQuery();
    
    useEffect(() => {
      if (orgName) {
        getUnits({org_name:orgName, department_name:''});
        console.log('CALLING LIST', orgName);
      }
    }, [orgName, getUnits]);

    useEffect(() => {
      if (dependency && form.values?.[dependency]) {
        setOrgName(form.values?.[dependency]);
      }else{
        setOrgName('');
      }
    }, [dependency, form?.values?.[dependency || '']]);

  const [formatedData, setFormatedData] = useState<string[] >([]);


  useEffect(() => {
    if (data) {
      const _formattedData = data.map((unit: { 
        id?: number | null;
        department: number;
        name?: string | null;
        description?: string | null;
     }) => (unit.name ? unit.name : ''));
      setFormatedData(_formattedData);
    } 
    if (error) {
      setFormatedData([]);
    }
  }, [data, error]); 

  return (
    <>
        <Select
          label={showLabel ? 'Unit' : null}
          size={size}
          className={className}
          placeholder="Выберите unit"
          required
          data={formatedData} 
          disabled = {formatedData.length == 0 }
          {...(form ? form.getInputProps(formFieldName) : {})}
        />
      {formatedData.length == 0 && (
        <>
        <div className="mt-1 text-sm">! Для выбора из списка необходимо заполнить поля выше</div>
        <QueryStateDisplay
          isLoading={isLoading}
          error={error}
          onRetry={() => getUnits({org_name:orgName, department_name:''})}
        />
        </>
      )}
     
      <JSONViewer data={dependencies} />
    </>
  );
};
*/
