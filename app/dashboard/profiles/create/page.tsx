"use client";
import {
  TextInfo,
  TitleLabel,
} from "@/components/__atoms/TextBlocks/TextBlocks";
import AuthorizationForm from "@/components/_auth/AuthorizationForm";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { PredictorsList } from "@/components/_dashboard/predictor/Predictors";
import VacancyCreationFormHH from "@/components/_dashboard/vacancies/create/HHBasedVacancyForm";
import { VacancyCreationFormZayavka } from "@/components/_dashboard/vacancies/create/ZayavkaForm";
import { XY } from "@/components/_dashboard/predictor/XY";
import ResumeForm from "@/components/CreateResumeForm/CreateResume";
import DashBoardHeader from "@/components/Header/DashBoardHeader";
import Header from "@/components/Header/Header";
import JobSearchForm from "@/components/Search/JobSearchForm";
import { ResultList } from "@/components/ResultList/ResultList";
import { Stepper } from "@mantine/core";

import Head from "next/head";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconRobot } from "@tabler/icons-react";
import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfileForm";
import { FormWithStepperBg } from "@/components/BgColors/FormWithStepperBg";

const Settings = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ field1: "", field2: "" });
  const stepNames = [
    "Основная информация",
    "Критерии",
    // 'Настройки и администрирование'
  ]; //"Этапы работы с кандидатами","Параметры поиска","Согласование","История"
  const md = useMediaQuery("(min-width: 768px)");

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = (values: any) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    if (activeStep < 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log("Final form data:", { ...formData, ...values });
    }
  };

  return (
    <DashBoardPageContainer header="Создать профиль" Icon={IconRobot}>
      <div className="flex w-full flex-col items-center">
        <FormWithStepperBg />

        

        <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
          <div className="relative order-2 w-full  max-w-screen-md rounded-2xl bg-white p-4 text-black dark:bg-customGray-950/85 dark:text-white md:order-1">
            {/*<VacancyCreationFormHH />*/}
            <NewProfileForm
              activeStep={activeStep}
              onNext={handleNext}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />
          </div>

          <div className="order-1 w-full pl-4 pt-8 md:order-2 md:w-[196px] lg:w-[250px]">
            <Stepper
              active={activeStep}
              onStepClick={setActiveStep}
              orientation={!md ? "horizontal" : "vertical"}
            >
              {stepNames.map((name, index) => (
                <Stepper.Step label={"Шаг " + (index + 1)} description={name} />
              ))}
            </Stepper>
          </div>
        </div>
      </div>
    </DashBoardPageContainer>
  );
};

export default Settings;
