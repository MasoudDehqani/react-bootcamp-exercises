import styled from "styled-components"
// import React from 'react'

// function Buttons() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Buttons


import { Component } from 'react'

type ButtonsProps = {
  color: string;
  text: string;
}

const StyledButton = styled.button<{buttonColor: string}>`
  width: 40%;
  padding: 10px 30px;
  border: 1px solid white;
  outline: none;
  border-radius: 6px;
  font-family: inherit;
  background-color: ${props => props.buttonColor};
  &:hover {
    background-color: white;
    border: 1px solid ${props => props.buttonColor};
  }
`

// const SignInButton = styled(Button)<{signInButtonColor: string}>`
//   background-color: ${props => props.signInButtonColor};
//   &:hover {
//     background-color: white;
//     border: 1px solid lightgreen;
//   }
// `

// const SignUpButton = styled(Button)<{signUpButtonColor: string}>`
//   background-color: ${props => props.signUpButtonColor};
//   &:hover {
//     background-color: white;
//     border: 1px solid royalblue;
//   }
// `
class Button extends Component<ButtonsProps> {
  render() {
    let { color, text } = this.props
    return (
      <StyledButton buttonColor={color}>{text}</StyledButton>
    )
  }
}

export default Button