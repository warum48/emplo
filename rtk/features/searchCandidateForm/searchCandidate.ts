import { createSlice } from '@reduxjs/toolkit';

export const candidateSearchFormInitialState = {
  specialty: '',
  area: [],
  relocation_type: '',
 // schedule: [],
  skills: [],
  experience: 0,//'',
  gender: '',
  age: 0,
  salary: 0,
  job_search_status: [],
  limit: 0,
};

const candidateSearchSlice = createSlice({
  name: 'candidateSearch',
  initialState: candidateSearchFormInitialState,
  reducers: {
    updateJobSearchForm(state, action) {
      return { ...state, ...action.payload };
    },
    resetJobSearchForm(state) {
      return candidateSearchFormInitialState;
    },
  },
});

export const { updateJobSearchForm, resetJobSearchForm } = candidateSearchSlice.actions;
export default candidateSearchSlice.reducer;
