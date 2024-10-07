'use client';

import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import React from 'react';
import { QueryStateDisplay } from '@/components/__atoms/QueryStateDisplay/QueryStateDisplay';
import { customLabelStyle } from '@/styles/mantine_styles';
import { TDynamicFormFieldProps } from '@/types/formComponents/TDynamicFormFieldProps';
import { useGetOrgsQuery } from '@/rtk/queries/joborder';
import { JSONViewer } from '../__atoms/JSONViewer/JSONViewr';

export const OrganizationsSelect = ({ form, size = 'md', showLabel = true, className = '', formFieldName = 'professional_roles' }: TDynamicFormFieldProps) => {
  const {
    data: orgs,
    error: orgsError,
    isLoading: orgsIsLoading,
    refetch: refetchOrgs,
  } = useGetOrgsQuery();

  const [orgsData, setOrgsData] = useState<{ value: string; label: string }[]>([]);

  // Using useEffect to handle the data update after fetch
  useEffect(() => {
    if (orgs) {
      // Map the orgs to the format Mantine Select expects
      const formattedOrgs = orgs.map((org: { id: number; name: string }) => ({
        value: org.id.toString(),
        label: org.name,
      }));
      setOrgsData(formattedOrgs);
    }
  }, [orgs]); // Runs when orgs data is fetched/updated

  return (
    <>
      {orgsData.length > 0 ? (
        <Select
          label={showLabel ? 'Организация' : null}
          size={size}
          className={className}
          placeholder="Выберите организацию"
          labelProps={{ style: customLabelStyle }}
          required
          data={orgsData} // Using the mapped orgs data
          {...(form ? form.getInputProps(formFieldName) : {})}
        />
      ) : (
        <QueryStateDisplay
          isLoading={orgsIsLoading}
          error={orgsError}
          onRetry={refetchOrgs}
        />
      )}
      <JSONViewer data={orgs} />
    </>
  );
};
