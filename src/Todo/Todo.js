import React from 'react';
import {connect} from 'react-redux';

function TodoRaw({todo, dispatch}) {
  return (
    <div onClick={(event) => {
      event.preventDefault();
      dispatch({
        type: 'TOGGLE_TODO', todoId: todo.id
      });
    }}>
      <label>
        <input type="checkbox" checked={todo.done} readOnly />
        <span className={todo.done && 'todo-done'}>{todo.title}</span>
      </label>
    </div>
  );
}

const Todo = connect()(TodoRaw);
export default Todo;

