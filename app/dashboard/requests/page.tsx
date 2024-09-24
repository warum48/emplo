'use client';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { IconSettings } from '@tabler/icons-react';
import { RequestTable } from '@/components/Requests/RequestTable';

const Requests = () => {
  return (
     <DashBoardPageContainer header="Заявки" Icon={IconSettings} >
      <div className="form-bg-and-text mr-2 p-8 rounded overflow-auto">
      <RequestTable/>
      </div>
    </DashBoardPageContainer>
  );
};

export default Requests;
