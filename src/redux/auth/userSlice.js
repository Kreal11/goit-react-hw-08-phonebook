const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { registerThunk, loginThunk, logoutThunk } = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = userSlice.reducer;
