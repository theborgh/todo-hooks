import React from 'react';
import {Paper} from '@material-ui/core';
import {List} from '@material-ui/core';

import {Divider} from '@material-ui/core';
import Todo from './Todo';

export default function TodoList({
  todos,
  removeTodo,
  toggleTodoCompletion,
  editTodo,
}) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
              text={todo.text}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodoCompletion={toggleTodoCompletion}
              id={todo.id}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
