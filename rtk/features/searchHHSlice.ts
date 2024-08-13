// store/searchSlice.ts

import { SearchResponse } from '@/rtk/services/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchHHState {
  results: SearchResponse;//any; //any;//
}

const initialState: SearchHHState = {
  results:  {
    found: 0,
    candidates: []
  }//[],
};

const searchHHSlice = createSlice({
  name: 'searchHH',
  initialState,
  reducers: {
    setSearchHHResults(state, action: PayloadAction<SearchResponse>) {
      state.results = action.payload;
    },
    clearSearchHHResults(state) {
      state.results = initialState.results;
    },
  },
});

export const { setSearchHHResults, clearSearchHHResults } = searchHHSlice.actions;

export default searchHHSlice.reducer;
