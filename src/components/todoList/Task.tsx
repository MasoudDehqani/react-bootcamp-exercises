import React, { useEffect, useState } from 'react'
// import Container from "@material-ui/core/Container"
// import Input from "@material-ui/core/Input"
// import Box from "@material-ui/core/Box"
import styled from "styled-components"

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

function Task({text, reportStatus} : {text: string, reportStatus: Function}) {

  const [edit, setEdit] = useState(false)
  const [edited, setEdited] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [done, setDone] = useState(false)
  const [inputValue, setInputValue] = useState(text)
  const [taskStatus, setTaskStatus] = useState({text, deleted, done, edited})

  function taskInputHandle(e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) {
    // setTaskStatus({...taskStatus, text: e.target.value})
    let target = e.target as HTMLInputElement
    setInputValue(target.value)
  }

  function keypressHandle(e: React.KeyboardEvent<HTMLInputElement>) {
    let target = e.target as HTMLInputElement
    if (e.key === "Enter") {
      
      if (target.value !== taskStatus.text) {
        taskInputHandle(e)
        setTaskStatus( prev => ({...prev, text: target.value, edited: true}))
        setInputValue(target.value)
        setEdited(true)
      }
      //@ts-ignore
      // console.log(e.target.value, taskStatus.text)
      setEdit(false)
    }
  }

  useEffect(() => {
    reportStatus(taskStatus)
    console.log(taskStatus)
  }, [edited, deleted])

  return (
    <>
      {!deleted && 
        <Container>
          {!edit && 
            <p style={done ? {textDecoration: "line-through"} : {}} onClick={ () => setDone(!done)}>
              {taskStatus.text}
            </p>
          }
          {edit && <input type="text" value={inputValue} onChange={taskInputHandle} onKeyPress={keypressHandle} />}
          <ButtonsContainer>
            {<button disabled={done ? true : false} onClick={ () => {
              setEdit(true)
            }}>Edit</button>}
            <button onClick={ () => {
              setDeleted(true)
            }}>Delete</button>
          </ButtonsContainer>
        </Container>
      }
    </>
  )
}

export default Task
