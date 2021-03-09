import React from 'react';
import './App.css';
// import GrudgeList from './components/grudge-list/GrudgeList';
// import LoginForm from "./components/login-form/LoginForm"
// import Counter from "./components/counter/Counter"
// import Form from "./components/form/Form"
import TodoList from "./components/todoList/TodoList"
//@ts-ignore
import { TodoListContextProvider } from "./components/todoList/todoListContext"
import AppTheme from "./components/theme-switcher/AppTheme"
import Navbar from "./components/bilingual-webpage/src/components/Navbar"
import AppBilingual from "../src/components/bilingual-webpage/src/components/AppBilingual"
import Blog from "./components/blog/Blog"

function App() {
  return (
    <Blog />
    // <AppBilingual />
    // <Navbar />
    // <AppTheme />
    // <TodoListContextProvider>
    //   <TodoList />
    // </TodoListContextProvider>
  );
}

export default App;
