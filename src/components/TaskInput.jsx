// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTaskToFirestore } from '../redux/taskSlice';

// const TaskInput = () => {
//   const [task, setTask] = useState('');
//   const [priority, setPriority] = useState('Medium');
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() && user) {
//       dispatch(addTaskToFirestore(user.uid, { text: task, priority }));
//       setTask('');
//       setPriority('Medium');
//     }
//   };

//   return (
//     <div>
//       <h2>Add a Task</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type a task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>
//         <button type="submit" className="btn btn-primary">
//           <i className="bi bi-plus"></i> Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskInput;

//####################################################################

// src/components/TaskInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskToFirestore } from '../redux/taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();
  const MOCK_USER_ID = 'demo-user-2025';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTaskToFirestore(MOCK_USER_ID, { text: task, priority }));
      setTask('');
    }
  };

  return (
    <div>
      <h2>Add a Task</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Type a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;