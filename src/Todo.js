import React from 'react';
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import {Checkbox} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {Edit} from '@material-ui/icons';
import {ListItemSecondaryAction} from '@material-ui/core';

export default function Todo({text, completed}) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText style={{textDecoration: completed && 'line-through'}}>
        {text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit'>
          <Edit />
        </IconButton>
        <IconButton aria-label='Delete'>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
