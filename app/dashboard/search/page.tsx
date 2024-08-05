'use client';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { PopularSearches } from '@/components/PopularSearches/PopularSearches';
import { ResultList } from '@/components/ResultList/ResultList';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>sotrudnik.ru</title>
        <meta name="description" content="overseasjobs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dashboard-page-container">
      <h2 className="page-header">Профиль</h2>
      <main className="mt-0 flex flex-row ">
        <div
          className="w-1/4 
            min-w-64
            =mt-16
            bg-white dark:text-white dark:bg-customGray-950/85
            "
          //my-16
          //grid grid-cols-4 gap-0
          //bg-gradient-to-b from-fuchsia-950/95 via-rose-500/95 to-rose-900/95
        >
          <JobSearchForm />
        </div>
        <div
          className="w-1/4 
            min-w-64
            =mt-16
            bg-white dark:text-white dark:bg-customGray-950/85
            "
          //my-16
          //grid grid-cols-4 gap-0
          //bg-gradient-to-b from-fuchsia-950/95 via-rose-500/95 to-rose-900/95
        >
          <PopularSearches onSearch={()=>console.log('popsearch')} gridCols={1}/>
        </div>
        <div className="flex-grow w-full flex-1 px-4 =py-16">
          <ResultList />
        </div>
        {/*  <div className="p-4 bg-white shadow rounded-lg">
            <p>Welcome to the dashboard!</p>
          </div>*/}
      </main>
      </div>
    </>
  );
};

export default Dashboard;
