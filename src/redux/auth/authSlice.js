const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefresh: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        return (state = { ...initialState, isRefresh: false });
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
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

export const authReducer = authSlice.reducer;
