'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
//import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import { CandidatesTable } from '@/components/_dashboard/vacancies/list/VacanciesList/CandidatesTable';
import { VacancyListComponent } from '@/components/_dashboard/vacancies/list/VacanciesList/VacanciesList';
//import VacanciesList from '@/components/_dashboard/predictor/vacancies/list/VacanciesList/VacanciesList';
import { XY } from '@/components/_dashboard/predictor/XY';
import ResumeForm from '@/components/CreateResumeForm/CreateResume';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';

import Head from 'next/head';
import { Drawer } from '@mantine/core';
import React from 'react';
import { IconList } from '@tabler/icons-react';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { DrawerWithOpener } from '@/components/_dashboard/PageContainer/DrawerWithOpener';
import VacancyCard from '@/components/_dashboard/vacancies/VacancyCard';
import { VacanciesGrid } from '@/components/_dashboard/vacancies/grid/VacanciesGrid';

const Page = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
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
    <DashBoardPageContainer header="Вакансии"  className="h-full">
      <main
        className="mt-0 flex flex-col lg:flex-row gap-4 lg:gap-4 h-full relative ^ml-4 lg:ml-0 w-full">
        <VacanciesGrid />
      </main>
    </DashBoardPageContainer>
  );
};

export default Page;
