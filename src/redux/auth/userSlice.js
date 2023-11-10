const { createSlice } = require('@reduxjs/toolkit');
const { registerThunk } = require('./operations');

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
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = userSlice.reducer;
