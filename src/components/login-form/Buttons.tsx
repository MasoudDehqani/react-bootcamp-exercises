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
  signInButtonText: string;
  signInButtonColor: string;
  signUpButtonText: string;
  signUpButtonColor: string;
}

const Button = styled.button`
  margin: 30px 10px;
  padding: 10px 30px;
  border: 1px solid white;
  outline: none;
  border-radius: 6px;
  font-family: inherit;
`

const SignInButton = styled(Button)<{signInButtonColor: string}>`
  background-color: ${props => props.signInButtonColor};
  &:hover {
    background-color: white;
    border: 1px solid lightgreen;
  }
`

const SignUpButton = styled(Button)<{signUpButtonColor: string}>`
  background-color: ${props => props.signUpButtonColor};
  &:hover {
    background-color: white;
    border: 1px solid royalblue;
  }
`
class Buttons extends Component<ButtonsProps> {
  render() {
    return (
      <div style={{margin: '10px auto'}}>
        <SignInButton signInButtonColor={this.props.signInButtonColor}>{this.props.signInButtonText}</SignInButton>
        <SignUpButton signUpButtonColor={this.props.signUpButtonColor}>{this.props.signUpButtonText}</SignUpButton>
      </div>
    )
  }
}

export default Buttons