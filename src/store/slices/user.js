import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {},
  deposit: []
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserDeposit: (state, action) => {
      state.deposit = action.payload;
    },
  },
});
export const userSelector = {
  getUser: (state) => state.user,
};

export const actions = userSlice.actions;

export default userSlice;