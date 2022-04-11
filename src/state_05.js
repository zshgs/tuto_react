import React, { Component } from 'react'

export default class  App extends Component {
    myref = React.createRef()

    state = {
        list:[
            {   id : 1,
                text :"111"
        },
            {   id : 2,
                text :"222"
        },
            {
                id : 3,
                text :"333"
        }]
    }
  render() {
    return (
      <div>
          <input ref={this.myref}>
          </input>
          <button onClick={this.handleClick}>hi3</button>
          <ul>
              {
                this.state.list.map((item,index)=><li  key={item.id}>{item.text}
                <button onClick={()=>this.handleDel(index)}>del</button></li>)
              }
          </ul>
      </div>
    )
  }
    handleClick=()=>{
        console.log(this.myref.current.value)

        let newlist = [...this.state.list.concat()]
        
        newlist.push({ 
            id:Math.random()*54967295067,
            text:this.myref.current.value})

        this.setState({list:newlist})
    }

}
