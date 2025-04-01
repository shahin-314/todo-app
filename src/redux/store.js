import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer, // Tasks ka reducer
    auth: authReducer, // Auth ka reducer
  },
});