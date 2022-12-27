import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  twitterCards: [],
};
const twitterCardsSlice = createSlice({
  name: 'twitterCards',
  initialState: initialState,
  reducers: {
    setTwitterCards: (state, action) => {
      state.twitterCards = action.payload;
    },
  },
});
export const twitterCardsSelector = {
  getTwitterCards: (state) => state.twitterCards,
};

export const actions = twitterCardsSlice.actions;

export default twitterCardsSlice;
