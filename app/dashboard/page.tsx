'use client';
import DataDisplay from '@/components/__atoms/DataDisplay/DataDisplay';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { BgColors } from '@/components/_dashboard/predictor/BgColors.tsx/BgColors';
import { NewPasswordInput } from '@/components/_dashboard/profile/NewPasswordInput';
import ProfileForm from '@/components/_dashboard/profile/ProfileForm';
//import DataDisplay from '@/components/_dashboard/profile/HHMe';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import { useGetMeQuery } from '@/rtk/queries/vacancy';
//import { useGetMeQuery } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import Head from 'next/head';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';

const Dashboard = () => {
  const { data: data_hhme, error: error_hhme, isLoading: isLoading_hhme } = useGetMeQuery();
  return (
    <>
      <div className="absolute -left-[100px] -top-[20px]  w-full h-full ">
        <div
          className="absolute scale-y-100 scale-x-150 left-0 top-0 h-[1000px] w-2/3
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-300/30 via-cyan-300/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-indigo-800/30 dark:via-cyan-800/0 dark:to-blue-600/0
          "
          //from-blue-200/50
        ></div>
      </div>

      <div className="absolute right-[0px] top-0 w-full h-full ">
        <div
          className="absolute scale-y-120 scale-x-150 -right-64 top-0  h-[1000px] w-2/3
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-200/30 via-purple-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-500/10 dark:via-pink-700/0 dark:to-pink-600/0
          "
        ></div>
      </div>

    {/*}  <div className="dashboard-page-container relative">
        <div>
          <h2 className="page-header">Профиль</h2>
        </div>*/}
        <DashBoardPageContainer header="Профиль">
        <div className="flex justify-center space-x-4">
          <div className="bg-pink-500/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center pt-12 =justify-center min-h-[260px]">
            <div className="card-white-header">Открытых вакансий</div>
            <div className="text-4xl mb-4">0</div>
            <div>Всего 0</div>
          </div>
          <div className="bg-purple-500/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center pt-12 =justify-center min-h-[260px]">
            <div className="card-white-header ">Кандидатов</div>
            <div className="text-4xl mb-4">0</div>
            <div>Новых 0</div>
          </div>
          <div className="bg-pink-600/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center pt-12 =justify-center min-h-[260px]">
            <div className="card-white-header">Предстоящие собеседования:</div>
            <div className="text-left mr-16">
              <div>Сегодня - 0</div>
              <div>Завтра - 0</div>
              <div>На текущей неделе - 0</div>
              <div>Всего - 0</div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-2 px-8 py-4 form-bg-and-text">
              <h3 className="form-header  mb-2">Мои данные</h3>
              <ProfileForm />{' '}
            </div>
            <div className="col-span-1 px-8 py-4  form-bg-and-text">
              <h3 className="form-header mb-2">Поменять пароль</h3>
              <NewPasswordInput />
            </div>
          </div>
        </div>
        <div>
          <h3 className="dashboard-section-header ">hh/me:</h3>
          <DataDisplay data={data_hhme} />
        </div>
        </DashBoardPageContainer>
      {/*</div>*/}
    </>
  );
};

export default Dashboard;
