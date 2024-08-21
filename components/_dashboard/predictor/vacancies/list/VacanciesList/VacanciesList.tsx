import React from 'react';
import { Card, Text } from '@mantine/core';
import Link from 'next/link';
import { useGetMeQuery, useGetVacanciesQuery } from '@/rtk/features/vacancy/vacancySliceHHReal';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';

type VacanciesList = {
  name: string;
  employees: any[];
};

type VacancyProps = {
  vacancies: VacanciesList[];
};

export const VacancyListComponent: React.FC<VacancyProps> = ({ vacancies }) => {
  const { data: data_vacancies, error, isLoading } = useGetVacanciesQuery();
  
  return (
    <div className=" h-full">
      <JSONViewer data={data_vacancies} />
      {/*<JSONViewer data={data_hhme} />*/}
      {vacancies.map((vacancy, index) => (
        
          <Link href='' className=" hover:bg-slate-200 block px-4 py-2">
            {vacancy.name}
          </Link>
        
      ))}
    </div>
  );
};


//export default VacancyListComponent;
