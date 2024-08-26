'use client';
import DataDisplay from '@/components/__atoms/DataDisplay/DataDisplay';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { NewPasswordInput } from '@/components/_dashboard/profile/NewPasswordInput';
import ProfileForm from '@/components/_dashboard/profile/ProfileForm';
//import DataDisplay from '@/components/_dashboard/profile/HHMe';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import { useGetMeQuery } from '@/rtk/queries/vacancy';
//import { useGetMeQuery } from '@/rtk/slices/vacancy/vacancySliceHHReal';
import Head from 'next/head';

const Dashboard = () => {
  const { data: data_hhme, error: error_hhme, isLoading: isLoading_hhme } = useGetMeQuery();
  return (
    <div className="dashboard-page-container">
      <div>
        <h2 className="page-header">Профиль</h2>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="bg-pink-500/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center pt-12 =justify-center min-h-[260px]">
          <div className="dashboard-section-header ">Открытых вакансий</div>
          <div className="text-4xl mb-4">0</div>
          <div>Всего 0</div>
        </div>
        <div className="bg-purple-500/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center pt-12 =justify-center min-h-[260px]">
          <div className="dashboard-section-header ">Кандидатов</div>
          <div className="text-4xl mb-4">0</div>
          <div>Новых 0</div>
        </div>
        <div className="bg-pink-600/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center pt-12 =justify-center min-h-[260px]">
          <div className="dashboard-section-header ">Предстоящие собеседования:</div>
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
          <div className="col-span-2 p-4 form-bg-and-text"> <ProfileForm/> </div>
          <div className="col-span-1 p-4 form-bg-and-text"><NewPasswordInput/></div>
        </div>
        </div><div>
        <h3 className="dashboard-section-header ">hh/me:</h3>
        <DataDisplay data={data_hhme} />
      </div>
    </div>
  );
};

export default Dashboard;
