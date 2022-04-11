import React, { Component } from 'react'
import './css/index_01.css' //import css by using webpack
export default class class_04 extends Component {
  render() {
      var obj = {
          background:"yellow",
          fontSize:"30px"
      }
    return (
      <div>
          {10<20?'aaa':'bbb'}
          <div style={obj}>1111</div>
          <div style={{background:"red"}}>1111</div>
          <div className="active">55555555555555</div>
          <label for="username">int
              <input type="text" id="username">
              </input>
          </label>
      </div>
    )
  }
}
