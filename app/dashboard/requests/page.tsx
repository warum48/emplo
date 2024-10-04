'use client';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { IconSettings } from '@tabler/icons-react';
import { RequestTable } from '@/components/Requests/RequestTable';
import { TableView } from '@/components/__atoms/Tables/TableView';
import { RegionsSelect } from '@/components/DynamicFormFields/Regions';
import dayjs from 'dayjs';
import { useGetOrdersQuery } from '@/rtk/queries/joborder';

const Requests = () => {
  const mockFilter = ["все"];
  const {data, error, isLoading} = useGetOrdersQuery();
  return (
     <DashBoardPageContainer header="Заявки" Icon={IconSettings} >
      <div className="form-bg-and-text mr-2 overflow-auto rounded p-8">
        <TableView
          header="Список критериев вакансий"
          addButton={{
            text: "Добавить набор критериев",
            link: "/dashboard/requests/create",
          }}
          filters={[
            {
              data: mockFilter,
              placeholder: "Все",
              label: "Подразделение:",
            },
            {
              data: mockFilter,
              placeholder: "Все",
              label: "Наименование:",
            },
            {
              component: <RegionsSelect />
            },
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
