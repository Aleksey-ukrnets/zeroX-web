import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokenCards: [],
  // tokenCardsAnalyzed: [],
  tokenCardsLaunchpad: [],
  tokenCardsAlgo: [],
};
const tokenCardsSlice = createSlice({
  name: 'tokenCards',
  initialState: initialState,
  reducers: {
    setTokenCards: (state, action) => {
      state.tokenCards = action.payload;
    },
    // setTokenCardsAnalyzed: (state, action) => {
    //   state.tokenCardsAnalyzed = action.payload;
    // },
    setTokenCardsLaunchpad: (state, action) => {
      state.tokenCardsLaunchpad = action.payload;
    },
    setTokenCardsAlgo: (state, action) => {
      state.tokenCardsAlgo = action.payload;
    },
  },
});
export const tokenCardsSelector = {
  getTokenCards: (state) => state.tokenCards,
};

export const actions = tokenCardsSlice.actions;

export default tokenCardsSlice;
