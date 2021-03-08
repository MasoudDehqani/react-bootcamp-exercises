import React, { useReducer, createContext } from 'react'
import { TasksStatus } from './TodoList'
import todoListReducer, {TodoType, Action} from './todoListReducer'

export const TodoListContext = createContext<
  {initialValue: TodoType[], dispatch: React.Dispatch<Action>}
  >
  ({initialValue: [], dispatch: () => {}})

function getInitialValue(initialValue: TasksStatus[]) {
  const savedValue = localStorage.getItem("tasks")
  if (savedValue === null) return initialValue
  return JSON.parse(savedValue)
}

export const TodoListContextProvider: React.FC = ({children}) => {
  const [todoTasks, dispatch] = useReducer(todoListReducer, [], getInitialValue)

  return <TodoListContext.Provider value={{initialValue: todoTasks, dispatch}}>{children}</TodoListContext.Provider>
}