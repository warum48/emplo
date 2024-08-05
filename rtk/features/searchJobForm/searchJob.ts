// jobSearchSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const jobSearchFormInitialState = {
  position: '',
  region: [],
  relocation: '',
  workSchedule: [],
  skills: '',
  experience: '',
  gender: '',
  ageFrom: 0,
  salaryUpTo: 0,
  jobSearchStatus: [],
  requiredResumes: 0,
};

const jobSearchSlice = createSlice({
  name: 'jobSearch',
  initialState:jobSearchFormInitialState,
  reducers: {
    updateJobSearchForm(state, action) {
      return { ...state, ...action.payload };
    },
    resetJobSearchForm(state) {
      return jobSearchFormInitialState;
    },
  },
});

export const { updateJobSearchForm, resetJobSearchForm } = jobSearchSlice.actions;
export default jobSearchSlice.reducer;
