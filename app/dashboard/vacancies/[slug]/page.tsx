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
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';

import Head from 'next/head';

const Settings = ({ params }: { params: { slug: string } }) => {
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
  <main className="mt-0 flex flex-row gap-8 h-full relative " 
  //items-stretch
  >
    <div
      className="w-[300px]
            min-w-64
            form-bg-and-text
            shadow
            relative
            text-sm
            "
            //bg-gray-300 
            //flex flex-col
            //p-4
    >
     <VacancyListComponent vacancies={vacancies} />
      
    </div>

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
      <CandidatesTable vacancyId={params.slug}/>
      
    </div>
  </main>
</DashBoardPageContainer>
  );
};

export default Settings;
