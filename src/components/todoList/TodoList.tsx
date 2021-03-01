import React, { useState } from 'react'
import Task from "./Task"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 50%;
  margin: 20px auto;
  justify-content: center;
`

function TodoList() {

  const [initialValue, setInitialValue] = useState('')
  const [value, setValue] = useState('')
  const [tasksStatus, setTasksStatus] = useState([])

  function inputHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setInitialValue(e.target.value)
    setValue(e.target.value)
  }

  function addButtonHandle() {
    //@ts-ignore
    setTasksStatus( prev => {
      //@ts-ignore
      if (!prev.includes(value)) {
        setInitialValue('')
        return [...prev, value]
      }
      return [...prev]
    })
    // setValue('')
  }

  function addButtonKeypressHandle(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addButtonHandle()
    }
  }

  let taskList = tasksStatus.map( item => <Task key={item} text={item} reportStatus={ (status: any) => {
    setTasksStatus( prev => prev.filter( task => status !== task))
  }} />)
  
  return (
    <>
      <Container>
        <input type="text" value={initialValue} name="input" onChange={inputHandle} onKeyPress={(e) => addButtonKeypressHandle(e)} />
        
        <button onClick={addButtonHandle}>ADD</button>
      </Container>
      {taskList}
    </>
  )
}

export default TodoList
