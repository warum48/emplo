import { customBaseQuery } from '@/rtk/queries/_customBaseQuery';
import { NewVacancyFormValues } from '@/types/HHVacancy';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import type { NewVacancyFormValues } from '@/types/formTypes';

export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  //baseQuery: fetchBaseQuery({ baseUrl: '/api/vacancies' }),
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    createVacancy: builder.mutation<void, NewVacancyFormValues>({
      query: (vacancy) => ({
        url: 'api/hhru/vacancies',
        method: 'POST',
        body: vacancy,
      }),
    }),
    getVacancies: builder.query<any, void>({ //<UserDetails, void>
      query: () => 'api/hhru/vacancies',
    }),
    getMe: builder.query<any, void>({ //<UserDetails, void>
      query: () => 'api/hhru/me',
    }),
    getVacancyById:builder.query<any, string>({
      query: (id) => `api/hhru/vacancies/${id}`,
    }),
    getVacancyNegotiationsById:builder.query<any, string>({
      query: (id) => `api/hhru/vacancies/negotiations/${id}`,
    }),
  }),
});

export const { useCreateVacancyMutation , useGetVacanciesQuery, useGetMeQuery, useGetVacancyByIdQuery, useGetVacancyNegotiationsByIdQuery} = vacancyApi;
