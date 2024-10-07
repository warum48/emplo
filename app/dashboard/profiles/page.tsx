"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { IconSettings } from "@tabler/icons-react";
import { RequestTable } from "@/components/Requests/RequestTable";
import { ProfilesTable } from "@/components/_dashboard/profiles/ProfilesTable";
import { TableView } from "@/components/__atoms/Tables/TableView";
import { RegionsSelect } from "@/components/DynamicFormFields/Regions";
import { useGetProfilesQuery } from "@/rtk/queries/joborder";
import dayjs from "dayjs";

const Requests = () => {
  const mockFilter = ["все"];
  const { data, error, isLoading } = useGetProfilesQuery();
  return (
    <DashBoardPageContainer header="Профили" Icon={IconSettings}>
      <div className="form-bg-and-text mr-2 overflow-auto rounded p-8">
        {/*<ProfilesTable/>*/}
        <TableView
        
          header="Список профилей вакансий"
          addButton={{
            text: "Добавить профиль",
            link: "/dashboard/profiles/create",
          }}
          filters={[
            {
              data: mockFilter,
              placeholder: "Все",
              label: "Подразделение:",
              fieldName: "org_unit",
            },
            {
              data: mockFilter,
              placeholder: "Все",
              label: "Наименование:",
              fieldName: "name",
            },
            {
              component: <RegionsSelect />,
              fieldName:"",
            },
          ]}
          
          ths={["Наименование", "Должность", "Подразделение", "Дата закрытия"]}
          tds={["name", "speciality", "org_unit", { //org_job_name
            value: "created_at", formatter: (value: any) => dayjs(value).format("DD.MM.YYYY")
          }]}
          data={data}
          loading={isLoading}
          error={error}
          actionsMenu={[
            { text: "Редактировать", link: "/dashboard/profiles/23" },
            { text: "Создать заявку", link: "/dashboard/vacancies/create" },
            {
              text: "Удалить",
              link: "",
              onClick: () => {
                console.log("remove");
              },
            },
          ]}
        />
      </div>
    </DashBoardPageContainer>
  );
};

export default Requests;
