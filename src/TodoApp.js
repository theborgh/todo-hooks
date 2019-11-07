import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import uuid from 'uuid/v4';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
  const initialTodos = [
    {id: 1, text: 'Walk the cat', completed: false},
    {id: 2, text: 'Walk the rabbit', completed: false},
    {id: 3, text: 'Walk the fish', completed: true},
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: uuid(), text: newTodoText, completed: false}]);
  };

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodoCompletion = todoId => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const editTodo = (todoId, newText) => {
    setTodos(
      todos.map(todo => (todo.id === todoId ? {...todo, text: newText} : todo))
    );
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>TODOs with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodoCompletion={toggleTodoCompletion}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
