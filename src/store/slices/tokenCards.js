import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokenCards: [],
};
const tokenCardsSlice = createSlice({
  name: 'tokenCards',
  initialState: initialState,
  reducers: {
    setTokenCards: (state, action) => {
      state.tokenCards = action.payload;
    },
  },
});
export const tokenCardsSelector = {
    getTokenCards: (state) => state.tokenCards
}
export const actions = tokenCardsSlice.actions

export default tokenCardsSlice