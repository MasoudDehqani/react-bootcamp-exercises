import React, { useState } from 'react'
import { ClearAll } from "@material-ui/icons";
import Box from "@material-ui/core/Box"


import Button from "@material-ui/core/Button";

import Task from "./Task__Redux"


import { fade, withStyles, makeStyles } from '@material-ui/core/styles';


import InputBase from '@material-ui/core/InputBase';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: "11px 30px",
  },
}));

const AddInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& > div > input': {
      borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.success.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.success.main,
    }
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.success.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.success.main,
    },
  },
}))(InputBase);

const styles = {
  addButton: {
    backgroundColor: '#6EFF70',
    marginLeft: 10,
    padding: "5px 40px",
    height: '80%'
  },
}

function TodoList() {

  const [addInput, setAddInput] = useState('')

  function inputValueChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {

  }

  function addButtonClickHandler() {

  }

  function addInputKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    let target = e.target as HTMLInputElement
    if (e.key === "Escape") target.blur()
    if (e.key === "Enter" && addInput) {
      addButtonClickHandler()
    }
  }

  function deleteHandle(id: string) {

  }

  function editHandle(id: string, newText: string) {

  }

  function doneHandle(id: string, done: boolean) {

  }

  function clearAllButtonHandle() {
    
  }

  let classes = useStyles()

  return (
    <>
      <Container style={{height: '50px', display: 'flex', alignItems: 'center'}}>
        <AddInput value={addInput} onChange={inputValueChangeHandler} onKeyDown={addInputKeyPressHandler} />
        <Button disabled={!addInput && true} type="submit" variant="contained" style={styles.addButton} onClick={addButtonClickHandler}>ADD</Button>
      </Container>

      {/* {!!taskList.length && 
      <Box display='flex' justifyContent='center' marginTop={5}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<ClearAll />}
          onClick={clearAllButtonHandle}
        >
          Clear All
        </Button>
      </Box>} */}
    </>
  )
}

export default TodoList
