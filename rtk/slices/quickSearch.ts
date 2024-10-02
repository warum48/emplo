import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    specialty: string, 
    area: string[], 
}

const initialState: SearchState =  {
        specialty: "", 
        area: [],
      }


const quickSearchSlice = createSlice({
  name: 'quickSearch',
  initialState,
  reducers: {
    setQuickSearchValues(state, action: PayloadAction<SearchState>) {
      console.log('action.payload', action.payload); // This works and logs updated values
      state.specialty = action.payload.specialty;
      state.area = action.payload.area;
    },
    clearQuickSearchValues(state) {
      state.specialty = initialState.specialty;
      state.area = initialState.area;
    },
  },
});

export const { setQuickSearchValues, clearQuickSearchValues } = quickSearchSlice.actions;

export default quickSearchSlice.reducer;
