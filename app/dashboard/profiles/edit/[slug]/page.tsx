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
import {
  useCreateProfileMutation,
  useGetProfileByIdQuery,
  useUpdateProfileMutation,
} from "@/rtk/queries/joborder";
import { templateValues } from "@/components/_dashboard/profiles/_data/templateValues";
import { FormUtils } from "@/utils/FormUtils";
import { demoValues } from "@/components/_dashboard/profiles/_data/demoValues";
import { validatorStep1 } from "@/components/_dashboard/profiles/_data/validatorStep1";
import { fields } from "@/components/_dashboard/profiles/_data/fields";
import { QueryStateDisplay } from "@/components/__atoms/QueryStateDisplay/QueryStateDisplay";
import { stepNames } from "@/components/_dashboard/profiles/_data/stepNames";
import { FormWithStepperContainer } from "@/components/__atoms/Forms/containers/FormWithStepperContainer";
import { FormContainer } from "@/components/__atoms/Forms/containers/FormContainer";
import { StepperContainer } from "@/components/__atoms/Forms/containers/StepperContainer";
import { useMutationNotifications } from "@/hooks/useNotifications";

const Page = ({ params }: { params: { slug: string } }) => {
  const {
    data: dataProfile,
    error: errorProfile,
    isLoading: isLoadingProfile,
    refetch: refetchProfile,
  } = useGetProfileByIdQuery(params.slug);
  const [_formValues, setFormValues] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const md = useMediaQuery("(min-width: 768px)");



  const [updateProfile, { isLoading, isError, error, data }] =
  useUpdateProfileMutation();

  useMutationNotifications({
    text: "Профиль успешно обновлен",
    data: data,
    data_details: (data as any)?.msg
      ? (data as any)?.msg
      : "", ////Вы можете найти его в списке профилей
    error: error,
  });

  const validate = (values: any) => {
    if (activeStep === 0) {
      return validatorStep1(values);
    }
    if (activeStep === 1) {
      return {};
    }
    return {};
  };
  React.useEffect(() => {
    console.log("DP", dataProfile);
    setFormValues(dataProfile);
  }, [dataProfile]);

  return (
    <DashBoardPageContainer header="Создать профиль" Icon={IconRobot}>
      <div className="flex w-full flex-col items-center">
        <FormWithStepperBg />

        <FormWithStepperContainer>
          <FormContainer>
            <QueryStateDisplay
              isLoading={isLoadingProfile}
              error={errorProfile}
              onRetry={refetchProfile}
              //isNetworkError={isNetworkError} // Pass the isNetworkError function
            />

            {(dataProfile || true) && (
              <FormTemplate
                _formValues={_formValues}
                setFormValues={setFormValues}
               // templateValues={dataProfile}
                initialValues={dataProfile}
                queryValues={dataProfile}
                validate={validate}
                //  onSubmit={handleFormSubmit}
                fields={fields}
                mutation={updateProfile}
                data={data}
                loading={isLoading}
                error={isError ? error : null}
                activeStep={activeStep}
                //  onNext={handleNext}
                stepNames={stepNames}
                setActiveStep={setActiveStep}
              />
            )}
          </FormContainer>

          {stepNames.length > 1 && dataProfile &&  _formValues && (
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
      <JSONViewer data={dataProfile} />
    </DashBoardPageContainer>
  );
};

export default Page;
