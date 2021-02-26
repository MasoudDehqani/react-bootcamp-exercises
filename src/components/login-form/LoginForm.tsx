import React from 'react'
import styled from "styled-components"
import Button from './Button'
import Input from "./Input"
import Image from "./Image"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 150px auto;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
  padding: 30px;
  height: 25rem;
  border-radius: 6px;
`

function LoginForm() {
  return (
    <StyledForm>
      <Image imageUrl="https://image.flaticon.com/icons/svg/145/145867.svg" />
      <Input 
        type="text"
        id="username"
        name="username"
      />
      <Input 
        type="text"
        id="password"
        name="password"
      />
      <div style={{display: "flex", marginTop: "30px", justifyContent: "space-evenly"}}>
        <Button 
          text="Sign In"
          color="lightgreen"
        />
        <Button 
          text="Sign Up"
          color="royalblue"
        />
      </div>
    </StyledForm>
  )
}

export default LoginForm
