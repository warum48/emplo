import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResumeFormState {
  fullName: string;
  jobTitle: string;
  experience: string;
  previousJobTitle: string;
  previousJobDates: string;
  story: string;
  education: string;
  skills: string;
  contactInfo: string;
}

const initialState: ResumeFormState = {
  fullName: '',
  jobTitle: '',
  experience: '',
  previousJobTitle: '',
  previousJobDates: '',
  story: '',
  education: '',
  skills: '',
  contactInfo: '',
};

const resumeFormSlice = createSlice({
  name: 'resumeForm',
  initialState,
  reducers: {
    updateResumeForm: (state, action: PayloadAction<Partial<ResumeFormState>>) => {
      return { ...state, ...action.payload };
    },
    resetResumeForm: () => initialState,
  },
});

export const { updateResumeForm, resetResumeForm } = resumeFormSlice.actions;
export default resumeFormSlice.reducer;
