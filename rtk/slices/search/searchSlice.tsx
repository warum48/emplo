// store/searchSlice.ts

import { SearchResponse } from '@/rtk/queries/candidates';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  results: SearchResponse;//any; //any;//
}

const initialState: SearchState = {
  results:  {
    found: 0,
    items: []
  }//[],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<SearchResponse>) {
      state.results = action.payload;
    },
    clearSearchResults(state) {
      state.results = initialState.results;
    },
  },
});

export const { setSearchResults, clearSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
