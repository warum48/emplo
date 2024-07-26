'use client';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import { LogoVertical } from '@/components/Header/Logos/LogoVertical';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ParticlesComponent } from '@/components/Particles/Particles';
import { ResultList } from '@/components/ResultList/ResultList';
import { useMantineColorScheme } from '@mantine/core';
import Head from 'next/head';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <>
      <Head>
        <title>sotrudnik.ru</title>
        <meta name="description" content="overseasjobs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashBoardHeader />

      <div className="min-w-64 
      bg-gradient-to-t
      from-gray-200 via-gray-100 to-gray-100 
      
       dark:bg-gradient-to-t
      dark:from-pink-950/25 dark:via-customGray-800/50   dark:to-customGray-900
      text-white h-screen fixed  "
      //from-pink-600/65 via-gray-100 to-gray-100 
     // bg-gray-100
      >
        <div className="w-full p-4 flex items-center justify-center">
        <a href="/"><LogoVertical colorScheme={colorScheme}/></a>
        </div>



        <nav className="mt-16 text-black dark:text-white">
          <ul>
            <li className="p-6 py-2 text-sm font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <a href="/dashboard">Профиль</a>
            </li>
            <li className="p-6 py-2 text-sm  font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <a href="/dashboard/search">Поиск</a>
            </li>
            <li className="p-6 py-2 text-sm  font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <a href="/dashboard/settings">Настройки</a>
            </li>
            <li className="p-6 py-2 text-sm  font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <a href="/dashboard/selected">Отбор</a>
            </li>
          </ul>
        </nav>
      </div>

     {/*} <div className="fixed left-0 bottom-0 h-1/2  overflow-hidden w-56 m-4">
        <ParticlesComponent/>
      </div>*/}
      
      {/*<div className="h-[70px] ml-64 p-0 bg-gray-100">
      
      </div>*/}
      <div className="flex-1 ml-64 p-0 
      bg-gradient-to-br
       from-gray-100 via-gray-100 to-customGray-200

       dark:bg-gradient-to-br  dark:from-customGray-900 dark:to-customGray-950

       
       "
       //dark:bg-customGray-900
       //bg-gray-100 
       >
        {/*} <header className="bg-white p-4 shadow">
          <h1 className="text-xl font-bold">Main Content</h1>
        </header>*/}
        {children}
        
      </div>
    </>
  );
};

export default DashboardLayout;
