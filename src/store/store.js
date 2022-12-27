import { configureStore } from '@reduxjs/toolkit';
import twitterCardsSlice from './slices/twitterCards';
import tokenCardsSlice from './slices/tokenCards';
export default configureStore({
  reducer: {
    twitterCards: twitterCardsSlice.reducer,
    tokenCards: tokenCardsSlice.reducer,
  },
  devTools: true,
});