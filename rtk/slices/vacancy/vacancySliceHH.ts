import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of the vacancy state based on the form fields
export interface Vacancy {
  vacancyTitle: string;
  vacancyCode: string;
  specialization: string;
  jobLocation: string;
  hiringPlan: number;
  salaryFrom: number;
  salaryTo: number;
  beforeTax: boolean;
  jobAddress: string;
  experience: 'no_experience' | '1_to_3_years' | '3_to_6_years' | 'over_6_years';
  vacancyDescription: string;
  keySkills: string;
}

export interface VacanciesState {
  vacancies: Vacancy[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: VacanciesState = {
  vacancies: [],
  status: 'idle',
  error: null,
};

// Thunk for submitting the vacancy form
export const createVacancyHH = createAsyncThunk(
  'vacancies/createVacancy',
  async (vacancy: Vacancy, { rejectWithValue }) => {
    try {
      // Simulate a network request
      const response = await new Promise((resolve) => setTimeout(() => resolve(vacancy), 1000));
      return response as Vacancy;
    } catch (error) {
      return rejectWithValue('Failed to create vacancy');
    }
  }
);

// Vacancies slice
const vacancySliceHH = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    // Optional: Add other reducers for handling local state changes, if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(createVacancyHH.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createVacancyHH.fulfilled, (state, action: PayloadAction<Vacancy>) => {
        state.status = 'succeeded';
        state.vacancies.push(action.payload);
      })
      .addCase(createVacancyHH.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create vacancy';
      });
  },
});

export default vacancySliceHH.reducer;
