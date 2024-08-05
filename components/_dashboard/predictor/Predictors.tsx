//http://192.168.0.230:8005/api/candidates/

'use client';
import React from 'react';
import { useGetCandidatesQuery } from '@/rtk/services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { useGetPredictorsQuery } from '@/rtk/services/predictorApi';
import { Predictor } from './Predictor';


export const PredictorsList: React.FC = () => {
  const { data: predictors, error, isLoading } = useGetPredictorsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <h3 className="dashboard-section-header">Predictors</h3>
      <div className="flex gap-4">
        {predictors?.result?.map((predictor:any) => (
            <Predictor name={predictor}/>
        ))}
      </div>
      
    </div>
  );
};


