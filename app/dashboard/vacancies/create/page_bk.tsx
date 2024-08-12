'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import VacancyCreationFormHH from '@/components/_dashboard/predictor/vacancies/create/HHBasedVacancyForm';
import VacancyForm from '@/components/_dashboard/predictor/vacancies/create/NewVacancyForm';
//import VacanciesList from '@/components/_dashboard/predictor/vacancies/list/VacanciesList/VacanciesList';
import { XY } from '@/components/_dashboard/predictor/XY';
import ResumeForm from '@/components/CreateResumeForm/CreateResume';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';

import Head from 'next/head';

const Settings = () => {
  return (
    <DashBoardPageContainer header="Создать вакансию">
      <div className="flex flex-col items-center w-full ">
        <div className="absolute -left-[10px]  top-1/5 w-1/2 h-1/2 ">
          <div
            className="absolute scale-y-150 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-200/50 via-cyan-300/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-blue-800/30 dark:via-cyan-800/0 dark:to-blue-600/0
          "
            //from-blue-200/50
          ></div>
        </div>

        <div className="absolute -right-[50px] top-1/5 w-1/2 h-1/2 ">
          <div
            className="absolute scale-y-150 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-200/50 via-purple-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-500/10 dark:via-pink-700/0 dark:to-pink-600/0
          "
          ></div>
        </div>

        <div
          className="p-4 w-full relative max-w-full text-black dark:text-white
     bg-white dark:text-white dark:bg-customGray-950/85 max-w-screen-md rounded-2xl
     "
        >
         {/*} <VacancyForm /> */}
          <VacancyCreationFormHH />
        </div>
      </div>
      
    </DashBoardPageContainer>
  );
};

export default Settings;
