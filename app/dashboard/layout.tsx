'use client';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import { LogoVertical } from '@/components/Header/Logos/LogoVertical';
import { Burger, Drawer, useMantineColorScheme } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { RootState } from '@/rtk/store/store';
import { useSelector } from 'react-redux';
import { LogoHorizontal } from '@/components/Header/Logos/LogoHorizontal';
import { NavbarNested } from '@/components/NavBar/NavBar';
import { LogoNoText } from '@/components/Header/Logos/LogoNoText';
import { STYLES } from '@/global/CONSTS';
import { LeftSideMenu } from '@/components/_dashboard/LeftSideMenu';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
  const leftSideMenuCollapsed = useSelector(
    (state: RootState) => state.UISettings.leftSideMenuCollapsed
  );
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  return (
    <>
      <Head>
        <title>sotrudnik.ru</title>
        <meta name="description" content="overseasjobs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Burger opened={drawerOpened} onClick={() => setDrawerOpened(!drawerOpened)} className="md:hidden z-30 fixed ml-2 mt-[22px]" />
      <DashBoardHeader />

      <div className=" hidden md:block">
        <LeftSideMenu/>
      </div>
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        withCloseButton={false}
      //  title="Меню"
      //  padding="md"
      //  size="md"
        size={256}
        padding="0"
        position="left"
        className="md:hidden block relative"
      >
        <LeftSideMenu alwaysExpanded={true}/>
      </Drawer>

      <div
        className={` 
        ${leftSideMenuCollapsed ? STYLES.LEFT_SIDE_NAVBAR.contentMarginLeft_collapsed : STYLES.LEFT_SIDE_NAVBAR.contentMarginLeft_expanded}   
        h-full flex-1  p-0 transition-all
        bg-gradient-to-br
        from-gray-100/100 via-gray-100 to-customGray-200
        relative
        dark:bg-gradient-to-br  dark:from-customGray-900 dark:to-customGray-950
        overflow-x-hidden
        `}
      >
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
