// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import TaskInput from './components/TaskInput';
// import TaskList from './components/TaskList';
// import Login from './components/Login';
// import { setUser, clearUser } from './redux/authSlice';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from './firebase';
// import './styles/App.css';

// function App() {
//   const user = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) dispatch(setUser(currentUser));
//       else dispatch(clearUser());
//     });
//     return () => unsubscribe();
//   }, [dispatch]);

//   const handleLogout = async () => {
//     await signOut(auth);
//     dispatch(clearUser());
//   };

//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <h1 className="navbar-title">Advanced To-Do App</h1>
//         {user && (
//           <div className="navbar-user">
//             <span>Welcome, {user.email}</span>
//             <button className="btn btn-logout" onClick={handleLogout}>
//               <i className="bi bi-box-arrow-right"></i> Logout
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <div className="content-container">
//         {!user ? (
//           <div className="card login-card">
//             <Login />
//           </div>
//         ) : (
//           <div className="card">
//             <TaskInput />
//             <TaskList />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


//#############################################################

// src/App.jsx
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Advanced To-Do App</h1>
        <div className="navbar-user">
          <span>Welcome!</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content-container">
        <div className="card">
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;