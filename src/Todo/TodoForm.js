import React, {createRef} from 'react';
import {connect} from 'react-redux';

function TodoFormRaw({dispatch, history, ...rest}) {
  const ref = createRef();
  return (
    <form className="add-todo-form" onSubmit={(e) => {
      e.preventDefault();

      let value = ref.current.value.trim();
      if(value.length > 0) {
        dispatch({type:'ADD_TODO', task: value});
        history.push('/');
      }
    }}>
      <input type="text" className="add-todo-input" placeholder="Nouvelle tâche ..." ref={ref} />
      <p>
        <small>Press enter to submit</small>
      </p>
    </form>
  );
}

const TodoForm = connect()(TodoFormRaw);
export default TodoForm;