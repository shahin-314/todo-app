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
      <nav className="navbar bg-primary text-white mb-4">
        <div className="container-fluid">
          <h1 className="navbar-brand mb-0 h1">Advanced To-Do App</h1>
          <span>Welcome!</span>
        </div>
      </nav>

      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <TaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;