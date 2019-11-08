import React from 'react';
import {Typography} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodoCompletion,
    editTodo,
  } = useTodoState(initialTodos);

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
