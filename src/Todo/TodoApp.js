import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './TodoApp.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
  return (
    <div className="todo-app">
      <Router>
        <React.Fragment>
          <div className="todo-app-header">
            <Route render={(param) => {
              return param.location.pathname !== '/add-todo' ? (
                <Link to="add-todo" className="add-todo">+ New todo</Link>
              ) : null;
            }}></Route>

            <Route render={(param) => {
              return param.location.pathname === '/add-todo' ? (
                <Link to="/" className="add-todo">{'<'} Back to the list</Link>
              ) : null;
            }}></Route>
          </div>

          <Route path="/" exact component={TodoList} />
          <Route path="/add-todo" component={TodoForm} />
        </React.Fragment>
      </Router>
    </div>
  );
}
