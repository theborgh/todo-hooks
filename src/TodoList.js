import React from 'react';
import {Paper} from '@material-ui/core';
import {List} from '@material-ui/core';
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import {Divider} from '@material-ui/core';

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <ListItem key={todo.id}>
              <ListItemText>{todo.text}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
