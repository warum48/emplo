import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthFormState {
  username: string;
  password: string;
}

export const initialState: AuthFormState = {
  username: '',
  password: '',
};

const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setAuthFormValues: (state, action: PayloadAction<AuthFormState>) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
    resetAuthFormValues: (state) => {
      state.username = initialState.username;
      state.password = initialState.password;
    },
  },
});

export const { setAuthFormValues, resetAuthFormValues } = authFormSlice.actions;
export default authFormSlice.reducer;
