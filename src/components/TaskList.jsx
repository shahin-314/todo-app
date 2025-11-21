// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTasks, deleteTaskFromFirestore } from '../redux/taskSlice';
// import axios from 'axios';

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const user = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();
//   const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState(''); // To store the city name
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchTasks(user.uid)); // Fetch tasks for the logged-in user
//     }
//   }, [user, dispatch]);

//   useEffect(() => {
//     const fetchWeather = async (lat, lon) => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92157381ca10394906a29dc73237cade&units=metric`
//         );
//         setWeather(response.data.main.temp);
//         setCity(response.data.name); // Store the city name
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch weather data');
//         setWeather(null);
//         setCity('');
//       }
//     };

//     // Get user's location using Geolocation API
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           fetchWeather(latitude, longitude); // Fetch weather using user's coordinates
//         },
//         (err) => {
//           setError('Unable to get your location. Showing weather for London instead.');
//           // Fallback to London if geolocation fails
//           fetchWeather(51.5085, -0.1257); // London's coordinates
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by your browser. Showing weather for London instead.');
//       fetchWeather(51.5085, -0.1257); // London's coordinates
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Task List</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {weather && city && (
//         <p className="text-muted">
//           Current Temperature in {city}: {weather}°C
//         </p>
//       )}
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className={task.priority.toLowerCase()}>
//             <span>{task.text}</span>
//             <div>
//               <strong>{task.priority}</strong>
//               <button
//                 className="btn btn-danger ms-2"
//                 onClick={() => dispatch(deleteTaskFromFirestore(user.uid, task.id))}
//               >
//                 <i className="bi bi-trash"></i> Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;

//################################################

// src/components/TaskList.jsx

// src/components/TaskList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTaskFromFirestore } from '../redux/taskSlice';
import axios from 'axios';

const TaskList = () => {
  const dispatch = useDispatch();
  
  // Yeh Redux se tasks lega (sabse latest)
  const tasks = useSelector((state) => state.tasks?.tasks || []);
  
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  
  const MOCK_USER_ID = 'demo-user-2025';

  // Tasks load karne ke liye
  useEffect(() => {
    dispatch(fetchTasks(MOCK_USER_ID));
  }, [dispatch, MOCK_USER_ID]);

  // Weather fetch karne ke liye
  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92157381ca10394906a29dc73237cade&units=metric`
        );
        setWeather(res.data.main.temp);
        setCity(res.data.name);
      } catch {
        setError('Weather unavailable');
        setWeather(null);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.coords.longitude),
        () => fetchWeather(51.5074, -0.1278) // London fallback
      );
    } else {
      fetchWeather(51.5074, -0.1278);
    }
  }, []);

  const handleDelete = (taskId) => {
    dispatch(deleteTaskFromFirestore(MOCK_USER_ID, taskId));
    // Redux khud update ho jayega, extra setTasks ki zarurat nahi
  };

  return (
    <div>
      <h2>Task List</h2>
      {error && <p className="text-danger">{error}</p>}
      {weather !== null && (
        <p className="text-muted">Current Temp in {city}: {weather}°C</p>
      )}

      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul className="list-group mt-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.priority === 'High'
                  ? 'list-group-item-danger'
                  : task.priority === 'Medium'
                  ? 'list-group-item-warning'
                  : 'list-group-item-success'
              }`}
            >
              <span>{task.text}</span>
              <div>
                <span className="badge bg-primary me-2">{task.priority}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;