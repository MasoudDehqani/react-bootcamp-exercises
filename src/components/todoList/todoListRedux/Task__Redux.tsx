import React, { useState } from 'react'

import { DeleteForever, Edit, ClearAll } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { fade, withStyles } from '@material-ui/core/styles';

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
      borderColor: theme.palette.success.main,
    },
  },
}))(InputBase);

function Task() {
  
  const [editInputValue, setEditInputValue] = useState()
  const [inEditMode, setInEditMode] = useState(false)

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    // setEditInputValue()
  }

  function inputKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    let target = e.target as HTMLInputElement
    if (e.key === 'Escape') {
      setInEditMode(false)
      // setEditInputValue()
    }
    let isRepeated = false

    if (e.key === "Enter") {     
      if (!isRepeated) {
        setInEditMode(false)
      }
    }
  }

  return (
    <Grid xs={12} item >
      <Paper elevation={2} style={styles.Paper}>

        {/* {!inEditMode && <span onClick={ () => doneClickHandle(id, done)} style={{textDecoration: done ? "line-through" : undefined, cursor: 'pointer'}}>{text}</span>}
        {inEditMode && <EditInput value={editInputValue} onChange={inputChangeHandler} onKeyDown={inputKeyPressHandler} />} */}
        
        <IconButton color="primary" aria-label="Edit" style={styles.Icon} onClick={() => setInEditMode(true)} >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton color="secondary" aria-label="Delete" >
          <DeleteForever fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>  
  )
}

export default Task;