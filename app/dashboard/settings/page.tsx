'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import { XY } from '@/components/_dashboard/predictor/XY';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/JobSearchForm/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import Head from 'next/head';

const Settings = () => {
  return (
    <div className="dashboard-page-container">
      <div>
     <h2 className="page-header">Настройки</h2></div>
      <PredictorsList/>
      <div>
     <h2 className="page-header">XY</h2></div>
     <XY/>
    </div>
  );
};

export default Settings;
