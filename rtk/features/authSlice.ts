import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../services/authApi';
import { loginAndFetchUser } from '../thunks/LoginAndFetchUser';
//import { User } from './authApi';

interface AuthState {
  isAuthenticated: boolean;
  user: User  | null;
  token: string | null;
}

interface TokenState {
  //isAuthenticated: boolean;
 // user: User | string | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<Omit<AuthState, 'user'>>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      //state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setAuthToken: (state, action: PayloadAction<TokenState>) => {
      state.isAuthenticated = true;//action.payload.isAuthenticated;
      //state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUser: (state, action: PayloadAction<User>) => {
     // state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload;
     // state.token = action.payload.token;
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

export const { setAuthState, setAuthToken, setUser } = authSlice.actions;
export default authSlice.reducer;
