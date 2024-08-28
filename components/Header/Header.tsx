'use client'
import { useState } from 'react';
import { Burger, Drawer, Button, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { ColorSchemeButton } from './ColorSchemeButton/ColorSchemeButton';
import Link from 'next/link';
import { LogoHorizontal } from './Logos/LogoHorizontal';
import { UserButton } from './UserButton.tsx/UserButton';
//import Link from 'next/link';

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-customGray-950 shadow-sm z-50 h-[80px]">
      <div className="=container mx-auto flex items-center justify-between px-8 py-1 h-full">
        <div className="flex items-center">
          <Link href="/">
          <LogoHorizontal colorScheme={colorScheme} className="h-[45px] -ml-[58px] -mr-[28px]"/>
            {/*<span className="text-xl font-bold text-gray-700 dark:text-gray-200">sotrudnik.ru</span>*/}
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200">
          <a href="#" className="hover:text-blue-500">Найти работу</a>
          <a href="#" className="hover:text-blue-500">Ресурсы</a>
          <a href="#" className="hover:text-blue-500">Разместить вакансию</a>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
        <ColorSchemeButton />

          <Burger opened={drawerOpened} onClick={() => setDrawerOpened(!drawerOpened)} className="md:hidden" />
        {/*}  <Button onClick={() => toggleColorScheme()} variant="outline">
            {colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          </Button> 
          <ColorSchemeToggle />
          
           
          */}
         <UserButton/>
        </div>
      </div>
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Меню"
        padding="md"
        size="md"
        position="right"
      >
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Найти работу</a>
          <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Ресурсы</a>
          <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Разместить вакансию</a>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
