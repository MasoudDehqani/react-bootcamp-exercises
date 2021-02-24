import React from 'react'
import styled from "styled-components"
import Buttons from './Buttons'
import Inputs from "./Inputs"
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
      <Inputs 
        usernameText="Username" 
        passwordText="Password"
      />
      <Buttons 
        signInButtonText="Sign In"
        signInButtonColor="lightgreen"
        signUpButtonText="Sign Up"
        signUpButtonColor="royalblue"
      />
    </StyledForm>
  )
}

export default LoginForm
