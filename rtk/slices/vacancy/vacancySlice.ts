import { Vacancy } from '@/types/Vacancy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VacancyState {
  vacancies: Vacancy[];
}

const initialState: VacancyState = {
  vacancies: [],
};

const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    createVacancy: (state, action: PayloadAction<Vacancy>) => {
      state.vacancies.push(action.payload);
    },
    // Additional reducers can be added here for updating or deleting vacancies
  },
});

export const { createVacancy } = vacancySlice.actions;

export default vacancySlice.reducer;
