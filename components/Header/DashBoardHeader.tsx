import React, { useState, useEffect } from 'react';
import { ColorSchemeButton } from './ColorSchemeButton/ColorSchemeButton';
import { UserButton } from './UserButton.tsx/UserButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { Box, Text } from '@mantine/core';

const DashBoardHeader = () => {
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //const dbPageCont = document.getElementById('dashboardPageContainer');
    //const dbPageContFull = document.getElementById('dashboardPageContainerFull');
    const dbPageContFullLayout = document.getElementById('dashboardPageContainerFullLayout');
    //console.log('dbPageCont ', dbPageCont );
    const handleScroll = () => {
      //const scrollTop = dbPageCont?.scrollTop ?? 0;
      //const scrollTopFull = dbPageContFull?.scrollTop ?? 0;
      const scrollTopFullLayout = dbPageContFullLayout?.scrollTop ?? 0;
      //console.log('scrollTop', scrollTop);
      if (window.scrollY > 50 
       // || scrollTop > 50 || scrollTopFull > 50 
        || scrollTopFullLayout > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    //dbPageCont?.addEventListener('scroll', handleScroll);
    //dbPageContFull?.addEventListener('scroll', handleScroll);
    dbPageContFullLayout?.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 p-2 px-2 md:px-2 w-full flex items-center justify-end h-[80px] gap-0
      z-30
      ${compactLayout ? '' : ' bg-gradient-to-r        from-gray-50/0 via-gray-50/0 to-white        dark:bg-gradient-to-r  dark:from-customGray-900/0 dark:via-customGray-950/0 dark:to-customGray-950'}
    `}
    >
      <div className={`text-right mr-4 hidden lg:block transition-opacity duration-300 ${scrolled ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
      <Text size="xs" c="dimmed">
            <b>Новые сообщения:</b> <span className="text-red-500 font-bold">{7}</span>
          </Text>
          <Text size="xs" c="dimmed">
          <b>Новые ответы:</b>  <span className="text-red-500 font-bold">{12} </span>
          </Text>
          <Text size="xs" c="dimmed">
          <b>Ближайшее событие:</b> 10.10.2025
          </Text>
      </div>
      <div
        className={`flex items-center space-x-0 sx:space-x-2 transition-shadow duration-300 ${
          compactLayout ? 'p-1 md:px-4 bg-white dark:bg-customGray-950 rounded-2xl' : ''
        } ${scrolled ? 'shadow-xl' : 'shadow'}`}
      >
        <div className="hidden sm:block">
          <ColorSchemeButton />
        </div>
        <UserButton />
      </div>
    </header>
  );
};

export default DashBoardHeader;
