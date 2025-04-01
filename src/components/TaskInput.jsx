import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToFirestore } from '../redux/taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && user) {
      dispatch(addTaskToFirestore(user.uid, { text: task, priority }));
      setTask('');
      setPriority('Medium');
    }
  };

  return (
    <div>
      <h2>Add a Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskInput;