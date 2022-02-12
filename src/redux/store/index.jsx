import { configureStore } from '@reduxjs/toolkit';
// reducers
import auth from '../slices/auth';

export const store = configureStore({
  reducer: {
    auth
  }
})