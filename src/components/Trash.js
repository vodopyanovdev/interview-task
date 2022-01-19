import React from 'react';
import {
  IconButton,
  MenuList,
  MenuItem,
  Collapse,
  Box,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { useContext } from 'react';
import Store from '../context';
import { useState } from 'react';

export const Trash = () => {
  const { state, dispatch } = useContext(Store);
  const [trashState, trashUpdate] = useState(false);

  const componentTodos = (
    <Box
      sx={{
        position: 'absolute',
        top: 65,
        right: 0,
        background: 'white',
        zIndex: 1,
        color: 'black',
      }}
    >
      <MenuList>
        {state.deletedTodos.map((todo) => (
          <MenuItem
            onClick={() =>
              dispatch({ type: 'ADD_TODO_FROM_DONE', payload: todo })
            }
            divider
            key={todo}
          >
            {todo}
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => trashUpdate(!trashState)}
      >
        <DoneIcon />
      </IconButton>
      <Collapse
        timeout={0}
        in={trashState}
        children={componentTodos}
      ></Collapse>
    </>
  );
};
