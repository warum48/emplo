import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/rtk/store/store"; // Adjust the path to your store file
import { apiPath } from "@/global/CONSTS";


//!!don't remove this - this is basic query without status
export const customBaseQuery = fetchBaseQuery({
  baseUrl: apiPath,//'http://192.168.0.230:8005/api/',
  credentials: 'include', // Include credentials (cookies) in requests
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log('--token', token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});


/*
//!!don't remove this - I try to output status in the response

export const customBaseQuery = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  const rawResult = await fetchBaseQuery({
    baseUrl: apiPath, // Adjust to your API base URL
    credentials: "include", // Include credentials (cookies) in requests
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      console.log("--token", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (rawResult.error) {
    return { error: rawResult.error, meta: { status: rawResult.meta?.response?.status } };
  }

  return { data: rawResult.data, meta: { status: rawResult.meta?.response?.status } };
//  return { data: {  meta: { status: rawResult.meta?.response?.status }}, ...rawResult.data };
};
*/
