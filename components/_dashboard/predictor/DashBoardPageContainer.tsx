import { RootState } from '@/rtk/store/store';
import { IconUser } from '@tabler/icons-react';
import { useSelector } from 'react-redux';

type TProps = {
  children?: React.ReactNode;
  header?: string;
  className?: string;
  hasLeftMenu?: boolean;
};

export const DashBoardPageContainer = ({ children, header, className, hasLeftMenu }: TProps) => {
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
  return (
    <div
      className={` ${compactLayout ? 
        (hasLeftMenu ? 'dashboard-page-container-compact-nopadding' : 'dashboard-page-container-compact') 
        : hasLeftMenu ? 'dashboard-page-container-nopadding' : 'dashboard-page-container'} 
        ${className}`}
    >
      <div>
       <h2 className={`flex gap-2 items-center ${compactLayout ? 'page-header-compact' : 'page-header'} ${hasLeftMenu ? 'ml-8' : ''}`}><IconUser/>{header}</h2>
      </div>
      

      {children}

      
    </div>
  );
};
