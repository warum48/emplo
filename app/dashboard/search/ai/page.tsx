'use client';
import { BgColors } from '@/components/_dashboard/predictor/BgColors.tsx/BgColors';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { PopularSearches } from '@/components/PopularSearches/PopularSearches';
import { ResultList } from '@/components/ResultList/ResultList';
import { RootState } from '@/rtk/store/store';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const results = useSelector((state: RootState) => state.search.results);

  const hasCandidates = React.useMemo(() => !!results?.candidates && results?.candidates.length > 0, [results?.candidates]);

  return (
    <>
      <Head>
        <title>sotrudnik.ru</title>
        <meta name="description" content="overseasjobs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashBoardPageContainer header="Поиск" hasLeftMenu={(results?.candidates && results?.candidates.length > 0)}>
   {/*   <div className="text-sm text-gray-700 dark:text-white my-2">Панель управления / Поиск</div>  
     <h2 className="page-header"
      //page-header-sm
      >Профиль</h2>*/}
      {!hasCandidates &&
      <BgColors/>
      }
      <main className={` ${hasCandidates ? "flex-row " : "flex-col items-center "} " mt-0 flex  justify-center  z-10  flex-grow`}>
       
        <div
          className={`
            ${ (results?.candidates && results?.candidates.length > 0) ? " w-1/4 " : "w-full max-w-screen-lg"  }
           
            
            min-w-64
            bg-gray-300 dark:text-white dark:bg-customGray-950/85
            bg-white shadow mb-8
            
            `}
            //flex justify-center 
          //my-16
          //grid grid-cols-4 gap-0
          //bg-gradient-to-b from-fuchsia-950/95 via-rose-500/95 to-rose-900/95
        >
          {!hasCandidates && <h3 className="dashboard-section-header ml-8 mt-4">Расширенный поиск</h3>}
          <JobSearchForm searchType='outer' gridCols={(results?.candidates && results?.candidates.length > 0) ? 1 : 3}/>
            
          {/*<div className="px-8">
          <PopularSearches onSearch={()=>console.log('popsearch')} gridCols={1} />
          </div>*/}
        </div>
        {!hasCandidates && 
        <div className='w-full max-w-screen-lg bg-gray-300 dark:text-white dark:bg-customGray-950/85
            bg-white shadow mb-8 px-8 pt-4 pb-8'>
              <h3 className="dashboard-section-header pb-4">История поиска</h3>
        <PopularSearches onSearch={()=>console.log('popsearch')} gridCols={3} />
        </div>}
       {/*} <div
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
        </div>*/}
        {(results?.candidates && results?.candidates.length > 0)  && 
        <div className="flex-grow w-full flex-1 px-4 =py-16">
          <ResultList />
        </div>
}
        {/*  <div className="p-4 bg-white shadow rounded-lg">
            <p>Welcome to the dashboard!</p>
          </div>*/}
      </main>
      </DashBoardPageContainer>
    </>
  );
};

export default Dashboard;
