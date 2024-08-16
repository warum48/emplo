import { useState } from 'react';
import { Burger, Drawer, Button, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { ColorSchemeButton } from './ColorSchemeButton/ColorSchemeButton';
import Link from 'next/link';
import { UserButton } from './UserButton.tsx/UserButton';
import { UserButtonDashboard } from './UserButton.tsx/UserButtonDashboard_unused';
import { useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
//import Link from 'next/link';

const DashBoardHeader = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);

  return (
    <header className={`fixed top-0 right-0 p-2 px-4 w-full flex  items-center justify-end h-[80px]
      z-50 shadow-xs
      ${compactLayout ? '' : ' bg-gradient-to-r        from-gray-50/0 via-gray-50/0 to-white        dark:bg-gradient-to-r  dark:from-customGray-900/0 dark:via-customGray-950/0 dark:to-customGray-950'}
    `}
   
   // 
    >
      
        <div className={`flex items-center space-x-2 shadow ${compactLayout ? 'p-1 px-4 bg-white dark:bg-customGray-950 rounded-2xl' : ''} `}>
        <ColorSchemeButton />
          <Button onClick={() => setDrawerOpened(true)} className="md:hidden">Меню</Button>
        
          
          <UserButton/>
          
        
      </div>
      
    </header>
  );
};

export default DashBoardHeader;
