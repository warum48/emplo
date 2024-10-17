import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../queries/authApi';
import { setAuthState } from '../slices/authSlice';
//import { setAuthState } from './authSlice';
//import { authApi } from './authApi';

export const loginAndFetchUser = createAsyncThunk(
  'auth/loginAndFetchUser',
  async (credentials: { username: string; password: string }, { dispatch }) => {
    const loginResponse = await dispatch(authApi.endpoints.login.initiate(credentials));
    if ('data' in loginResponse) {
        console.log('thunk-login');
      const userResponse = await dispatch(authApi.endpoints.me.initiate());
      if ('data' in userResponse) {
        console.log('thunk-me');
        dispatch(setAuthState({ isAuthenticated: true, 
         // user: userResponse.data
        token: userResponse.data.token
        }));
      }
    }
  }
);
