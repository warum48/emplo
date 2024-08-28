'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import Head from 'next/head';

const Selected = () => {
  return (
    <div className="flex justify-center space-x-4 p-4 mt-16">
      <ResultList />
    </div>
  );
};

export default Selected;
