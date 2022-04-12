import React, { Component } from 'react'
import './css/state_07css.css'
export default class state_07 extends Component {
    state = {
        list:[
            {
            id:1,
            text:"电影1"
        },{
            id:2,
            text:"电影2"
        },{
            id:3,
            text:"电影3"
        }]
    }
  render() {
    return (
      <div><ul>
          {
              this.state.list.map(item=>
                <li key={item.id}>{item.text} </li>)
          }</ul></div>
    )
  }
}
