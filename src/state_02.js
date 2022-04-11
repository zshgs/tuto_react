import React, { Component } from 'react'

export default class  App extends Component {
    myref = React.createRef()
  render() {
    return (
      <div>
          <input ref={this.myref}>
          </input>
          <button onClick={
              this.handleClick
          }>hi3</button>
      </div>
    )
  }
    handleClick=()=>{
        console.log(this.myref.current.value)
    }
}
