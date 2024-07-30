//import { GlobalContext } from '@/global/context/ContextGlobal';
import { GlobalContext } from '@/global/context/ContextGlobal';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';

export const Debugger = ({ children }: { children: React.ReactNode }) => {
  const {isDebug} = React.useContext(GlobalContext);
  const searchParams = useSearchParams();
  const _searchMCenter = searchParams.get('mcenter');

  return <> {isDebug && <div style={{backgroundColor:'#66666633'}}>{children}</div>}</>;
};
