"use client";
import { DashBoardPageContainer } from "@/components/_dashboard/PageContainer/DashBoardPageContainer";
import { IconSettings } from "@tabler/icons-react";
import { RequestTable } from "@/components/Requests/RequestTable";
import { ProfilesTable } from "@/components/_dashboard/profiles/ProfilesTable";
import { TableView } from "@/components/__atoms/Tables/TableView";
import { RegionsSelect } from "@/components/DynamicFormFields/Regions";
import { useGetProfilesQuery, useGetSearchCritsQuery } from "@/rtk/queries/joborder";
import dayjs from "dayjs";

const Requests = () => {
  const mockFilter = ["все"];
  const { data, error, isLoading } = useGetSearchCritsQuery();
  return (
    <DashBoardPageContainer header="Критерии" Icon={IconSettings}>
      <div className="form-bg-and-text mr-2 overflow-auto rounded p-8">
        <TableView
       filterState={{}}
        setFilterState={() => {}}
          header="Список критериев вакансий"
          addButton={{
            text: "Добавить набор критериев",
            link: "/dashboard/criterias/create",
          }}
          filters={[]
          /*  [
            {
              data: mockFilter,
              placeholder: "Все",
              label: "Подразделение:",
              fieldName: "job_profile.org_unit",
            },
            {
              data: mockFilter,
              placeholder: "Все",
              label: "Наименование:",
              fieldName: "job_profile.org_job_name",
            },
            {
              component: <RegionsSelect />
              ,fieldName: "job_profile.area"
            },
          ]*/
        }
          
          ths ={ [
            "Наименование",  // name
            "Должность",  // speciality
            "Район",  // area
            "Метро",  // metro
            "График",  // schedule
            "Релокация",  // relocation_type //Тип релокации
            "Опыт",  // experience
            "Пол",  // gender
            "Возраст",  // age
            "Зарплата",  // salary
            "Статус",  // job_search_status // поиска
            "Лимит",  // search_limit_target // поиска
            "Создано",  // created_by
            "Дата_создания"  // created_at
          ]}
          
          tds = {[
            "name",
            "speciality",
            "area",
            "metro",
            "schedule",
            "relocation_type",
            "experience",
            "gender",
            "age",
            "salary",
            "job_search_status",
            "search_limit_target",
            "created_by",
            { 
              value: "created_at", 
              formatter: (value: any) => dayjs(value).format("DD.MM.YYYY") 
            }
          ]}
          
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
