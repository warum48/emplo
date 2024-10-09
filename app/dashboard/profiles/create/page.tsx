"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { Stepper } from "@mantine/core";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconRobot } from "@tabler/icons-react";
//import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfileForm";
import { FormWithStepperBg } from "@/components/BgColors/FormWithStepperBg";
import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfile"; //Form

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
