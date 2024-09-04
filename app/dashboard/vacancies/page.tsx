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
        className="mt-0 flex flex-col lg:flex-row gap-4 lg:gap-4 h-full relative ^ml-4 lg:ml-0"
        //items-stretch
      >
        <div
          className={`
           
            w-[300px] 
            min-w-[300px] 
            ^min-w-64
            form-bg-and-text
            ^bg-gray-200
            shadow
            relative
            text-sm
            hidden lg:block
            `}
          //flex flex-col
          //p-4
        >
          <VacancyListComponent vacancies={vacancies} />
        </div>

        {/*} <div
          className="flex gap-2 text-xs items-center lg:hidden"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <IconList stroke={2} /> Список вакансий
        </div>
        <Drawer
          className="lg:hidden"
          title="Список вакансий"
          size="100%"
          position="top"
          opened={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
        >
          <VacancyListComponent vacancies={vacancies} />
        </Drawer> */}
        <DrawerWithOpener
          Icon={<IconList stroke={2} />}
          MainComponent={<VacancyListComponent vacancies={vacancies} />}
          title="Список вакансий"
          className="px-4"
        />

        <div
          className="
          ^px-4  
          mx-4
        form-bg-and-text
       ^mr-4
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
