import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './_customBaseQuery';
import { components } from '@/types';


export const joborder = createApi({
  reducerPath: 'joborder',

  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getVacancies: builder.query<any, void>({ //
      query: () => '/api/joborder/vacancies',
    }),
    getProfiles: builder.query<any, void>({ // components['schemas']['AppUserRegisterSchema']
      query: () => '/api/joborder/job_profiles',
    }),
    getOrders: builder.query<any, void>({ // components['schemas']['AppUserRegisterSchema']
      query: () => '/api/joborder',
    })


}),
});

export const { 
    useGetVacanciesQuery,
    useGetProfilesQuery,
    useGetOrdersQuery
 } = joborder;

