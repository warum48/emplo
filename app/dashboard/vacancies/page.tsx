'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
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
    <DashBoardPageContainer header="Вакансии" hasLeftMenu className="h-full">
      <main
        className="mt-0 flex flex-col md:flex-row gap-4 md:gap-8 h-full relative ml-4 md:ml-0"
        //items-stretch
      >
        <div
          className={`w-[300px]
            min-w-64
            bg-gray-300 
            text-black dark:text-white
            dark:bg-customGray-950/85
            shadow
            bg-white
            relative
            text-sm
            hidden md:block
            `}
          //flex flex-col
          //p-4
        >
          <VacancyListComponent vacancies={vacancies} />
        </div>
        <div
          className="flex gap-2 text-xs items-center md:hidden"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <IconList stroke={2} /> Список вакансий
        </div>
        <Drawer
          className="md:hidden"
          title="Список вакансий"
          size="100%"
          position="top"
          opened={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
        >
          <VacancyListComponent vacancies={vacancies} />
        </Drawer>

        <div
          className="px-4  
        form-bg-and-text
        mr-4
        h-full
        flex
        overflow-auto
        "
          //
        >
          <CandidatesTable vacancyId="0" />
        </div>
      </main>
    </DashBoardPageContainer>
  );
};

export default Page;
