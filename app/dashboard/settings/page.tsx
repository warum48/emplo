'use client';
import AuthorizationForm from '@/components/_auth/AuthorizationForm';
import { DashBoardPageContainer } from '@/components/_dashboard/predictor/DashBoardPageContainer';
import { PredictorsList } from '@/components/_dashboard/predictor/Predictors';
import { XY } from '@/components/_dashboard/predictor/XY';
import DashBoardHeader from '@/components/Header/DashBoardHeader';
import Header from '@/components/Header/Header';
import JobSearchForm from '@/components/Search/JobSearchForm';
import { ResultList } from '@/components/ResultList/ResultList';
import { setCompactLayout } from '@/rtk/slices/UISettings';
import { RootState } from '@/rtk/store/store';
import { Switch } from '@mantine/core';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

const Settings = () => {
  const dispatch = useDispatch();
  const compactLayout = useSelector((state: RootState) => state.UISettings.compactLayout);

  return (
     <DashBoardPageContainer header="Настройки">
      <div>
      <h3 className="dashboard-section-header">Модель ИИ</h3>
      <PredictorsList/>
      </div>
      {/*}
      <div>
     <h2 className="page-header">XY</h2></div>
     <XY/>*/}
     <div>
     <h3 className="dashboard-section-header">Настройки UI</h3>
     <Switch
     label={"Компактный вид"}
      checked={compactLayout}
      onChange={(event) => dispatch(setCompactLayout(event.currentTarget.checked))}
    />
    </div>
    </DashBoardPageContainer>
  );
};

export default Settings;
