'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import VacanciesList from '@/components/_dashboard/predictor/VacanciesList/VacanciesList';
import { XY } from '@/components/_dashboard/predictor/XY';
import ResumeForm from '@/components/CreateResumeForm/CreateResume';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';

import Head from 'next/head';

const Settings = () => {
  return (
    <div className="dashboard-page-container">
      <div>
     <h2 className="page-header">Создать резюме</h2></div>
     <div className="p-4 w-full relative max-w-full text-black dark:text-white
     bg-white dark:text-white dark:bg-customGray-950/85
     ">
      <VacanciesList/>
      </div>
      
    </div>
  );
};

export default Settings;
