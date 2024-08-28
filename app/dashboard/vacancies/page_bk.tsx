'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import { CandidatesTable } from '@/components/_dashboard/vacancies/list/VacanciesList/CandidatesTable';
//import VacanciesList from '@/components/_dashboard/predictor/vacancies/list/VacanciesList/VacanciesList';
import { XY } from '@/components/_dashboard/predictor/XY';
import ResumeForm from '@/components/CreateResumeForm/CreateResume';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';

import Head from 'next/head';

const Settings = () => {
  return (
    <DashBoardPageContainer header="Вакансии">
     <div className="p-4 w-full relative max-w-full text-black dark:text-white
     bg-white dark:text-white dark:bg-customGray-950/85
     ">
      <CandidatesTable/>
      </div>
      
    </DashBoardPageContainer>
  );
};

export default Settings;
