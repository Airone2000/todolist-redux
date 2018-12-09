import {cloneDeep} from 'lodash';

const todoInitialState = {
  todos: [
    {id: 1, title: 'Faire le ménage', done: false},
    {id: 2, title: 'Faire les courses', done: false}
  ]
};

function todoReducer(state = todoInitialState, action) {
  switch(action.type) {
    case 'TOGGLE_TODO':
      const newState = cloneDeep(state);
      const todo = newState.todos.find(todo => todo.id === action.todoId);
      todo.done = !todo.done;
      return newState;

    default:
      return state;
  }
}

export default todoReducer;