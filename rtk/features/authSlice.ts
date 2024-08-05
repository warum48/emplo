import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../services/authApi';
import { loginAndFetchUser } from '../thunks/LoginAndFetchUser';
//import { User } from './authApi';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAndFetchUser.pending, (state) => {
     // state.isLoading = true
     console.log('--thunk--')
    })
    builder.addCase(loginAndFetchUser.fulfilled, (state, action) => {
     // state.isLoading = false
     // state.contents = action.payload
     console.log('--thunk--')
    })
  }
});

export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;
