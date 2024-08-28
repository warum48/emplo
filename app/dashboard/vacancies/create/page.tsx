'use client';
import { TextInfo, TitleLabel } from '@/components/__atoms/TextBlocks/TextBlocks';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import VacancyCreationFormHH from '@/components/_dashboard/vacancies/create/HHBasedVacancyForm';
import { VacancyCreationFormZayavka } from '@/components/_dashboard/vacancies/create/ZayavkaForm';
import { XY } from '@/components/_dashboard/predictor/XY';
import ResumeForm from '@/components/CreateResumeForm/CreateResume';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import { Stepper } from '@mantine/core';

import Head from 'next/head';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';

const Settings = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ field1: '', field2: '' });
  const stepNames = ['Основная информация', 'Критерии', 'Настройки и администрирование']; //"Этапы работы с кандидатами","Параметры поиска","Согласование","История"
  const md = useMediaQuery('(min-width: 768px)');

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = (values: any) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    if (activeStep < 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log('Final form data:', { ...formData, ...values });
    }
  };

  return (
    <DashBoardPageContainer header="Создать резюме">
      <div className="flex flex-col items-center w-full ">
        <div className="hidden md:block">
        <div className="absolute -left-[100px]  top-1/5 w-1/2 h-[400px] ">
          <div
            className="absolute scale-y-150 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-300/50 via-cyan-300/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-blue-800/30 dark:via-cyan-800/0 dark:to-blue-600/0
          "
            //from-blue-200/50
          ></div>
        </div>

        <div className="absolute right-[150px] top-0 w-1/2 h-[400px] ">
          <div
            className="absolute scale-y-120 scale-x-150 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-200/30 via-purple-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-500/10 dark:via-pink-700/0 dark:to-pink-600/0
          "
          ></div>
        </div>
        </div>
        <div className="flex justify-center w-full gap-4 flex-col md:flex-row">
          <div
            className="p-4 w-full relative max-w-full text-black dark:text-white
     bg-white dark:text-white dark:bg-customGray-950/85 max-w-screen-md rounded-2xl
     order-2 md:order-1
     "
          >
            {/*<VacancyCreationFormHH />*/}
            <VacancyCreationFormZayavka
              activeStep={activeStep}
              onNext={handleNext}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />
          </div>

          <div className="w-full md:w-[196px] lg:w-[250px] pt-8 pl-4 order-1 md:order-2">
            <Stepper
              active={activeStep}
              onStepClick={setActiveStep}
              orientation={!md ? 'horizontal' : 'vertical'}
            >
              {stepNames.map((name, index) => (
                <Stepper.Step label={'Шаг ' + (index + 1)} description={name} />
              ))}
            </Stepper>
          </div>
        </div>
      </div>
    </DashBoardPageContainer>
  );
};

export default Settings;
