"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { IconSettings } from "@tabler/icons-react";
import { RequestTable } from "@/components/Requests/RequestTable";
import { ProfilesTable } from "@/components/_dashboard/profiles/ProfilesTable";
import { TableView } from "@/components/__atoms/Tables/TableView";
import { RegionsSelect } from "@/components/DynamicFormFields/Regions";
import { useDeleteProfileMutation, useGetProfilesQuery } from "@/rtk/queries/joborder";
import dayjs from "dayjs";
import React from "react";
import { TableUtils } from "@/utils/TableUtils";
import { useMutationNotifications } from "@/hooks/useNotifications";

const Requests = () => {
  const mockFilter = ["все"];
  const { data, error, isLoading } = useGetProfilesQuery();
  const [ deleteProfile, {data: data_delete, error: error_delete, isLoading: isLoading_delete}] = useDeleteProfileMutation();

  useMutationNotifications({
    text: "Профиль успешно удален",
    data: data_delete,
    data_details: (data_delete as any)?.msg
      ? (data_delete as any)?.msg
      : "", ////Вы можете найти его в списке профилей
    error: error_delete,
  });

  const [filterState, setFilterState] = React.useState({
    "org_unit": "",
    "org": "",
    "speciality": "",
    name: "",
  });

  const filterOptions = React.useMemo(() => {
    if (!data) return {};
    
   // const getUniqueValues = (field:any) => [...new Set(data.map((item) => field.split('.').reduce((o, i) => o?.[i], item)))];

  
    return {
      orgUnits: TableUtils.getUniqueValues( data,"org_unit").filter((value) => value).map((value) => ({
        value,
        label: value || "Не указано"
      })),
      orgs: TableUtils.getUniqueValues( data,"org").filter((value) => value).map((value) => ({
        value,
        label: value || "Не указано"
      })),
      specialities: TableUtils.getUniqueValues(data,"speciality").filter((value) => value).map((value) => ({
        value,
        label: value || "Не указано"
      })),
      names: TableUtils.getUniqueValues(data,"name").filter((value) => value).map((value) => ({
        value,
        label: value || "Не указано"
      })),
    };
  }, [data]);

  return (
    <DashBoardPageContainer header="Профили" Icon={IconSettings}>
      <div className="form-bg-and-text mr-2 overflow-auto rounded p-8">
        {/*<ProfilesTable/>*/}
        <TableView
        filterState={filterState} 
        setFilterState={setFilterState}
          header="Список профилей вакансий"
          addButton={{
            text: "Добавить профиль",
            link: "/dashboard/profiles/create",
          }}
          filters={[
            {
              data: filterOptions.names,
              placeholder: "Все",
              label: "Наименование:",
              fieldName: "name",
            },
            {
              data: filterOptions.specialities,
              placeholder: "Все",
              label: "Должность:",
              fieldName: "speciality",
            },
            {
              data: filterOptions.orgUnits,
              placeholder: "Все",
              label: "Подразделение:",
              fieldName: "org_unit",
            },
            
            {
              data: filterOptions.orgs,
              placeholder: "Все",
              label: "Юр. лицо:",
              fieldName: "org",
            },
           
            
            /*{
              component: <RegionsSelect />,
              fieldName:"",
            },*/
          ]}
          
          ths={["Наименование", "Должность", "Подразделение", "Юр. лицо", "Дата создания"]}
          tds={["name", "speciality", "org_unit", "org", { //org_job_name
            value: "created_at", formatter: (value: any) => dayjs(value).format("DD.MM.YYYY")
          }]}
          data={data}
          loading={isLoading}
          error={error}
          actionsMenu={[
            //{ text: "Редактировать", link: "/dashboard/profiles/23" },
            //{ text: "Создать заявку", link: "/dashboard/vacancies/create" },
            { text: "Создать копию", link: "/dashboard/profiles/copy/", linkParam:'id' },
            { text: "Удалить", function: deleteProfile, param:'id', confirmationRequired:true },
            //{
            //  text: "Удалить",
            //  link: "",
            //  onClick: () => {
            //    console.log("remove");
            //  },
            //},
          ]}
        />
      </div>
    </DashBoardPageContainer>
  );
};

export default Requests;
