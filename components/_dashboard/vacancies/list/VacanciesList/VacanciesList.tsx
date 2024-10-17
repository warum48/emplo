import React from 'react';
import { Card, Divider, Text } from '@mantine/core';
import Link from 'next/link';
//import { useGetMeQuery, useGetVacanciesQuery } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { Routes } from '@/global/ROUTES';
import { useGetVacanciesQuery } from '@/rtk/queries/vacancy';
import { format, parseISO } from 'date-fns'; // TODO rewrite to dayjs 
import dayjs from 'dayjs';

type VacanciesList = {
  name: string;
  employees: any[];
  [key: string]: any;
};

type VacancyProps = {
  vacancies: VacanciesList[];
};

const ListWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 rounded bg-white dark:bg-customGray-900/30 m-2 border ^shadow border-slate-100 dark:border-slate-800 hover:bg-slate-100  dark:hover:bg-slate-700/30 block  py-2">{children}</div>
)

export const VacancyListComponent: React.FC<VacancyProps> = ({ vacancies }) => {
  const { data: data_vacancies, error, isLoading } = useGetVacanciesQuery();
  
  return (
    <div className=" ^h-full">
      
      {/*<JSONViewer data={data_hhme} />*/}
      
      {data_vacancies?.items?.map((vacancy:any, index:number) => (
      <ListWrapper>
        <Link href={Routes.DASHBOARD.MAIN + '/vacancies/' + vacancy.id} className="mb-2 block">
          {vacancy.name}
        </Link>
        <Text size="xs" c="dimmed">
            <b>Дата публикации:</b> {vacancy.published_at ? dayjs(vacancy.published_at).format('DD MMM YYYY') : 'не указана'}
          </Text>
          <Text size="xs" c="dimmed">
          <b>Ответы:</b>  <span className="text-red-500 font-bold">{vacancy?.counters?.unread_responses} </span>/ {vacancy.counters?.responses}
          </Text>
          <Text size="xs" c="dimmed">
          <b>Резюме в процессе:</b> {vacancy.counters?.resumes_in_progress}
          </Text>
          <Divider/>
        </ListWrapper>  
      
    ))}
     
      {vacancies.map((vacancy, index) => (
        <ListWrapper>
        <Link href='' className="mb-2 block">
          {vacancy.name}
        </Link>
        <Text size="xs" c="dimmed">
        <b>Дата публикации:</b> {vacancy.published_at ? dayjs(vacancy.published_at).format('DD MMM YYYY') : 'не указана'}
          </Text>
          <Text size="xs" c="dimmed">
          <b>Ответы:</b> {vacancy?.counters?.responses}
          </Text>
          <Text size="xs" c="dimmed">
          <b>Резюме в процессе:</b> {vacancy?.counters?.resumes_in_progress}
          </Text>
        </ListWrapper>
    ))}
    <JSONViewer data={data_vacancies} />
    </div>
  );
};


//export default VacancyListComponent;
