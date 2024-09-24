'use client';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { IconSettings } from '@tabler/icons-react';
import { RequestTable } from '@/components/Requests/RequestTable';
import { ProfilesTable } from '@/components/_dashboard/profiles/ProfilesTable';

const Requests = () => {
  return (
     <DashBoardPageContainer header="Профили" Icon={IconSettings} >
      <div className="form-bg-and-text mr-2 p-8 rounded overflow-auto">
      <ProfilesTable/>
      </div>
    </DashBoardPageContainer>
  );
};

export default Requests;
