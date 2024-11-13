import './App.css';
import { useState,useEffect } from 'react';
import TodoList from './TodoList';

function App() {
  const [task,setTask] = useState('');
  const [todos,setTodos] = useState([]);

  const changeHandler =(event) =>{
    setTask(event.target.value);
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    const newTodo = [...todos,task];
    setTodos(newTodo);
    setTask("")
  }

  const deleteHandler = (indexValue)=>{
    const newTodos = todos.filter((todos,index)=> index !== indexValue)
    setTodos(newTodos)
  }
   
   // Load saved todos from local storage on initial load 
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justify-center py-7">
      <div >
        <h1 className='my-2 text-center underline'>Todo List Application</h1>
        <form onSubmit={submitHandler}>
          <input type='text'  name='task' value={task} onChange={changeHandler}
           placeholder='enter your task'  className='px-2 border border-black'/>
          <input type='submit' value='Add' name='add' className='mx-2 bg-blue-300 w-16 rounded-sm shadow-lg'/>
        </form>
        <div className='m-3'> 
            <TodoList todoList={todos}  deleteHandler={deleteHandler}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
