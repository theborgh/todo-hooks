import React from 'react';
import {TextField} from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({editTodo, id, text, toggleIsEditing}) {
  const [value, handleChange, reset] = useInputState(text);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
      }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}
