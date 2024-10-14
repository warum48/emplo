import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    speciality: string, 
    area: string[], 
}

const initialState: SearchState =  {
        speciality: "", 
        area: [],
      }


const quickSearchSlice = createSlice({
  name: 'quickSearch',
  initialState,
  reducers: {
    setQuickSearchValues(state, action: PayloadAction<SearchState>) {
      console.log('action.payload', action.payload); // This works and logs updated values
      state.speciality = action.payload.speciality;
      state.area = action.payload.area;
    },
    clearQuickSearchValues(state) {
      state.speciality = initialState.speciality;
      state.area = initialState.area;
    },
  },
});

export const { setQuickSearchValues, clearQuickSearchValues } = quickSearchSlice.actions;

export default quickSearchSlice.reducer;
