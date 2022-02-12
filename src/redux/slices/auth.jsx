import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      
    }
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const {setAuth} = userSlice.actions;
export default userSlice.reducer;