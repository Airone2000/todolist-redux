import React, {createRef} from 'react';
import {connect} from 'react-redux';

function TodoFormRaw({dispatch, history, ...rest}) {
  const ref = createRef();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch({type:'ADD_TODO', task: ref.current.value});
      ref.current.value = '';
      history.push('/');
    }}>
      <input type="text" placeholder="Nouvelle tâche ..." ref={ref} />
    </form>
  );
}

const TodoForm = connect()(TodoFormRaw);
export default TodoForm;