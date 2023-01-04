import { configureStore } from '@reduxjs/toolkit';
import twitterCardsSlice from './slices/twitterCards';
import tokenCardsSlice from './slices/tokenCards';
import tokenDetailedInfo from './slices/tokenDetailedInfo';

export default configureStore({
  reducer: {
    twitterCards: twitterCardsSlice.reducer,
    tokenCards: tokenCardsSlice.reducer,
    tokenDetailedInfo: tokenDetailedInfo.reducer,
  },
  devTools: true,
});
