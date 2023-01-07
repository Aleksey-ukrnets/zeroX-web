import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topMarketInfo: [],
};

const topMarketInfo = createSlice({
  name: 'topMarketInfo',
  initialState: initialState,
  reducers: {
    setTopMarketInfo: (state, action) => {
      state.topMarketInfo = action.payload;
    },
  },
});

export const topMarketInfoSelector = {
  getTopMarketInfoData: (state) => state.topMarketInfo,
};

export const actions = topMarketInfo.actions;

export default topMarketInfo;
