import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UISettingsState {
  leftSideMenuCollapsed: boolean;
  compactLayout: boolean;
}

const initialState: UISettingsState = {
    leftSideMenuCollapsed: false,
    compactLayout: true,
};

const UISettingsSlice = createSlice({
  name: 'UISettings',
  initialState,
  reducers: {
    setLeftSideMenuCollapsed: (state, action: PayloadAction<boolean>) => {
      state.leftSideMenuCollapsed = action.payload;
    },
    setCompactLayout: (state, action: PayloadAction<boolean>) => {
        state.compactLayout = action.payload;
      },
  },
});

export const { setLeftSideMenuCollapsed, setCompactLayout } = UISettingsSlice.actions;

export default UISettingsSlice.reducer;
