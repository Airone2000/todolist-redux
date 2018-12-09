const todoInitialState = {
  todos: [
    {id: 1, title: 'Faire le ménage'},
    {id: 2, title: 'Faire les courses'}
  ]
};

function todoReducer(state = todoInitialState, action) {
  return state;
}

export default todoReducer;