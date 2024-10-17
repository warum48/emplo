//http://192.168.0.230:8005/api/candidates/

'use client';
import React from 'react';
import { useGetCandidatesQuery } from '@/rtk/queries/candidates';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { useGetPredictorsQuery } from '@/rtk/queries/predictorApi';
import { Predictor } from './Predictor';


export const PredictorsList: React.FC = () => {
  const { data: predictors, error, isLoading } = useGetPredictorsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      
      <div className="flex gap-4">
        {predictors?.result?.map((predictor:any) => (
            <Predictor name={predictor}/>
        ))}
      </div>
      
    </div>
  );
};


