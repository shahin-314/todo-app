import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTaskFromFirestore } from '../redux/taskSlice';
import axios from 'axios';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(''); // To store the city name
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(fetchTasks(user.uid)); // Fetch tasks for the logged-in user
    }
  }, [user, dispatch]);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92157381ca10394906a29dc73237cade&units=metric`
        );
        setWeather(response.data.main.temp);
        setCity(response.data.name); // Store the city name
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data');
        setWeather(null);
        setCity('');
      }
    };

    // Get user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude); // Fetch weather using user's coordinates
        },
        (err) => {
          setError('Unable to get your location. Showing weather for London instead.');
          // Fallback to London if geolocation fails
          fetchWeather(51.5085, -0.1257); // London's coordinates
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Showing weather for London instead.');
      fetchWeather(51.5085, -0.1257); // London's coordinates
    }
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {error && <p className="text-danger">{error}</p>}
      {weather && city && (
        <p className="text-muted">
          Current Temperature in {city}: {weather}°C
        </p>
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.priority.toLowerCase()}>
            <span>{task.text}</span>
            <div>
              <strong>{task.priority}</strong>
              <button
                className="btn btn-danger ms-2"
                onClick={() => dispatch(deleteTaskFromFirestore(user.uid, task.id))}
              >
                <i className="bi bi-trash"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;