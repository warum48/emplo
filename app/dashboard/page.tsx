'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import Head from 'next/head';

const Dashboard = () => {
  return (
    
    <div className="dashboard-page-container">
      <div>
      <h2 className="page-header">Профиль</h2></div>
    <div className="flex justify-center space-x-4">
      <div className="bg-pink-500/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-lg">Открытых вакансий</div>
        <div className="text-4xl">0</div>
        <div>Всего 0</div>
      </div>
      <div className="bg-purple-500/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-lg">Кандидатов</div>
        <div className="text-4xl">0</div>
        <div>Новых 0</div>
      </div>
      <div className="bg-pink-600/80 text-white text-center rounded-lg shadow-lg p-4 flex-1 flex flex-col items-center justify-center min-h-[300px]">
        <div className="text-lg">Предстоящие собеседования:</div>
        <div>Сегодня - 0</div>
        <div>Завтра - 0</div>
        <div>На текущей неделе - 0</div>
        <div>Всего - 0</div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
