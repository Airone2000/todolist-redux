import {cloneDeep, find} from 'lodash';

const todoInitialState = {
  todos: [
    {id: 1, title: 'Faire le ménage', done: false},
    {id: 2, title: 'Faire les courses', done: false}
  ]
};

function todoReducer(state = todoInitialState, action) {

  const newState = cloneDeep(state);

  switch(action.type) {
    case 'TOGGLE_TODO':
      const todo = find(newState.todos, ['id', action.todoId])
      if(todo){
        todo.done = !todo.done;
      }
      return newState;

    case 'ADD_TODO':
      const newTodo = {id: state.todos.length + 1, title: action.task, done: false};
      newState.todos.push(newTodo);
      return newState;

    default:
      return state;
  }
}

export default todoReducer;