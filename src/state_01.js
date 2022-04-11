import React, { Component } from 'react'

export default class  extends Component {
    a = 100;
  render() {
    return (
      <div>
          <input>
          </input>
          <button onClick={this.handleClick}>hi</button>
          <button onClick={this.handleClick2.bind(this)}>hola</button>
          <button onClick={ ()=>{
              this.handleClick2()
          }}>hi3</button>
      </div>
    )
  }
    handleClick(){
        console.log("hi")
    }
    handleClick2(){
        console.log("hi2",this.a)
    }
}

class A{
    constructor(){
        this.a="111";
        this.b="222";
        this.bbb();
    }
        c = 333;
    
    aaa(){

    }

    bbb(){
        this.ccc();
    }

    ccc(){
        console.log("hiC")
    }
}
console.log(new A())