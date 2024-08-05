import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiPath,
    credentials: "same-origin", 
   // credentials:'include'
    
    }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'user/login',
        method: 'POST',
        
        headers:{
          Authorization: 'Basic cm9vdDpTbWlyVHJ1ZE1haQ=='
        },
        body: JSON.stringify(credentials),
      }),
    }),

    me: builder.query<any, void>({
      query: () => ({
        url: 'user/me',
        method: 'GET',
        //credentials: "same-origin", 
        credentials: 'include', // Ensure credentials are included
      }),
    }),
        //me: builder.query<any, void>({
    //  query: () => 'user/me',
    //}),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (newUser) => ({
        url: 'auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useMeQuery } = authApi;

// Define types for the requests and responses
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  //token: string;
  //user: User;
  msg:string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}


//SmirTrudMai
