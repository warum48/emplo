import React, { useState, useEffect } from 'react';
import { ColorSchemeButton } from './ColorSchemeButton/ColorSchemeButton';
import { UserButton } from './UserButton.tsx/UserButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';

const DashBoardHeader = () => {
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 p-2 px-2 md:px-2 w-full flex items-center justify-end h-[80px] gap-0
      z-30
      ${compactLayout ? '' : ' bg-gradient-to-r        from-gray-50/0 via-gray-50/0 to-white        dark:bg-gradient-to-r  dark:from-customGray-900/0 dark:via-customGray-950/0 dark:to-customGray-950'}
    `}
    >
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
