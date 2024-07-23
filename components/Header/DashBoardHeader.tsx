import { useState } from 'react';
import { Burger, Drawer, Button, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { ColorSchemeButton } from './ColorSchemeButton/ColorSchemeButton';
import Link from 'next/link';
//import Link from 'next/link';

const DashBoardHeader = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <header className="fixed top-0 right-0 p-2 px-4
    "
   // bg-white dark:bg-customGray-950 shadow-md z-50
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
          <Button variant="filled">Выход</Button>
          </Link>
        
      </div>
      
    </header>
  );
};

export default DashBoardHeader;
