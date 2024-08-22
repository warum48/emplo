import React from 'react';
import { Card, Divider, Text } from '@mantine/core';
import Link from 'next/link';
import { useGetMeQuery, useGetVacanciesQuery } from '@/rtk/features/vacancy/vacancySliceHHReal';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { Routes } from '@/global/ROUTES';

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
      
      {data_vacancies?.items?.map((vacancy:any, index:number) => (
        
        <Link href={Routes.DASHBOARD.MAIN + '/vacancies/' + vacancy.id} className="hover:bg-slate-200  dark:hover:bg-slate-700 block px-4 py-2">
          {vacancy.name}
        </Link>
      
    ))}
      <Divider/>
      {vacancies.map((vacancy, index) => (
        
        <Link href='' className="hover:bg-slate-200  dark:hover:bg-slate-700 block px-4 py-2">
          {vacancy.name}
        </Link>
      
    ))}
    </div>
  );
};


//export default VacancyListComponent;
