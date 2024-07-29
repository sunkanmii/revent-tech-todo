import '../App.css';
import { useEffect, useState } from 'react';
import TodoForm from './TodoForms';
import TodoItem from './TodoItems';

function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    if (todoItems.length === 0) return;
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);
  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todoItems'));
    setTodoItems(savedTodos || []);
  }, []);


  function addItem(item) {
    setTodoItems(prev => [...prev, { name: item, done: false }]);
  }

  function deleteTodo(itemIndex){
    setTodoItems(prev => {
      return prev.filter((obj, index) => index !== itemIndex)
    })
  }
  function updateTodo(index, isChecked){
    setTodoItems(prev => {
      const newTodo = [...prev];
      newTodo[index].done = isChecked;
      return newTodo;
    })
  }
  return (
    <div className="todo-container">
      <TodoForm onAdd={addItem} />
      {todoItems.length > 0 ? todoItems.map((item, index) => (
        <TodoItem key={index} {...item} 
        onToggleCheckbox={val => updateTodo(index, val)}
        onDelete={() => deleteTodo(index)}/>
      )) : "Nothing yet..."}
      
    </div>
  );
}

export default Todo;
