import { Component, useState } from 'react'

class Counter extends Component<{maxCount: number, step: number}, {count: number}> {
  state = {
    count: 0
  }

  // incDecResetHandle = (val: number = 0) => {
  //   this.setState({count: this.state.count + val})
  //   !val && this.setState({count: 0})
  // }

  incHandle = () => {
    // this.setState({count: this.state.count + 1})
    // this.setState( prevState => {
    //   return {count: +prevState.count + 1}
    // }, () => console.log(this.state.count))
    // this.setState( prevState => ({count: +prevState.count + 1}))
    // this.setState( prevState => ({count: +prevState.count + 1}))
    this.setState(() => {
      if (this.state.count >= this.props.maxCount) return {count: this.state.count}
      return {count: this.state.count + this.props.step}
    })
    
  }

  decHandle = () => {
    // this.setState({count: this.state.count - 1})
    this.setState(() => {
      return {count: this.state.count - this.props.step}
    })
  }

  resetHandle = () => {
    this.setState({count: 0})
  }

  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={this.incHandle}>+</button>
        <button onClick={this.decHandle}>-</button>
        <button onClick={this.resetHandle}>Reset</button>
        {/* <button onClick={this.incDecHandle}>Reset</button> */}
      </>
    ) 
  }
}

export default Counter;


// function Counter( {maxCount, step} : {maxCount: number, step: number} ) {

//   const [count, setCount] = useState(0)

//   const incHandle = () => {
//     setCount(() => {
//       if (count >= maxCount) return count;
//       return count + step;
//     })
//     // setCount( prevCount => prevCount + 1)
//     // setCount( prevCount => prevCount + 1)
//     // setCount(count + 1)
//     // setCount(count + 1)
//     // console.log(count)
//   }

//   const decHandle = () => {
//     setCount(() => {
//       if (count >= maxCount) return count;
//       return count - step;
//     })
//     // setCount(count - 1)
//   }

//   const resetHandle = () => {
//     setCount(0)
//   }

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={incHandle}>+</button>
//       <button onClick={decHandle}>-</button>
//       <button onClick={resetHandle}>Reset</button>
//     </>
//   )
// }

// export default Counter;
