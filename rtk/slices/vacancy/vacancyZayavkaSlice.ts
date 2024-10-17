// src/rtk/features/vacancy/vacancyApiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VacancyZayavka } from '@/types/Vacancy';

// Define the API service
export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/vacancies' }), // Adjust the base URL as needed
  endpoints: (builder) => ({
    createVacancy: builder.mutation<void, VacancyZayavka>({
      query: (vacancy) => ({
        url: '/create',
        method: 'POST',
        body: vacancy,
      }),
    }),
    // Additional endpoints can be added here (e.g., getVacancies, updateVacancy, etc.)
  }),
});

// Export the auto-generated hook for the `createVacancy` mutation
export const { useCreateVacancyMutation } = vacancyApi;

