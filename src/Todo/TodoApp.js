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
            <Link to="add-todo">+ TODO</Link>
          </div>

          <Route path="/" exact component={TodoList} />
          <Route path="/add-todo" component={TodoForm} />
        </React.Fragment>
      </Router>
    </div>
  );
}
