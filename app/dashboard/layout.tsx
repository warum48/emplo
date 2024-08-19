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
import { IconSettings, IconUser, IconCommand } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { RootState } from '@/rtk/store/store';
import { useSelector } from 'react-redux';
import { LogoHorizontal } from '@/components/Header/Logos/LogoHorizontal';
import { NavbarNested } from '@/components/NavBar/NavBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
    const leftSideMenuCollapsed = useSelector((state: RootState) => state.UISettings.leftSideMenuCollapsed);
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
      

      bg-customGray-900
      bg-gradient-to-t
      from-pink-950/25 via-customGray-800/50   to-customGray-900
      
      dark:bg-gradient-to-t
      dark:from-pink-950/25 dark:via-customGray-800/50   dark:to-customGray-900
      text-white h-screen fixed  
      gradient-border
      z-10
      "
     // from-gray-100 via-gray-50 to-gray-50/100 

      //from-pink-600/65 via-gray-100 to-gray-100 
     // bg-gray-100
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[url('/images/menubg.png')] bg-cover dark:bg-none z-100"  
        // dark:bg-none
        ></div>
        <div className="w-full py-4 px-8 flex items-center justify-center z-100 relative">
        <Link href="/" className="w-full">{ compactLayout ? <LogoHorizontal colorScheme={'dark'} className="h-[45px] w-full m-0.5 -ml-8"/> : <LogoVertical colorScheme={
          //colorScheme
          'dark'
          }/>}</Link> 
        </div>


{/*
        <nav className={` ${compactLayout ?"mt-2" : "mt-5"} text-black text-white  dark:text-white flex flex-col gap-2 z-10 relative`}>        
            <div className="dashboard-menu-item">
              <Link href="/dashboard" className="flex gap-4 items-center"><IconUser/> Профиль</Link>
            </div>
            <div className="dashboard-menu-item">
              <Link href="/dashboard/search" className="flex gap-4 items-center"><IconSearch/>Поиск</Link>
            </div>
            <div className="dashboard-menu-item">
              <Link href="/dashboard/settings"  className="flex gap-4 items-center"><IconSettings/>Настройки</Link>
            </div>
            <div className="dashboard-menu-item">
              <Link href="/dashboard/resume"  className="flex gap-4 items-center"><IconCommand/>Создать резюме</Link>
            </div>
            <div className="dashboard-menu-item">
              <Link href="/dashboard/vacancies"  className="flex gap-4 items-center"><IconCommand/>Вакансии</Link>
            </div>
            <div className="dashboard-menu-item">
              <Link href="/dashboard/vacancies/create"  className="flex gap-4 items-center"><IconCommand/>Создать вакансию</Link>
            </div>
        </nav> */}



       <NavbarNested/>
      </div>

     {/*} <div className="fixed left-0 bottom-0 h-1/2  overflow-hidden w-56 m-4">
        <ParticlesComponent/>
      </div>*/}
      
      {/*<div className="h-[70px] ml-64 p-0 bg-gray-100">
      
      </div>*/}
      <div className=" h-full flex-1 ml-64 p-0 
      bg-gradient-to-br
       from-gray-100/100 via-gray-100 to-customGray-200
relative
       dark:bg-gradient-to-br  dark:from-customGray-900 dark:to-customGray-950
      overflow-x-hidden

       
       "
       //
       //dark:bg-customGray-900
       //bg-gray-100 
       >
     {/*   <div className="absolute right-0 top-0 w-1/4 h-[40vh] ">
      <div className="-mt-96 -mr-96 absolute scale-x-150 left-0 top-0 right-0 bottom-0 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-200/50 via-pink-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-pink-800/30 dark:via-pink-800/0 dark:to-blue-600/0
          "></div>
          </div>*/}
         
        {/*} <header className="bg-white p-4 shadow">
          <h1 className="text-xl font-bold">Main Content</h1>
        </header>*/}
        {children}
        
      </div>
    </>
  );
};

export default DashboardLayout;
