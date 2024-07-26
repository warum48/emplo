import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface SearchRequest {
  specialty: string;
  area: string;
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
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.0.230:8005/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({ //
      query: () => 'candidates/',
    }),
    searchCandidates: builder.mutation<SearchResponse, SearchRequest>({
      query: (body) => ({
        url: 'candidates/search',
        method: 'POST',
        body,
      }),
    }),
    /*getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),*/
  }),

  //http://192.168.0.230:8005/api/
});

export const { useGetPostsQuery,
   useSearchCandidatesMutation 
  //, useGetPostByIdQuery
 } = api;

// Define types for the data
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
