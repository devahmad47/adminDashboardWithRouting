import React, { useState } from 'react';
//todo with crud & reduxtoolkit its ui and complete functionality?
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [task, setNewTask] = useState('');

  // Add task
  const addTask = () => {
    setTodo([...todo, task]);
    setNewTask('');
  };

  // Edit task
  const editTask = (index) => {
    const updatedTask = prompt('Edit Task', todo[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...todo];
      updatedTasks[index] = updatedTask;
      setTodo(updatedTasks);
    }
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = [...todo];
    updatedTasks.splice(index, 1);
    setTodo(updatedTasks);
  };

  return (
    <>
      <div className='justify-content-center align-item-center mt-12 text-center'>
        <h1 className='text-2xl font-bold'>Todo List</h1>
        <form>
          <input
            type='text'
            value={task}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Add your task'
            className='border-3 border'
          />
          <span>
            <button
              type='button' // Change to "button" to prevent form submission
              className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={addTask}
            >
              Add
            </button>
          </span>
        </form>
        <br />
        <div>
          {todo.map((todos, index) => (
            <div key={index} className='border border-spacing-1 border-red-200'>
              {todos}
              <span>
                <button
                  type='button' // Change to "button" to prevent form submission
                  className='btn bg-red-500 hover:bg-white-700 hover:text-black text-white font-bold py-2 px-4 rounded'
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </span>
              <span>
                <button
                  type='button' // Change to "button" to prevent form submission
                  className='btn bg-blue-500 hover:bg-white-700 hover:text-black text-white font-bold py-2 px-4 rounded'
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>
              </span>
            </div>

          ))}
         
        </div>
       
      </div>
    </>
  );
};

export default Todo;
