'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
//import { CandidatesTable } from '@/components/_dashboard/vacancies/list/VacanciesList/CandidatesTable';
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
import { IconList, IconRobot } from '@tabler/icons-react';
import VacancyCard from '@/components/_dashboard/vacancies/VacancyCard';
import { useGetVacancyByIdQuery } from '@/rtk/queries/vacancy';
import { Preloader } from '@/components/__atoms/Preloader/Preloader';
import { PageWithListAndTable } from '@/components/PageWithListAndTable/PageWithListAndTable';
import { VacanciesTable } from '@/components/_dashboard/vacancies_1c/VacanciesTable';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { CandidatesTable } from '@/components/_dashboard/vacancies_1c/CandidatesTable';

const Page = ({ params }: { params: { slug: string } }) => {
  const { data: data_vacancy, error, isLoading } = useGetVacancyByIdQuery(params.slug);
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
   /* { name: 'Backend разработчик', employees: [] },
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
    { name: 'Директор по продукту', employees: [] }, */
  ];

  const LeftComponent = <VacancyListComponent vacancies={vacancies} />

  return (
    <DashBoardPageContainer header="Вакансии" hasLeftMenu  Icon={IconRobot} >
    <PageWithListAndTable leftSideComponent={LeftComponent} rightSideComponent={<CandidatesTable />} rightSideTopComponent={<JSONViewer data={{a:'b'} }/>} />
    </DashBoardPageContainer>
  )

  /*return (
    <DashBoardPageContainer header="Вакансии" hasLeftMenu className="h-full" Icon={IconRobot} >
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

        <div className="flex flex-col gap-4 overflow-auto "
        >
          <h2 className='dashboard-section-header'>{data_vacancy?.name}</h2>
         
          {data_vacancy ? <VacancyCard data={data_vacancy} /> : <Preloader />}

          <div
            className="  
        form-bg-and-text
        mr-4
       rounded
        overflow-auto
        "
          >
            <CandidatesTable vacancyId={params.slug} />
          </div>
        </div>
      </main>
    </DashBoardPageContainer>
  );*/
};

export default Page;
