import React, { useState } from 'react'

import styled from "styled-components"
import { Save, Delete, Edit } from "@material-ui/icons";
import { Grid, Paper, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';


const styles = {
  Icon: {
    marginLeft: "auto",
    width: "10%"
  },
  Paper: {
    display: 'flex',
    margin: "auto",
    padding: '10px 20px',
    alignItems: "center",
    marginTop: 10,
    width: 500
  }
};

const EditInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
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
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.success.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 20px auto;
  border: 1px solid black;
  padding: 5px;
  & > p {
    margin: 1rem;
  };
  & > input {
    margin: 1rem;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
`

function Task2(
  {id, text, done, edited, deleted, changeState, deleteButtonClickHandle, editButtonClickHandle, doneClickHandle} :
  {id: string, text: string, done: boolean, edited: boolean, deleted: boolean, changeState: Function, deleteButtonClickHandle: Function, editButtonClickHandle: Function, doneClickHandle: Function}
  ) {
  
  const [editInputValue, setEditInputValue] = useState(text)
  const [inEditMode, setInEditMode] = useState(false)

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setEditInputValue(e.target.value)
  }

  function inputKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    let target = e.target as HTMLInputElement
    if (e.key === 'Escape') {
      setInEditMode(false)
    }
    if (e.key === "Enter") {
      let isChanged = editButtonClickHandle(id, target.value)
      isChanged && setInEditMode(false)
    }
  }

  return (
    <Grid xs={12} item >
      <Paper elevation={2} style={styles.Paper}>

        {!inEditMode && <span onClick={ () => doneClickHandle(id, done)} style={done ? {textDecoration: "line-through"} : undefined}>{text}</span>}
        {inEditMode && <EditInput value={editInputValue} onChange={inputChangeHandler} onKeyDown={inputKeyPressHandler} />}
        
        <IconButton color="primary" aria-label="Edit" style={styles.Icon} disabled={done && true} onClick={() => setInEditMode(true)} >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton color="secondary" aria-label="Delete" onClick={() => deleteButtonClickHandle(id)} >
          <Delete fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>  
  )
}

export default Task2;