import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const predictorApi = createApi({
  reducerPath: 'predictorApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiPath }),
  endpoints: (builder) => ({
    getPredictors: builder.query<TPredictorResponse, void>({
        query: () => 'predictor/models',
      }),
    getXY: builder.query<string & { status:string}, void>({
        query: () => 'predictor/xy',
      }),  
  }),
});

export const { useGetPredictorsQuery, useGetXYQuery } = predictorApi;

type TPredictorResponse = {
  result: string[]
}

//type TXY:string

// Define types for the requests and responses

