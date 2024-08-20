import { customBaseQuery } from '@/rtk/services/customBaseQuery';
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
        url: 'hhru/vacancies',
        method: 'POST',
        body: vacancy,
      }),
    }),
  }),
});

export const { useCreateVacancyMutation } = vacancyApi;
