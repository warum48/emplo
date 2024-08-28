'use client';
import { LogoVertical } from '@/components/Header/Logos/LogoVertical';
import { useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import { RootState } from '@/rtk/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { LogoHorizontal } from '@/components/Header/Logos/LogoHorizontal';
import { NavbarNested } from '@/components/NavBar/NavBar';
import { LogoNoText } from '@/components/Header/Logos/LogoNoText';
import { STYLES } from '@/global/CONSTS';
import { setLeftSideMenuCollapsed } from '@/rtk/slices/UISettings';
import React from 'react';

export const LeftSideMenu = ({alwaysExpanded = false}: {alwaysExpanded?: boolean}) => {
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
  const leftSideMenuCollapsed = useSelector(
    (state: RootState) => state.UISettings.leftSideMenuCollapsed
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(alwaysExpanded){
    dispatch(setLeftSideMenuCollapsed(false))
    }
  },[])
  
  return (
      <div
        className={`
          bg-gradient-to-t
          from-pink-950/25 via-customGray-800/50   to-customGray-900
          dark:bg-gradient-to-t
          dark:from-pink-950/25 dark:via-customGray-800/50   dark:to-customGray-900
          text-white h-screen fixed  
          gradient-border
          z-10

          md:${(!leftSideMenuCollapsed || alwaysExpanded ) ?  STYLES.LEFT_SIDE_NAVBAR.navBarWidth_expanded : STYLES.LEFT_SIDE_NAVBAR.navBarWidth_collapsed }
          `}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[url('/images/menubg.png')] bg-cover dark:bg-none z-100"
        ></div>
        <div className="w-full py-4 px-8 flex items-center justify-center z-100 relative ">
          <Link href="/" className="w-full ">
            {compactLayout ? (
              (!leftSideMenuCollapsed || alwaysExpanded )   ?  <LogoHorizontal colorScheme={'dark'} className="h-[45px] w-full m-0.5 -ml-8" /> : <LogoNoText/> 
            ) : (
                (!leftSideMenuCollapsed || alwaysExpanded ) ? <LogoVertical
                colorScheme={'dark'}
              /> :  <LogoNoText/> 
            )}
          </Link>
        </div>
        <NavbarNested />
      </div>
  );
};


