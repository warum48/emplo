'use client';
import { BgColors } from '@/components/_dashboard/predictor/BgColors.tsx/BgColors';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { PopularSearches } from '@/components/Search/PopularSearches';
import { ResultList } from '@/components/ResultList/ResultList';
import React from 'react';
import { DrawerWithOpener } from '@/components/_dashboard/PageContainer/DrawerWithOpener';
import { IconList } from '@tabler/icons-react';
import { SearchType } from '@/types/local/SearchType';

type TProps = {
    hasCandidates: boolean;
    results: any;
    searchType?: SearchType
};

export const SearchPage = ({hasCandidates, results, searchType='internal'} :TProps) => {
  return (
    <DashBoardPageContainer header="Поиск" hasLeftMenu={hasCandidates}>
      {!hasCandidates && <BgColors />}
      <main
        className={` ${hasCandidates ? 'flex-col lg:flex-row ' : 'flex-col items-center '} " mt-0  ^ml-4 lg:ml-0 flex  justify-center  relative  h-full ^z-10  flex-grow gap-x-4 gap-y-4`}
      >
        {hasCandidates && (
            
        <>
       {/* */} <div
          className="absolute scale-y-100 scale-x-150 left-0 bottom-0 h-[1000px] w-2/3 -z-1
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-300/30 via-cyan-300/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-blue-800/30 dark:via-cyan-800/0 dark:to-blue-600/0
          "
        ></div> 
        <div
        //fuchsia dar:pink
          className="absolute scale-y-120 scale-x-150 -right-64 top-[250px]  h-[500px] w-2/3 -z-0
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-200/30 via-purple-600/0 to-blue-600/0
          dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-indigo-500/10 dark:via-pink-700/0 dark:to-pink-600/0
          "
        ></div>
        </>
    )}
        <div
          className={`
            ${hasCandidates ? ' w-[300px] hidden lg:block' : 'w-full max-w-screen-lg'}
            ^min-w-64
            form-bg-and-text 
            shadow 
            ^mb-8
            z-10
            `}
        >
          {!hasCandidates && (
            <h3 className="dashboard-section-header ml-8 mt-4">Расширенный поиск</h3>
          )}
          <JobSearchForm gridCols={hasCandidates ? 1 : 3} searchType={searchType}/>
        </div>
        {hasCandidates &&
        <DrawerWithOpener
          Icon={<IconList stroke={2} />}
          MainComponent={<JobSearchForm gridCols={hasCandidates ? 1 : 3} />}
          title="Расширенный поиск"
          className='px-4'
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
          <div className="flex-grow w-full flex-1 px-4 ^py-16">
            <ResultList results={results} />
          </div>
        )}
      </main>
    </DashBoardPageContainer>
  );
};


