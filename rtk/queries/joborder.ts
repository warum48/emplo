import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './_customBaseQuery';
import { components } from '@/types';


export const joborder = createApi({
  reducerPath: 'joborder',
  tagTypes: ['JobOrders'],  // Define tag type
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getVacancies: builder.query<any, void>({ //
      query: () => '/api/joborder/vacancies/',
    }),
    getProfiles: builder.query<any, void>({ // components['schemas']['AppUserRegisterSchema']
      query: () => '/api/joborder/job_profiles/',
    }),
    getOrders: builder.query<any, void>({ // components['schemas']['AppUserRegisterSchema']
      query: () => '/api/joborder/',
      providesTags: ['JobOrders'], 
    }),
    getSearchCrits: builder.query<any, void>({ // components['schemas']['AppUserRegisterSchema']
      query: () => '/api/joborder/search_crits/',
    }),
    
    createProfile: builder.mutation<void, any>({
      query: (profile) => ({
        url: '/api/joborder/job_profiles/',
        method: 'POST',
        body: profile,
      }),
    }),
    createJobOrder: builder.mutation<void, any>({
      query: (order) => ({
        url: '/api/joborder/',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['JobOrders'],  // Invalidate the tag after mutation
    
    }),

    createCriteria: builder.mutation<void, any>({
      query: (crit) => ({
        url: '/api/joborder/search_crits/',
        method: 'POST',
        body: crit,
      }),
    }),


    /*------------list for forms and tables ------------ */
    
    getOrgs: builder.query<any, void>({ // components['schemas']['AppUserRegisterSchema']
      query: () => '/api/org/',
    }),



}),
});

export const { 
    useGetVacanciesQuery,
    useGetProfilesQuery,
    useGetOrdersQuery,
    useGetSearchCritsQuery,
    useLazyGetSearchCritsQuery,
    useCreateProfileMutation,
    useCreateCriteriaMutation,
    useCreateJobOrderMutation,
    useGetOrgsQuery,

 } = joborder;

