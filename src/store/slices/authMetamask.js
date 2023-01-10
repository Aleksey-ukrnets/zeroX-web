import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authMetamask: [],
};

const authMetamask = createSlice({
  name: 'authMetamask',
  initialState: initialState,
  reducers: {
    setAuthMetamask: (state, action) => {
      state.authMetamask = action.payload;
    },
  },
});

export const authMetamaskSelector = {
  getAuthMetamask: (state) => state.authMetamask,
};

export const actions = authMetamask.actions;

export default authMetamask;
