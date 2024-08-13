//http://192.168.0.230:8005/api/candidates/

'use client';
import React from 'react';
import { useGetCandidatesQuery } from '@/rtk/services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/rtk/store/store';
import { useGetPredictorsQuery, useGetXYQuery } from '@/rtk/services/predictorApi';
import { Predictor } from './Predictor';


export const XY: React.FC = () => {
  const { data: xy, error, isLoading } = useGetXYQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
        <div>
    <div>Error occurred</div>
    <div>{JSON.stringify(error)}</div>
    </div>
);
  }

  return (
    <div>
      <h3 className="dashboard-section-header">XY</h3>
      <div className="flex gap-4">
        {/*predictors?.result?.map((predictor:any) => (
            <Predictor name={predictor}/>
        ))*/}
        {xy}
      </div>
      
    </div>
  );
};


/*
function useXYQuery(): { data: any; error: any; isLoading: any; } {
    throw new Error('Function not implemented.');
}*/

