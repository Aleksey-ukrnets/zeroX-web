import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tokenDetailedInfo: [],
};

const tokenDetailedInfo = createSlice({
  name: 'tokenDetailedInfo',
  initialState: initialState,
  reducers: {
    setTokenDetailedInfo: (state, action) => {
      state.tokenDetailedInfo = action.payload;
    },
  },
});

export const tokenDetailedInfoSelector = {
  getTokenDetailedInfo: (state) => state.tokenDetailedInfo,
};

export const actions = tokenDetailedInfo.actions;

export default tokenDetailedInfo;
