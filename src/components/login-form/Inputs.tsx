import styled from "styled-components"
// import React from 'react'

// function Inputs() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Inputs


import { Component } from 'react'

const Container = styled.div`
  margin: 7px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 62.6px;
  width: 65%;
`;

const Label = styled.label`
  transition: opacity 0.2s ease-out;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 12px 8px;
  outline: none;
  font-family: inherit;
  &:focus {
    outline: none;
  };
`;

type InputsProps = {
  usernameText: string;
  passwordText: string;
}
class Inputs extends Component<InputsProps> {
  state = {
    usernameIsFocused: false,
    passwordIsFocused: false
  }
  render() {
    return (
      <>
        <Container>
          <Label 
            style={!this.state.usernameIsFocused ? {opacity: '0'} : {opacity: '100%'}} 
            htmlFor="username">
            {this.props.usernameText}
          </Label>
          <Input 
            type="text" 
            id="username" 
            name="fusername" 
            placeholder={!this.state.usernameIsFocused ? this.props.usernameText : undefined}
            onFocus={() => this.setState({usernameIsFocused: true})}
            onBlur={() => this.setState({usernameIsFocused: false})} 
          />
        </Container>

        <Container>
          <Label 
            style={!this.state.passwordIsFocused ? {opacity: '0'} : {opacity: '100%'}} 
            htmlFor="password">
              {this.props.passwordText}
          </Label>
          <Input 
            type="text" 
            id="password" 
            name="password" 
            placeholder={!this.state.passwordIsFocused ? this.props.passwordText : undefined}
            onFocus={() => this.setState({passwordIsFocused: true})}
            onBlur={() => this.setState({passwordIsFocused: false})}
          />
        </Container>
      </>
    )
  }
}

export default Inputs