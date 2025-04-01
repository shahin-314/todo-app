import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import { setUser, clearUser } from './redux/authSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import './styles/App.css';

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
  };

  return (
    <div className="container mt-4">
      <h1>Advanced To-Do App</h1>
      {!user ? (
        <Login />
      ) : (
        <div>
          <p>Welcome, {user.email}</p>
          <button className="btn btn-danger mb-3" onClick={handleLogout}>
            Logout
          </button>
          <TaskInput />
          <TaskList />
        </div>
      )}
    </div>
  );
}

export default App;