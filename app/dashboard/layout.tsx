'use client';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import { LogoVertical } from '@/components/Header/Logos/LogoVertical';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ParticlesComponent } from '@/components/Particles/Particles';
import { ResultList } from '@/components/ResultList/ResultList';
import { useMantineColorScheme } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { IconSettings } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';

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
      from-gray-300 via-gray-200 to-gray-200 
      
       dark:bg-gradient-to-t
      dark:from-pink-950/25 dark:via-customGray-800/50   dark:to-customGray-900
      text-white h-screen fixed  
      gradient-border
      "
      //from-pink-600/65 via-gray-100 to-gray-100 
     // bg-gray-100
      >
        <div className="w-full py-4 px-8 flex items-center justify-center">
        <a href="/"><LogoVertical colorScheme={colorScheme}/></a>
        </div>



        <nav className="mt-10 text-black dark:text-white flex flex-col gap-2 ">
         
            <div className="px-8 py-2 text-sm font-semibold dark:hover:bg-gray-700 hover:bg-pink-200">
              <Link href="/dashboard" className="flex gap-4 items-center"><IconSettings/> Профиль</Link>
            </div>
            <div className="px-8 py-2 text-sm  font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <Link href="/dashboard/search" className="flex gap-4 items-center"><IconSearch/>Поиск</Link>
            </div>
            <div className="px-8 py-2 text-sm  font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <Link href="/dashboard/settings">Настройки</Link>
            </div>
            <div className="px-8 py-2 text-sm  font-semibold dark:hover:bg-gray-700 hover:bg-violet-200">
              <Link href="/dashboard/selected">Отбор</Link>
            </div>
          
        </nav>
      </div>

     {/*} <div className="fixed left-0 bottom-0 h-1/2  overflow-hidden w-56 m-4">
        <ParticlesComponent/>
      </div>*/}
      
      {/*<div className="h-[70px] ml-64 p-0 bg-gray-100">
      
      </div>*/}
      <div className="flex-1 ml-64 p-0 
      bg-gradient-to-br
       from-gray-200 via-gray-200 to-customGray-300

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
