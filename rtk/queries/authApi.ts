import { apiPath } from '@/global/CONSTS';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './_customBaseQuery';

//const [cookiesToken, setCookieToken] = useCookies(['mednekot']);

export const authApi = createApi({
  reducerPath: 'authApi',
  /*baseQuery: fetchBaseQuery({ baseUrl: apiPath,
    credentials: "same-origin", 
   // credentials:'include'
    }),*/
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      /*query: (credentials) => ({
        url: 'user/login',
        method: 'POST',
        
        headers:{
          Authorization: 'Basic cm9vdDpTbWlyVHJ1ZE1haQ=='
        },
        body: JSON.stringify(credentials),
      }),*/
      query: ({ username, password }) => ({
        url: `user/login?username=${username}&password=${password}`,
        method: 'POST', // Using GET method as per the endpoint requirement
      }),
    }),

    logout: builder.mutation<any, void>({ //<LogoutResponse, LogoutRequest>
      query: () => ({
        url: `user/logout`,
        method: 'POST', // Using GET method as per the endpoint requirement
      }),
    }),


    me: builder.query<any, void>({ //<UserDetails, void>
      query: () => 'user/me',
    }),

  /*
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (newUser) => ({
        url: 'auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),*/
  }),
});

export const { useLoginMutation, 
  useLogoutMutation,
  //useRegisterMutation, 
  useLazyMeQuery , useMeQuery} = authApi;

// Define types for the requests and responses
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  jwt_token: string;
  //user: User;
  msg:string;
}

/*
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
  */

export interface User {
  id: string;
  username: string;
 // email: string;
}


//SmirTrudMai
