import React from 'react';
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import {Checkbox} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {Edit} from '@material-ui/icons';
import {ListItemSecondaryAction} from '@material-ui/core';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

export default function Todo({
  text,
  completed,
  removeTodo,
  id,
  toggleTodoCompletion,
  editTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggle();

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          text={text}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodoCompletion(id)}
          />
          <ListItemText style={{textDecoration: completed && 'line-through'}}>
            {text}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Edit' onClick={toggleIsEditing}>
              <Edit />
            </IconButton>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
