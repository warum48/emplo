'use client';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import { IconSettings } from '@tabler/icons-react';
import { RequestTable } from '@/components/Requests/RequestTable';
import { useGetCandidatesQuery } from '@/rtk/queries/candidates';
import { ResultList } from '@/components/ResultList/ResultList';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';

const Requests = () => {
    const { data, error, isLoading } = useGetCandidatesQuery();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred</div>;
  return (
     <DashBoardPageContainer header="Все кандидаты" Icon={IconSettings} >
      
       
      <ResultList candidates={data} />
      <JSONViewer data={data} />
    </DashBoardPageContainer>
  );
};

export default Requests;
