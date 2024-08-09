import { useState } from 'react';
import { Burger, Drawer, Button, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { ColorSchemeButton } from './ColorSchemeButton/ColorSchemeButton';
import Link from 'next/link';
import { UserButton } from './UserButton.tsx/UserButton';
//import Link from 'next/link';

const DashBoardHeader = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <header className="fixed top-0 right-0 p-2 px-4 w-full flex  items-center justify-end
      z-50 shadow-xs
    bg-gradient-to-r
       from-gray-50/0 via-gray-50/0 to-white
       dark:bg-gradient-to-r  dark:from-customGray-900/0 dark:via-customGray-950/0 dark:to-customGray-950
    "
   // 
    >
      
        <div className="flex items-center space-x-2">
        <ColorSchemeButton />
          <Button onClick={() => setDrawerOpened(true)} className="md:hidden">Меню</Button>
        {/*}  <Button onClick={() => toggleColorScheme()} variant="outline">
            {colorScheme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          </Button> 
          <ColorSchemeToggle />
          
           
          */}
         <Link href="/">
          
          <UserButton/>
          </Link>
        
      </div>
      
    </header>
  );
};

export default DashBoardHeader;
