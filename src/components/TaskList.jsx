import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTaskFromFirestore } from '../redux/taskSlice';
import axios from 'axios';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(fetchTasks(user.uid)); // Fetch tasks for the logged-in user
    }
  }, [user, dispatch]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Comment out the API call for now
        // const response = await axios.get(
        //   `https://api.openweathermap.org/data/2.5/weather?q=London&appid=92157381ca10394906a29dc73237cade&units=metric`
        // );
        // setWeather(response.data.main.temp);
        // setError(null);
        setError('Weather API is temporarily disabled due to activation delay');
      } catch (err) {
        setError('Failed to fetch weather data');
        setWeather(null);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {error && <p className="text-danger">{error}</p>}
      {weather && <p>Current Temperature in London: {weather}°C</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} - <strong>{task.priority}</strong>
            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => dispatch(deleteTaskFromFirestore(user.uid, task.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;