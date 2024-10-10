'use client';
//import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
//import VacanciesList from '@/components/_dashboard/predictor/vacancies/list/VacanciesList/VacanciesList';

import React from 'react';
import { IconRobot } from '@tabler/icons-react';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { VacanciesTable } from '@/components/_dashboard/vacancies_1c/VacanciesTable';
import { useGetVacanciesQuery } from '@/rtk/queries/joborder';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';

const Page = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { data: data_vacancies, error, isLoading } = useGetVacanciesQuery();
  const vacancies = [
    { name: 'UX/UI дизайнер', employees: [] },
    { name: 'Старший дизайнер проектов', employees: [] },
    { name: 'Backend разработчик', employees: [] },
    { name: 'Head of sales', employees: [] },
    { name: 'Ведущий экономист', employees: [] },
    { name: 'Аналитик', employees: [] },
    { name: 'Системный администратор', employees: [] },
    { name: 'Директор по продукту', employees: [] },
    { name: 'UX/UI дизайнер', employees: [] },
    { name: 'Старший дизайнер проектов', employees: [] },
    { name: 'Backend разработчик', employees: [] },
    { name: 'Head of sales', employees: [] },
    { name: 'Ведущий экономист', employees: [] },
    { name: 'Аналитик', employees: [] },
    { name: 'Системный администратор', employees: [] },
    { name: 'Директор по продукту', employees: [] },
    { name: 'UX/UI дизайнер', employees: [] },
    { name: 'Старший дизайнер проектов', employees: [] },
    { name: 'Backend разработчик', employees: [] },
    { name: 'Head of sales', employees: [] },
    { name: 'Ведущий экономист', employees: [] },
    { name: 'Аналитик', employees: [] },
    { name: 'Системный администратор', employees: [] },
    { name: 'Директор по продукту', employees: [] },
  ];

  return (
    <DashBoardPageContainer header="Вакансии" Icon={IconRobot} className="min-h-full">
      <div className="form-bg-and-text mr-2 p-8 rounded overflow-auto">
      <VacanciesTable/>
      <JSONViewer data={data_vacancies} />
      </div>
    </DashBoardPageContainer>
  );
};

export default Page;
