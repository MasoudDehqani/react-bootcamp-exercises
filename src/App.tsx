import React from 'react';
import './App.css';
import LoginForm from "./components/login-form/LoginForm"
import Counter from "./components/counter/Counter"

function App() {
  return (
    <Counter maxCount={10} step={2} />
  );
}

export default App;
