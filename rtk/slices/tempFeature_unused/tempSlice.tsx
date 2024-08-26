import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TempState {
  temporaryValue: string;
}

const initialState: TempState = {
  temporaryValue: '',
};

const tempSlice = createSlice({
  name: 'tempFeature',
  initialState,
  reducers: {
    setTemporaryValue: (state, action: PayloadAction<string>) => {
      state.temporaryValue = action.payload;
    },
  },
});

export const { setTemporaryValue } = tempSlice.actions;
export default tempSlice.reducer;
