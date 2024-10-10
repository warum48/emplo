"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { Stepper } from "@mantine/core";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconRobot } from "@tabler/icons-react";
//import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfileForm";
import { FormWithStepperBg } from "@/components/BgColors/FormWithStepperBg";
import { NewProfileForm } from "@/components/_dashboard/profiles/create/NewProfile"; //Form
import DataDisplay from "@/components/__atoms/DataDisplay/DataDisplay";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";

const Settings = () => {
  const [_formValues, setFormValues] = React.useState({});
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
            _formValues={_formValues}
            setFormValues={setFormValues}
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
                <Stepper.Step label={"Шаг " + (index + 1)} 
                //description={name} 
               // description={<StepDescription description={name} />}
                //description={<DataDisplay data={formData}/>}
                description={<DataDisplay name={name} data={_formValues ? _formValues : {}}/>}
                
                />
              ))}
            </Stepper>
          </div>
        </div>
      </div>
      <JSONViewer data={_formValues} />
    </DashBoardPageContainer>
  );
};

const StepDescription = ({ description }: { description: string } ) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">vyjuj vyjuj vyjuj vyjujv yvuvju sdfsdf sdf sdf sdf sdf sdfsdfsdfsdf sdfsdfsdf sdfsdfsdf sdf sdfsdfsdf sdfsdfsdf sdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdf sdfsdfsdf sdfsdf vuvjuv jujvujuvjvu jvujvu jvuvj uvjuvj {description}</h2> 

    </div>
  );
};

export default Settings;
