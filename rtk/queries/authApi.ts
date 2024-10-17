import { apiPath } from "@/global/CONSTS";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "./_customBaseQuery";

import { components } from "@/types";

//const [cookiesToken, setCookieToken] = useCookies(['mednekot']);

export const authApi = createApi({
  reducerPath: "authApi",
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
        method: "POST", // Using GET method as per the endpoint requirement
      }),
    }),

    logout: builder.mutation<any, void>({
      //<LogoutResponse, LogoutRequest>
      query: () => ({
        url: `user/logout`,
        method: "POST", // Using GET method as per the endpoint requirement
      }),
    }),

    me: builder.query<any, void>({
      //<UserDetails, void>
      query: () => "user/me",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // Wait for the query to be completed
          const { data } = await queryFulfilled;

          // Handle success, perform any side effects, e.g., dispatch an action
          console.log("Query successful:", data);
          // dispatch(yourReduxAction(data));
        } catch (error) {
          // Handle error
          console.error("Query failed:", error);
          // Perform any side effect in case of error, e.g., dispatch an error action
          // dispatch(yourErrorHandlingAction(error));
        }
      },
    }),

    register: builder.mutation<
      any,
      components["schemas"]["AppUserRegisterSchema"]
    >({
      //<RegisterResponse, RegisterRequest> //  RegisterRequest
      query: (newUser) => ({
        url: "user/register", // /
        method: "POST",
        body: newUser,
      }),
    }),

    changePassword: builder.mutation<
      any,
      components["schemas"]["AppUserChangePasswordSchema"]
    >({
      //<RegisterResponse, RegisterRequest> //  RegisterRequest
      query: (newUser) => ({
        url: "user/change_password", // /
        method: "POST",
        body: newUser,
      }),
    }),

    checkHHConnect: builder.query<any, void>({
      // components['schemas']['AppUserRegisterSchema']
      query: () => "/api/hhru/connect",
    }),

    hhConnect: builder.mutation<any, void>({
      //<LogoutResponse, LogoutRequest>
      query: () => ({
        url: `/api/hhru/connect`,
        method: "POST", // Using GET method as per the endpoint requirement
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useLazyMeQuery,
  useMeQuery,
  useCheckHHConnectQuery,
  useHhConnectMutation,
  useChangePasswordMutation,
} = authApi;

// Define types for the requests and responses
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  jwt_token: string;
  //user: User;
  msg: string;
}

export type RegisterRequest = {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
};
/*
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
