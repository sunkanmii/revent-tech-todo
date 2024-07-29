import '../App.css';
import { useEffect, useState } from 'react';

function TodoForm({onAdd}) {
  const [todoItem, setTodoItem] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(todoItem);
    setTodoItem('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={todoItem}
        onChange={ev => setTodoItem(ev.target.value)}
        placeholder="Your next todo" />
        <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
