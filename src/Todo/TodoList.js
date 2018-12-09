import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

function TodoListRaw({todos}) {
  return (
    <ul className="todo-list">
      {todos.map(todo => 
        <Todo key={todo.id} title={todo.title} />
      )}
    </ul>
  );
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const TodoList = connect(mapStateToProps)(TodoListRaw);
export default TodoList;