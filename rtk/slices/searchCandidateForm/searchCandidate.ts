import { createSlice } from '@reduxjs/toolkit';

type CandidateSearchForm = {
  speciality: string;
  area: string[];
  relocation_type: string;
  //schedule: string[]; //["fullDay", "shift", "flexible", "remote", "flyInFlyOut"]
  skills: string[];
  experience: number;//string; //["noExperience", "between1And3", "between3And6", "moreThan6"]
  gender: string;
  age: number;
  salary: number;
  job_search_status: string[];
  limit: number | null;
};

/*
{
    speciality: string;
    area: never[];
    relocation_type: string;
    skills: never[];
    experience: number;
    gender: string;
    age: number;
    salary: number;
    job_search_status: never[];
    limit: null;
}*/

export const candidateSearchFormInitialState:CandidateSearchForm = {
  speciality: '',
  area: [],
  relocation_type: '',
  //schedule: [], //["fullDay", "shift", "flexible", "remote", "flyInFlyOut"]
  skills: [],
  experience: 0,//'',//0,//'', //["noExperience", "between1And3", "between3And6", "moreThan6"]
  gender: '',
  age: 0,
  salary: 0,
  job_search_status: [],
  limit: null,
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
