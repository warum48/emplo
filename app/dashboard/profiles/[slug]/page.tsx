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
  useDeleteProfileMutation,
  useGetProfileByIdQuery,
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
import { Button, Checkbox, Drawer, Group, NumberInput, Select, Tabs, Textarea, TextInput } from '@mantine/core';
import { useMutationNotifications } from "@/hooks/useNotifications";
import { Confirmator } from "@/components/__uiutils/Confirmator";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { slug: string } }) => {
  const {
    data: dataProfile,
    error: errorProfile,
    isLoading: isLoadingProfile,
    refetch: refetchProfile,
  } = useGetProfileByIdQuery(params.slug);
  const [ deleteProfile, {data: data_delete, error: error_delete, isLoading: isLoading_delete}] = useDeleteProfileMutation();
  const [_formValues, setFormValues] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const md = useMediaQuery("(min-width: 768px)");
  const [showConfirmator, setShowConfirmator] = React.useState<boolean>(false);
  const router = useRouter();

  useMutationNotifications({
    text: "Профиль успешно удален",
    data: data_delete,
    data_details: (data_delete as any)?.msg
      ? (data_delete as any)?.msg
      : "", ////Вы можете найти его в списке профилей
    error: error_delete,
  });

  /*const [createProfile, { isLoading, isError, error, data }] =
    useCreateProfileMutation();

  const validate = (values: any) => {
    if (activeStep === 0) {
      return validatorStep1(values);
    }
    if (activeStep === 1) {
      return {};
    }
    return {};
  };*/
  React.useEffect(() => {
    console.log("DP", dataProfile);
    setFormValues(dataProfile);
  }, [dataProfile]);

  return (
    <>
    <DashBoardPageContainer header="Создать профиль" Icon={IconRobot}>
      <div className="flex flex-col items-center">
       {/*} <FormWithStepperBg /> */}

        <FormWithStepperContainer>
          <div className="form-bg-and-text p-4 w-full max-w-screen-md">
            <QueryStateDisplay
              isLoading={isLoadingProfile}
              error={errorProfile}
              onRetry={refetchProfile}
              //isNetworkError={isNetworkError} // Pass the isNetworkError function
            />

            {stepNames.length > 1 && dataProfile &&  _formValues &&(
              <Tabs defaultValue="t0">
              <Tabs.List>
              {stepNames.map((name, index) => (
                <Tabs.Tab value={'t'+index} className="uppercase">
                  {name}
                </Tabs.Tab>
              ))}
              </Tabs.List>
             
              {stepNames.map((name, index) => (
              <Tabs.Panel value={'t'+index} className="flex flex-col gap-6 ">
               
                <DataDisplay
                        //name={name}
                        textStyle="text-sm p-4"
                        data={FormUtils.formValuesToStepDetailsObject(
                          index,
                          fields,
                          _formValues,
                        )}
                      />
              </Tabs.Panel>
               ))}
              </Tabs>
            )}
          

          <div
            className={`mt-4 flex w-full ${activeStep == 0 ? "justify-center" : "justify-center"} gap-4 p-4`}
          >
           
              <Button
                variant="outline"
                onClick={() =>
                // deleteProfile(params.slug)
                setShowConfirmator(true)
                }
                className="w-full max-w-80"
              >
                Удалить
              </Button>
            
           
              <Button
                onClick={() => {
                  console.log('')
                     router.push(`/dashboard/profiles/edit/${params.slug}`)
                }}
                className="w-full max-w-80"
              >
                Редактировать
              </Button>
           
            
              <Button type="submit" className="w-full max-w-80"
              onClick={() => {
                console.log('')
                   router.push(`/dashboard/profiles/copy/${params.slug}`)
              }}
              >
                Создать копию
              </Button>
            
          </div>
          </div>
        </FormWithStepperContainer>
      </div>
   {/*   <JSONViewer data={_formValues} />
      <JSONViewer data={dataProfile} /> */}

    </DashBoardPageContainer>
    <Confirmator
    //onConfirm={() => {
    //  if(action.function != undefined){
    //    action.function(row[action.param || "id"] ||`0`)
    //    }
    //}} //
    onConfirm={() => {
      deleteProfile(params.slug)
      setShowConfirmator(false)
    }}
    header={"Вы действительно хотите удалить профиль?"}
    showConfirmator={showConfirmator}
    setShowConfirmator={setShowConfirmator}
    closeOnConfirm={true}
  />
  </>
  );
};

export default Page;
