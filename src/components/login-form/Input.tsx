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

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 12px 8px;
  outline: none;
  font-family: inherit;
  &:focus {
    outline: none;
  };
`;

type InputProps = {
  type: string;
  id: string;
  name: string;
}
class Input extends Component<InputProps> {
  state = {
    [`${this.props.name}IsFocused`]: false,
  }
  render() {
    let { type, id, name } = this.props
    return (
      <>
        <Container>
          <Label 
            style={!this.state[`${this.props.name}IsFocused`] ? {opacity: '0'} : {opacity: '100%'}} 
            htmlFor={id}>
            {this.props.name}
          </Label>
          <StyledInput 
            type={type} 
            id={id} 
            name={name} 
            placeholder={!this.state[`${this.props.name}IsFocused`] ? name : undefined}
            onFocus={() => this.setState({[`${this.props.name}IsFocused`]: true})}
            onBlur={() => this.setState({[`${this.props.name}IsFocused`]: false})} 
          />
        </Container>
      </>
    )
  }
}

export default Input;