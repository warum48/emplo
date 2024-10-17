'use client';
import { BgColors } from '@/components/_dashboard/predictor/BgColors.tsx/BgColors';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { PopularSearches } from '@/components/Search/PopularSearches';
import { ResultList } from '@/components/ResultList/ResultList';
import { RootState } from '@/rtk/store/store';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { DrawerWithOpener } from '@/components/_dashboard/PageContainer/DrawerWithOpener';
import { IconList } from '@tabler/icons-react';
import { SearchPage } from '@/components/Search/Page/SearchPage';


const Dashboard = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const results = useSelector((state: RootState) => state.search.results);

  const hasCandidates = React.useMemo(
    () => !!results?.items && results?.items.length > 0,
    [results?.items]
  );

  return (
    <SearchPage hasCandidates={hasCandidates} results={results} searchType='internal'/>
  );
};

export default Dashboard;

/*
<DashBoardPageContainer header="Поиск" hasLeftMenu={hasCandidates}>
      {!hasCandidates && <BgColors />}
      <main
        className={` ${hasCandidates ? 'flex-col lg:flex-row ' : 'flex-col items-center '} " mt-0  ml-4 lg:ml-0 flex  justify-center  z-10  flex-grow gap-4 lg:gap-8`}
      >
        <div
          className={`
            ${hasCandidates ? ' w-1/4 hidden lg:block' : 'w-full max-w-screen-lg'}
            min-w-64
            form-bg-and-text 
            shadow 
            ^mb-8
            
            `}
        >
          {!hasCandidates && (
            <h3 className="dashboard-section-header ml-8 mt-4">Расширенный поиск</h3>
          )}
          <JobSearchForm gridCols={hasCandidates ? 1 : 3} />
        </div>
        {hasCandidates &&
        <DrawerWithOpener
          Icon={<IconList stroke={2} />}
          MainComponent={<JobSearchForm gridCols={hasCandidates ? 1 : 3} />}
          title="Расширенный поиск"
        />
}
        {!hasCandidates && (
          <div
            className="w-full max-w-screen-lg 
              form-bg-and-text  shadow ^mb-8 px-8 pt-4 pb-8"
          >
            <h3 className="dashboard-section-header pb-4">История поиска</h3>
            <PopularSearches onSearch={() => console.log('popsearch')} gridCols={3} />
          </div>
        )}

        {hasCandidates && (
          <div className="flex-grow w-full flex-1 pr-4 ^py-16">
            <ResultList results={results} />
          </div>
        )}
      </main>
    </DashBoardPageContainer>
    */
