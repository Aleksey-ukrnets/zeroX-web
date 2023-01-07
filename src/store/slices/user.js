import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {},
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const userSelector = {
  getUser: (state) => state.user,
};

export const actions = userSlice.actions;

export default userSlice;