"use client";

import { useForm } from "@mantine/form";
import { TextInput, Textarea, Select, Button, Title } from "@mantine/core";
import { STYLES } from "@/global/CONSTS";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/rtk/store/store";
import {
  useCreateProfileMutation,
  useGetSearchCritsQuery,
} from "@/rtk/queries/joborder";
import { BasicError } from "@/components/Errors/BasicError";
import { SpaceYMain } from "@/components/__atoms/Spacers/Spacers";
import { Preloader } from "@/components/__atoms/Preloader/Preloader";
import React from "react";
import { JSONViewer } from "@/components/__atoms/JSONViewer/JSONViewr";
import { TextHint } from "@/components/__atoms/TextBlocks/TextBlocks";
import { useMutationNotifications } from "@/hooks/useNotifications";
type TProps = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  onNext: (values: any) => void;
  stepNames: string[];
};

export const NewProfileForm = ({
  activeStep,
  setActiveStep,
  onNext,
  stepNames,
}: TProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [
    createProfile,
    { isLoading, isSuccess, isError, error, data, isUninitialized, reset },
  ] = useCreateProfileMutation();
  //useDebugFormMutation();
  const {
    data: data_crits,
    isLoading: loading_crits,
    error: error_crits,
  } = useGetSearchCritsQuery();

  const [critsSelectData, setCritsSelectData] = React.useState<any[]>([]);

  const demoValues = {
    name: "Новый профиль", //Наименование
    speciality: "Водитель-курьер", //Должность
    org_unit: "Подразделение", //Подразделение
    org_project: "Проект", //Проект/направление
    org: "Чистая Линия",
    job_description: "тестовое описание", //Обязанности
    job_conditions: "тестовые условия", //Условия
    job_requirements: "тестовые требования", //Требования
  };

  const form = useForm({
    initialValues: demoValues,
    validate: {},
  });

  useMutationNotifications({
    text: "Профиль успешно создан",
    data: data,
    data_details: (data as any)?.msg
      ? (data as any)?.msg
      : "Вы можете найти его в списке профилей",
    error: error,
  });

  React.useEffect(() => {
    if (data_crits && data_crits[0]) {
      const selectData = data_crits.map((item: any) => ({
        value: item.id.toString(), // Using `id` as value
        label: item.name, // Using `name` as label
      }));
      setCritsSelectData(selectData);
    }
  }, [data_crits]);

  const handleSubmit = async (values: any) => {
    try {
      await createProfile(values).unwrap();
      console.log("Vacancy created successfully");
    } catch (error) {
      console.error("Failed to create vacancy:", error);
    }
  };

  const customLabelStyle = {
    marginBottom: STYLES.FORM.labelMargin,
  };

  return (
    <div className="relative w-full max-w-full p-4 text-black dark:text-white">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="relative grid w-full max-w-full grid-cols-1 gap-6 text-left"
      >
        <div className="flex w-full max-w-full flex-col gap-6">
          <Title order={2} className="font-light">
            {stepNames[activeStep]}
          </Title>

          {activeStep === 0 && (
            <>
              <div>
                <TextInput
                  label="Имя профиля"
                  placeholder="Имя профиля" 
                  labelProps={{ style: customLabelStyle }}
                  {...form.getInputProps("name")}
                />
                <TextHint dimmed>
                  По этому имени вы сможете найти профиль вакансии в списках и
                  таблицах
                </TextHint>
              </div>
              <TextInput
                label="Должность"
                placeholder="Должность"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("speciality")}
              />
              <TextInput
                label="Подразделение"
                placeholder="Подразделение"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_unit")}
              />
              <TextInput
                label="Проект"
                placeholder="На всякий случай: еще один аналитический разрез для фильтрации и группировки подбора (как у Сбера)"
                labelProps={{ style: customLabelStyle }}
                {...form.getInputProps("org_project")}
              />

              <Textarea
                label="Обязанности"
                placeholder="Описание обязанностей (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_description")}
              />

              <Textarea
                label="Условия"
                placeholder="Описание условий (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_conditions")}
              />

              <Textarea
                label="Требования"
                placeholder="Описание требований (для размещения вакансии)"
                labelProps={{ style: customLabelStyle }}
                minRows={4}
                {...form.getInputProps("job_requirements")}
              />
            </>
          )}

          {activeStep === 1 && (
            <>
              <Select
                label="Этап работы"
                placeholder="Выберите этап работы"
                data={[]} 
                disabled
              />
              <Select
                label="Согласование"
                placeholder="Выберите согласующего"
                data={[]} 
                multiple
                disabled
              />
            </>
          )}

          <div
            className={`mt-4 flex w-full ${activeStep == 0 ? "justify-center" : "justify-center"} gap-4`}
          >
            {activeStep > 0 && (
              <Button
                variant="outline"
                onClick={() =>
                  setActiveStep((activeStep: number) => activeStep - 1)
                }
                className="w-full max-w-80"
              >
                Назад
              </Button>
            )}
            {activeStep < stepNames.length - 1 && (
              <Button
                onClick={() =>
                  setActiveStep((activeStep: number) => activeStep + 1)
                }
                className="w-full max-w-80"
              >
                Далее
              </Button>
            )}
            {activeStep == stepNames.length - 1 && (
              <Button type="submit" className="w-full max-w-80">
                Создать вакансию
              </Button>
            )}
          </div>
        </div>

      </form>
      <SpaceYMain />
      {isLoading && <Preloader />}
      {(error || isError) && <BasicError error={error} />}
      <JSONViewer data={form.values} />
    </div>
  );
};


