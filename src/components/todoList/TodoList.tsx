import React, { useContext, useEffect, useReducer, useState } from 'react'
import { ClearAll } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box"
import FormHelperText from "@material-ui/core/FormHelperText"


// import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
// import green from "@material-ui/core/colors/green"

import Task from "./Task"
import styled from "styled-components"
// import { TextField } from '@material-ui/core';

import {
  fade,
  // ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';


import InputBase from '@material-ui/core/InputBase';
import { TextField } from '@material-ui/core';

import todoListReducer from "./todoListReducer"
//@ts-ignore
import {ContextProvider, TodoListContext} from "./todoListContext"

import {Actions} from "./todoListReducer"

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
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
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
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.success.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.success.main,
    },
  },
}))(InputBase);

const Container = styled.div`
  display: flex;
  width: 50%;
  margin: 20px auto;
  justify-content: center;
`

const styles = {
  addButton: {
    backgroundColor: '#6EFF70',
    marginLeft: 10,
    padding: "5px 40px",
    height: '80%'
  },
}

export type TasksStatus = {
  id: string;
  text: string;
  done: boolean;
  edited: boolean;
  deleted: boolean;
}[]

function TodoList() {

  const [addInput, setAddInput] = useState('')
  // const [tasksStatusReducerState, dispatch] = useReducer(todoListReducer, [])
  const todoContext = useContext(TodoListContext)
  // const [text, setText] = useState('')
  // const [taskStatus, setTaskStatus] = useState({})
  // const [stateChange, setStateChange] = useState(false)
  const [tasksStatusState, setTasksStatusState] = useState<TasksStatus>([])
  const [errorRepeated, setErrorRepeated] = useState(false)

  function inputValueChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    //@ts-ignore
    todoContext.dispatch({type: Actions.ADDINPUTHANDLE, payload: {addInput: e.target.value, setAddInput }})
    // setAddInput(e.target.value)
  }

  // useEffect(() => {
  //   console.log(taskStatus)
  // }, [stateChange])

  function addButtonClickHandler() {
    //@ts-ignore
    todoContext.dispatch({type: Actions.ADD, payload: {addInput, setErrorRepeated, setAddInput, text: addInput, id: Math.random().toFixed(4), done: false, edited: false, deleted: false}})
    console.log(todoContext.initialValue)
    // let repeated = false
    // tasksStatusState.forEach( ({text}) => {
    //   if (text.trim().toLocaleLowerCase() === addInput.trim().toLocaleLowerCase()) repeated = true
    //   setErrorRepeated(true)
    // })
    // if (!repeated) {
    //   let taskStatus = {
    //     id: Math.random().toFixed(4),
    //     text: addInput,
    //     done: false,
    //     edited: false,
    //     deleted: false
    //   }
    //   // tasksStatus.push(taskStatus)
    //   //@ts-ignore
    //   setTasksStatusState( prev => prev.concat(taskStatus))
    //   setAddInput('')
    //   setErrorRepeated(false)
    //   // setStateChange(!stateChange)
    // }
  }

  function addInputKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    let target = e.target as HTMLInputElement
    if (e.key === "Escape") target.blur()
    if (e.key === "Enter" && addInput) {
      addButtonClickHandler()
    }
  }

  // function changeState() {
  //   setStateChange(!stateChange)
  // }

  function deleteHandle(id: string) {
    console.log(tasksStatusState)
    //@ts-ignore
    // setTasksStatusState(tasksStatusState.filter( task => task.id !== id))
    todoContext.dispatch({type: Actions.DELETE, payload: {id}})
    // tasksStatus = tasksStatus.filter( task => task.id !== id)
    // setStateChange(!stateChange)
  }

  function editHandle(id: string, newText: string) {
    //@ts-ignore
    todoContext.dispatch({type: Actions.EDIT, payload: {id, newText, setErrorRepeated}})
    // let isRepeated = false
    // // let copy = tasksStatusState.map( task => ({...task}))
    // tasksStatusState.forEach( ({text}) => 
    // text.trim().toLocaleLowerCase() === newText.trim().toLocaleLowerCase() && (isRepeated = true))
    // // copy.forEach( task => {
    // //   if (id === task.id && !isRepeated) task.text = newText
    // // })
    // // setTasksStatusState(copy)
    // setTasksStatusState(tasksStatusState.map( task => {
    //   if (id === task.id && !isRepeated) return {...task, text: newText}
    //   return task
    // }))
    // return !isRepeated
  }

  function doneHandle(id: string, done: boolean) {
    //@ts-ignore
    todoContext.dispatch({type: Actions.DONETOGGLE, payload: {id, done}})
    // let copy = tasksStatusState.map( task => ({...task}))
    // copy.forEach( task => {
    //   if (task.id === id) task.done = !task.done
    // })
    // setTasksStatusState(copy)
    //@ts-ignore
    // setTasksStatusState(tasksStatusState.map( task => {
    //   if (task.id !== id) return task
    //   return {...task, done: !task.done}
    // }))
    // setStateChange(!stateChange)
  }

  function clearAllButtonHandle() {
    //@ts-ignore
    todoContext.dispatch({type: Actions.CLEARALL})
  }

  let taskList = todoContext.initialValue.map( ({id, text, done}) => {
    return (
      <Task 
        key={id} 
        id={id} 
        text={text} 
        done={done} 
        // changeState={changeState} 
        deleteButtonClickHandle={deleteHandle} 
        editButtonClickHandle={editHandle}
        doneClickHandle={doneHandle}
        errorRepeated={errorRepeated}
      />
    )
  })

  let classes = useStyles()

  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(todoContext.initialValue))
  }, [todoContext.initialValue])

  return (
    <>
      <Container style={{height: '50px', display: 'flex', alignItems: 'center'}}>
        <AddInput value={addInput} onChange={inputValueChangeHandler} onKeyDown={addInputKeyPressHandler} />
        <Button disabled={!addInput && true} type="submit" variant="contained" style={styles.addButton} onClick={addButtonClickHandler}>ADD</Button>
      </Container>
      {taskList}
      {/* <IconButton>
        <ClearAll />
      </IconButton> */}
      {!!taskList.length && 
      <Box display='flex' justifyContent='center' marginTop={5}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          // className={classes.button}
          startIcon={<ClearAll />}
          onClick={clearAllButtonHandle}
        >
          Clear All
        </Button>
      </Box>}
    </>
  )
}

export default TodoList
