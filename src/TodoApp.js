import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Grid} from '@material-ui/core';

import TodoList from './TodoList';

export default function TodoApp() {
  const initialTodos = [
    {id: 1, text: 'Walk the cat', completed: false},
    {id: 2, text: 'Walk the rabbit', completed: false},
    {id: 3, text: 'Walk the fish', completed: true},
  ];

  const [todos, setTodos] = useState(initialTodos);

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
      <TodoList todos={todos} />
    </Paper>
  );
}