import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, IntroductionState } from '../types/types';

const initialState: IntroductionState = {
  imgUrl: '',
  description: '',
};

const introductionSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {
    updateIntroduction: (state, action: PayloadAction<IntroductionState>) => {
      state.imgUrl = action.payload.imgUrl;
      state.description = action.payload.description;
    },
  },
});

export const { updateIntroduction } = introductionSlice.actions;

export const selectIntroduction = (state: RootState) => state.introduction;

export default introductionSlice.reducer;
