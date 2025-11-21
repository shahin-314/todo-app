// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../redux/authSlice';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       dispatch(setUser(userCredential.user));
//       setError(null);
//     } catch (err) {
//       setError('Failed to log in. Please check your email and password.');
//     }
//   };

//   return (
//     <div>
//       <h3 className="text-center">Login</h3>
//       {error && <p className="text-danger text-center">{error}</p>}
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           <i className="bi bi-box-arrow-in-right"></i> Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;