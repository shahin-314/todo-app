import { createSlice } from '@reduxjs/toolkit';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;

// Async actions to interact with Firestore
export const fetchTasks = (userId) => async (dispatch) => {
  try {
    const tasksRef = collection(db, `users/${userId}/tasks`);
    const snapshot = await getDocs(tasksRef);
    const tasksList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch(setTasks(tasksList));
  } catch (err) {
    console.error('Failed to fetch tasks:', err);
  }
};

export const addTaskToFirestore = (userId, task) => async (dispatch) => {
  try {
    const tasksRef = collection(db, `users/${userId}/tasks`);
    await addDoc(tasksRef, task);
    dispatch(fetchTasks(userId)); // Refresh tasks
  } catch (err) {
    console.error('Failed to add task:', err);
  }
};

export const deleteTaskFromFirestore = (userId, taskId) => async (dispatch) => {
  try {
    const taskRef = doc(db, `users/${userId}/tasks`, taskId);
    await deleteDoc(taskRef);
    dispatch(fetchTasks(userId)); // Refresh tasks
  } catch (err) {
    console.error('Failed to delete task:', err);
  }
};