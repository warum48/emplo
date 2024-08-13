'use client';
import React, { createContext, useState, useEffect } from 'react';
//import { useSearchParams } from 'next/navigation';

interface IContext {
  //isDemo: boolean;
  isDebug: boolean;

}

export const GlobalContext = createContext({} as IContext);

type Props = {
  children?: React.ReactNode;
};

//--------------component-----------

export const GlobalProvider = ({ children }: Props) => {
  const [isDebug, setIsDebug] = useState<boolean>(false);

  //const searchParams = useSearchParams();
  const _searchDebug = null; //searchParams.get('debug');

  useEffect(() => {
    if(_searchDebug) {
      setIsDebug(true);
    }
  }, []);

  const value = {
    isDebug,

  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
