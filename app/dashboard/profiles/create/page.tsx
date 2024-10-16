"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { Stepper } from "@mantine/core";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconRobot } from "@tabler/icons-react";
import { FormWithStepperBg } from "@/components/BgColors/FormWithStepperBg";
import DataDisplay from "@/components/__atoms/DataDisplay/DataDisplay";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import {
  FormTemplate,
} from "@/components/_dashboard/profiles/create/FormTemplate";
import { useCreateProfileMutation } from "@/rtk/queries/joborder";
import { templateValues } from "@/components/_dashboard/profiles/_data/templateValues";
import { FormUtils } from "@/utils/FormUtils";
import { demoValues } from "@/components/_dashboard/profiles/_data/demoValues";
import { validatorStep1 } from "@/components/_dashboard/profiles/_data/validatorStep1";
import { fields } from "@/components/_dashboard/profiles/_data/fields";


const Settings = () => {
  const [_formValues, setFormValues] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ field1: "", field2: "" });
  const stepNames = [
    "Новый профиль вакансии",
   // "Критерии",
  ]; 
  const md = useMediaQuery("(min-width: 768px)");


  const handleNext = (values: any) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    if (activeStep < 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log("Final form data:", { ...formData, ...values });
    }
  };

  const [createProfile, { isLoading, isError, error, data }] =
    useCreateProfileMutation();

  const validate = (values: any) => {
    if (activeStep === 0) {
      return validatorStep1(values);
    }

    if (activeStep === 1) {
      return {

      };
    }

    return {};
  };

  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };


  return (
    <DashBoardPageContainer header="Создать профиль" Icon={IconRobot}>
      <div className="flex w-full flex-col items-center">
        <FormWithStepperBg />

        <div className="flex w-full flex-col items-start justify-center gap-4 md:flex-row">
          <div className="formcont relative order-2 w-full max-w-screen-md rounded-2xl bg-white p-4 text-black dark:bg-customGray-950/85 dark:text-white md:order-1">
            <FormTemplate
              _formValues={_formValues}
              setFormValues={setFormValues}
              templateValues={templateValues}
              initialValues={demoValues}
              validate={validate}
              onSubmit={handleFormSubmit}
              fields={fields}
              mutation={createProfile}
              data={data}
              loading={isLoading}
              error={isError ? error : null}
              activeStep={activeStep}
              onNext={handleNext}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />
          </div>
          {stepNames.length > 1 &&
          <div className="rightcol order-1 w-full pl-4 pt-8 md:order-2 md:w-[196px] lg:w-[250px]">
            <Stepper
              active={activeStep}
              onStepClick={setActiveStep}
              orientation={!md ? "horizontal" : "vertical"}
            >
              {stepNames.map((name, index) => (
                <Stepper.Step
                  label={"Шаг " + (index + 1)}
                  description={
                    <DataDisplay
                      name={name}
                      data={FormUtils.formValuesToStepDetailsObject(index, fields, _formValues)}
                    />
                  }
                />
              ))}
            </Stepper>
          </div>
}
        </div>
      </div>
      <JSONViewer data={_formValues} />
    </DashBoardPageContainer>
  );
};

/* {
      type: "TextInput",
      name: "speciality",
      label: "Должность",
      placeholder: "Введите должность",
    },*/

/*   {
        type: "TextInput",
        name: "org_unit",
        label: "Подразделение",
        placeholder: "Введите подразделение",
      },

     {
        component: DepartmentsSelect,
        props: {
          formFieldName: "speciality",
          label: "department",
          placeholder: "Введите department",
          dependency: "org",
        },

        customisable: true,
      },
*/

{
  /*  <div className="flex w-full flex-col justify-center gap-4 md:flex-row items-start">
          <div className="formcont relative order-2 w-full  max-w-screen-md rounded-2xl bg-white p-4 text-black dark:bg-customGray-950/85 dark:text-white md:order-1">
           <VacancyCreationFormHH />
            <NewProfileForm
              _formValues={_formValues}
              setFormValues={setFormValues}
              activeStep={activeStep}
              onNext={handleNext}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />*/
}



export default Settings;
