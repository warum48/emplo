'use client';
import { NewCriteriaForm } from '@/components/_dashboard/criterias/NewCriteriaForm';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import NewVacancyForm from '@/components/_dashboard/vacancies/create/HHVacancyForm';
import { BasicSingleColumnBg } from '@/components/BgColors/BasicSingleColumnBg';
//import VacanciesList from '@/components/_dashboard/predictor/vacancies/list/VacanciesList/VacanciesList';

import { IconRobot } from '@tabler/icons-react';

const Page = () => {
  return (
    <DashBoardPageContainer header="Создать вакансию" Icon={IconRobot}>
      <div className="flex flex-col items-center w-full ">
        

        <BasicSingleColumnBg />

        <div className="dashboard-single-col-form">
          <NewCriteriaForm />

        </div>
      </div>
    </DashBoardPageContainer>
  );
};

export default Page;
