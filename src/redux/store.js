// import { configureStore } from '@reduxjs/toolkit';
// import taskReducer from './taskSlice';
// import authReducer from './authSlice';

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer, // Tasks ka reducer
//     auth: authReducer, // Auth ka reducer
//   },
// });

// ##################################################################

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer   // sirf tasks ka reducer
  },
});