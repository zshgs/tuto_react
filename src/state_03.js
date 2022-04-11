import React, { Component } from 'react'

export default class state_03 extends Component {
    a = 1
    constructor(){
        super()
        this.state = {
            text : "确认",
            myshow : true,
            myname:"22222冲"
        }
}

  render() {
      
    return (
      <div>
          <h1 >aaa{this.state.myname}</h1>
          <button onClick={()=>{this.setState({
            myshow:!this.state.myshow
        })
        this.setState({
            myname:"111冲"
        })
        if(this.state.myshow){
            console.log("收藏")
        }else{
            console.log("取消")
        }
      }}>{this.state.myshow?'收藏':'取消'}</button>
      </div>
    )
  }
}
