"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { Stepper } from "@mantine/core";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { IconRobot } from "@tabler/icons-react";
import { FormWithStepperBg } from "@/components/BgColors/FormWithStepperBg";
import DataDisplay from "@/components/__atoms/DataDisplay/DataDisplay";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { FormTemplate } from "@/components/_dashboard/profiles/create/FormTemplate";
import { useCreateProfileMutation } from "@/rtk/queries/joborder";
import { templateValues } from "@/components/_dashboard/profiles/_data/templateValues";
import { FormUtils } from "@/utils/FormUtils";
import { demoValues } from "@/components/_dashboard/profiles/_data/demoValues";
import { validatorStep1 } from "@/components/_dashboard/profiles/_data/validatorStep1";
import { fields } from "@/components/_dashboard/profiles/_data/fields";
import { FormWithStepperContainer } from "@/components/__atoms/Forms/containers/FormWithStepperContainer";
import { FormContainer } from "@/components/__atoms/Forms/containers/FormContainer";
import { StepperContainer } from "@/components/__atoms/Forms/containers/StepperContainer";
import { stepNames } from "@/components/_dashboard/profiles/_data/stepNames";

const CreateProfilePage = () => {
  const [_formValues, setFormValues] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const md = useMediaQuery("(min-width: 768px)");

  const [createProfile, { isLoading, isError, error, data }] =
    useCreateProfileMutation();

  const validate = (values: any) => {
    if (activeStep === 0) {
      return validatorStep1(values);
    }
    if (activeStep === 1) {
      return {};
    }
    return {};
  };

  return (
    <DashBoardPageContainer header="Создать профиль" Icon={IconRobot}>
      <div className="flex w-full flex-col items-center">
        <FormWithStepperBg />

        <FormWithStepperContainer>
          <FormContainer>
            <FormTemplate
              _formValues={_formValues}
              setFormValues={setFormValues}
              templateValues={templateValues}
              initialValues={demoValues}
              validate={validate}
              fields={fields}
              mutation={createProfile}
              data={data}
              loading={isLoading}
              error={isError ? error : null}
              activeStep={activeStep}
              stepNames={stepNames}
              setActiveStep={setActiveStep}
            />
          </FormContainer>
          {stepNames.length > 1 && (
            <StepperContainer>
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
                        data={FormUtils.formValuesToStepDetailsObject(
                          index,
                          fields,
                          _formValues,
                        )}
                      />
                    }
                  />
                ))}
              </Stepper>
            </StepperContainer>
          )}
        </FormWithStepperContainer>
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

export default CreateProfilePage;
