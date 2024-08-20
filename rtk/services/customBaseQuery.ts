import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/rtk/store/store'; // Adjust the path to your store file
import { apiPath } from '@/global/CONSTS';

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
