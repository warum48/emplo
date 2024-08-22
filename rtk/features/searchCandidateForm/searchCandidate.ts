import { createSlice } from '@reduxjs/toolkit';

export const candidateSearchFormInitialState = {
  specialty: '',
  area: [],
  relocation_type: '',
  schedule: [], //["fullDay", "shift", "flexible", "remote", "flyInFlyOut"]
  skills: [],
  experience: '',//0,//'', //["noExperience", "between1And3", "between3And6", "moreThan6"]
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
