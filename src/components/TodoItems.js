import '../App.css';
import Checkbox from './CheckBox';

function TodoItem({name, done, onToggleCheckbox, onDelete}) {

  return (
    <div className="todo-item">
      <Checkbox checked={done} onClick={() => onToggleCheckbox(!done)}/>
        {name}
        <button className='delete' onClick={onDelete}>
          Delete
        </button>
    </div>
  );
}

export default TodoItem;
