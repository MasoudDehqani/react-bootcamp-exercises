import React, { useEffect, useState } from 'react'

// import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
// import green from "@material-ui/core/colors/green"

import Task2 from "./Task2"
import styled from "styled-components"
// import { TextField } from '@material-ui/core';

import {
  fade,
  // ThemeProvider,
  withStyles,
  // makeStyles,
  // createMuiTheme,
} from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

const AddInput = withStyles((theme) => ({
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
      borderColor: theme.palette.primary.main,
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
    padding: "5px 40px"
  },
}

type tasksStatus = {
  id: string;
  text: string;
  done: boolean;
  edited: boolean;
  deleted: boolean;
}[]

function TodoList2() {

  const [addInput, setAddInput] = useState('')
  // const [text, setText] = useState('')
  // const [taskStatus, setTaskStatus] = useState({})
  const [stateChange, setStateChange] = useState(false)
  const [tasksStatusState, setTasksStatusState] = useState<tasksStatus>([])

  function inputValueChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setAddInput(e.target.value)
  }

  // useEffect(() => {
  //   console.log(taskStatus)
  // }, [stateChange])

  function addButtonClickHandler() {
    let repeated = false
    tasksStatusState.forEach( ({text}) => {
      if (text === addInput) repeated = true
    })
    if (!repeated) {
      let taskStatus = {
        id: Math.random().toFixed(4),
        text: addInput,
        done: false,
        edited: false,
        deleted: false
      }
      // tasksStatus.push(taskStatus)
      //@ts-ignore
      setTasksStatusState( prev => prev.concat(taskStatus))
      console.log(tasksStatusState)
      setAddInput('')
      // setStateChange(!stateChange)
    }
  }

  function addInputKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    let target = e.target as HTMLInputElement
    if (e.key === "Escape") target.blur()
    if (e.key === "Enter") {
      addButtonClickHandler()
    }
  }

  function changeState() {
    setStateChange(!stateChange)
  }

  function deleteHandle(id: string) {
    console.log(tasksStatusState)
    //@ts-ignore
    setTasksStatusState(tasksStatusState.filter( task => task.id !== id))
    // tasksStatus = tasksStatus.filter( task => task.id !== id)
    // setStateChange(!stateChange)
  }

  function editHandle(id: string, newText: string) {
    let isRepeated = false
    let copy = tasksStatusState.slice()
    tasksStatusState.forEach( ({text}) => text.trim() === newText.trim() && (isRepeated = true))
    copy.forEach( task => {
      if (id === task.id && !isRepeated) task.text = newText
    })
    setTasksStatusState(copy)
    return !isRepeated
  }

  function doneHandle(id: string, done: boolean) {
    // let copy = tasksStatusState.slice()
    // copy.forEach( task => {
    //   if (task.id === id) task.done = !task.done
    // })
    // setTasksStatusState(copy)
    //@ts-ignore
    setTasksStatusState(tasksStatusState.map( task => {
      if (task.id !== id) return task
      return {...task, done: !task.done}
      // return {...task, done: !task.done}
    }))
    console.log(tasksStatusState)
    // setStateChange(!stateChange)
  }

  let taskList = tasksStatusState.map( ({id, text, done, edited, deleted}) => {
    return (
      <Task2 
        key={id} 
        id={id} 
        text={text} 
        done={done} 
        edited={edited} 
        deleted={deleted} 
        changeState={changeState} 
        deleteButtonClickHandle={deleteHandle} 
        editButtonClickHandle={editHandle}
        doneClickHandle={doneHandle}
      />
    )
  })

  return (
    <>
      <Container>
        <AddInput value={addInput} onChange={inputValueChangeHandler} onKeyDown={addInputKeyPressHandler} />
        <Button disabled={!addInput && true} type="submit" variant="contained" style={styles.addButton} onClick={addButtonClickHandler}>ADD</Button>
      </Container>
      {taskList}
    </>
  )
}

export default TodoList2
