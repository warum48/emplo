'use client';
import { BgColors } from '@/components/_dashboard/predictor/BgColors.tsx/BgColors';
import { DashBoardPageContainer } from '@/components/_dashboard/PageContainer/DashBoardPageContainer';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
//import { PopularSearches } from '@/components/PopularSearches/PopularSearches';
import { ResultList } from '@/components/ResultList/ResultList';
import { RootState } from '@/rtk/store/store';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { PopularSearches } from '@/components/Search/PopularSearches';
import { JSONViewer } from '@/components/__atoms/JSONViewer/JSONViewr';
import { DrawerWithOpener } from '@/components/_dashboard/PageContainer/DrawerWithOpener';
import { IconList } from '@tabler/icons-react';
import { SearchPage } from '@/components/Search/Page/SearchPage';

const Dashboard = () => {
  const results = useSelector((state: RootState) => state.searchAI.results);
  const hasCandidates = React.useMemo(
    () => !!results?.items && results?.items.length > 0,
    [results?.items]
  );

  return (
    <SearchPage hasCandidates={hasCandidates} results={results} searchType='external'/>
  );
};

export default Dashboard;
