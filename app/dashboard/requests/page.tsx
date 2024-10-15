'use client';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { IconSettings } from '@tabler/icons-react';
import { RequestTable } from '@/components/Requests/RequestTable';
import { TableView } from '@/components/__atoms/Tables/TableView';
import { RegionsSelect } from '@/components/DynamicFormFields/Regions';
import dayjs from 'dayjs';
import { useGetOrdersQuery } from '@/rtk/queries/joborder';
import React from 'react';

const Requests = () => {
  const mockFilter = ["все"];
  const {data, error, isLoading} = useGetOrdersQuery();

 
// External filter state
const [filterState, setFilterState] = React.useState({
  "job_profile.org_unit": "",
  "criteria.speciality": "",
  name: "",
});

// Generate filter data
const filterOptions = React.useMemo(() => {
  if (!data) return {};
  
 // const getUniqueValues = (field:any) => [...new Set(data.map((item) => field.split('.').reduce((o, i) => o?.[i], item)))];
 const getUniqueValues = (field: string) => 
  [...new Set<string>(data.map((item:any) => field.split('.').reduce((o, i) => o?.[i], item)))];
 // "target": "es5", - more errors with this setting in tsconfig


  return {
    orgUnits: getUniqueValues("job_profile.org_unit").map((value) => ({
      value,
      label: value || "Не указано"
    })),
    specialities: getUniqueValues("criteria.speciality").map((value) => ({
      value,
      label: value || "Не указано"
    })),
    names: getUniqueValues("name").map((value) => ({
      value,
      label: value || "Не указано"
    })),
  };
}, [data]);





  return (
     <DashBoardPageContainer header="Заявки" Icon={IconSettings} >
      <div className="form-bg-and-text mr-2 overflow-auto rounded p-8">
        <TableView
        filterState={filterState} 
        setFilterState={setFilterState}
          header="Список заявок"
          addButton={{
            text: "Добавить заявку",
            link: "/dashboard/requests/create",
          }}
          filters={[
             {
              //data: mockFilter,
              data: filterOptions.orgUnits,
              placeholder: "Все",
              label: "Подразделение:",
              fieldName: "job_profile.org_unit",
            },
         /*   {
              data: filterOptions.specialities,
              placeholder: "Все",
              label: "Наименование:",
              fieldName: "criteria.speciality",
            },
            */
            {
              data: filterOptions.names,
              placeholder: "Все",
              label: "Название:",
              fieldName: "name",
            },
          /*  
           {
              component: <RegionsSelect />,
              fieldName: "name",
            },
             */
          ]}
          
           ths = {[
            "Наименование",  // name
            "Подразделение",  // subdivision
            "Профиль/позиция",  // profile
            "Ответственный",  // responsible
            "Должность",  // position
            "Дата",  // date
            "Номер",  // number
            "Вакансия",  // vacancy
            "Комментарий"  // comment
          ]}
          
          tds = {[
            "name",
            "job_profile.org_unit",  // Подразделение
            "job_profile.speciality",  // Профиль/позиция
            "responsible",  // Ответственный
            "position",  // Должность
            { 
              value: "date",  // Дата
              formatter: (value: any) => dayjs(value).format("DD.MM.YYYY")  // Formatted date
            },
            "number",  // Номер
            "criteria.speciality",  // Вакансия
            "description"  // Комментарий
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
