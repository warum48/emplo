import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './_customBaseQuery';
import { Candidate } from '@/types/Candidate';

export interface SearchRequest {
  specialty: string;
  area: string[];
}

export type SearchResponse ={
  // Define the shape of your response data here
  //data: string;
 // data: {
    found: number,
    items: any//any[];
 // }
} & { error: string }

export const api = createApi({
  reducerPath: 'api',
  /*baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
  }),*/
  //baseQuery: fetchBaseQuery({ baseUrl: apiPath }),
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getCandidates: builder.query<any[], void>({ //
      query: () => 'api/candidates/',
    }),
    getSpecialities: builder.query<any[], void>({ //
      query: () => '/api/candidates/specialities',
    }),
    getRegions: builder.query<any[], void>({ //
      query: () => '/api/candidates/regions',
    }),
    searchCandidates: builder.mutation<SearchResponse, SearchRequest>({
      query: (body) => ({
        url: 'api/candidates/search',
        method: 'POST',
        body,
      }),
    }),
    getCandidateById:builder.query<Candidate[], string | number>({
      query: (id) => `api/candidates?cand_id=${id}`,
    }),
    searchHHCandidates: builder.mutation<SearchResponse, SearchRequest>({
      query: (body) => ({
        url: 'api/hhru/search',
        method: 'POST',
        body,
      }),
    }),
    getHHCandidateById: builder.query<any, number>({
      query: (body) => ({
      url:  `api/hhru/hh_user_info`,
      method: 'POST',
      body,
      }),
    }),
  }),

  //http://192.168.0.230:8005/api/
});

export const { useGetCandidatesQuery,
   useSearchCandidatesMutation,
   useSearchHHCandidatesMutation  ,
   useGetCandidateByIdQuery,
   useGetSpecialitiesQuery,
   useGetRegionsQuery,
  //, useGetPostByIdQuery
 } = api;

// Define types for the data
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
