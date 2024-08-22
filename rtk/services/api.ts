import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './customBaseQuery';

export interface SearchRequest {
  specialty: string;
  area: string[];
}

export interface SearchResponse {
  // Define the shape of your response data here
  //data: string;
 // data: {
    found: number,
    candidates: any//any[];
 // }
}

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
      query: () => 'candidates/',
    }),
    searchCandidates: builder.mutation<SearchResponse, SearchRequest>({
      query: (body) => ({
        url: 'candidates/search',
        method: 'POST',
        body,
      }),
    }),
    searchHHCandidates: builder.mutation<SearchResponse, SearchRequest>({
      query: (body) => ({
        url: 'hhru/search',
        method: 'POST',
        body,
      }),
    }),
    getHHCandidateById: builder.query<any, number>({
      query: (body) => ({
      url:  `hhru/hh_user_info`,
      method: 'POST',
      body,
      }),
    }),
  }),

  //http://192.168.0.230:8005/api/
});

export const { useGetCandidatesQuery,
   useSearchCandidatesMutation,
   useSearchHHCandidatesMutation  
  //, useGetPostByIdQuery
 } = api;

// Define types for the data
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
