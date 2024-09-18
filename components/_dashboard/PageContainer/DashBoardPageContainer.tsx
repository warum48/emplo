import { RootState } from '@/rtk/store/store';
import { IconUser } from '@tabler/icons-react';
import { useSelector } from 'react-redux';

type TProps = {
  children?: React.ReactNode;
  header?: string;
  className?: string;
  hasLeftMenu?: boolean;
  Icon?: any;//React.ReactNode;
};

export const DashBoardPageContainer = ({ children, header, className, hasLeftMenu=false, Icon=IconUser }: TProps) => {
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);
  return (
    <div
    id ='dashboardPageContainerFull' 
      className={`relative min-h-full overflow-hidden  ${
        compactLayout
          ? hasLeftMenu
            ? 'dashboard-page-container-compact-nopadding'
            : 'dashboard-page-container-compact'
          : hasLeftMenu
            ? 'dashboard-page-container-nopadding'
            : 'dashboard-page-container'
      } 
        ${className}`}
        //
    >
      <div>
        <h2
          className={`flex gap-2 items-center ${compactLayout ? 'page-header-compact ' : 'page-header'} ${hasLeftMenu ? 'ml-14 md:ml-8 ' : 'ml-10 md:ml-0'}`}
        >
          <Icon/>
          {header}
        </h2>
      </div>

      <div className='z-0 absolute -bottom-[50px] -right-[70px] opacity-10 -rotate-[30deg]' >
      <Icon size={480} color={'#3b82f6'} />
      </div>
      
      <div className='z-10 relative min-h-full space-y-8' id='dashboardPageContainer'>{children}</div>
    </div>
  );
};

//ml-10 md:ml-0
