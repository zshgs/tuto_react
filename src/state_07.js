import React, { Component } from 'react'
import './css/state_07css.css'
import Center from './state_07/Center'
import Cinema from './state_07/Cinema'
import Film from './state_07/Film'




export default class state_07 extends Component {
    state = {
        list:[
            {
            id:1,
            text:"电影"
        },{
            id:2,
            text:"电影"
        },{
            id:3,
            text:"电影"
        }],
        current:0
    }
    which(){
        switch(this.state.current){
            case 0:
                return<Film></Film>
                case 1:
                    return<Center></Center>
                    case 2:
                        return<Cinema></Cinema>

        }
    }
  render() {
    return (
      <div>
        {
            this.state.current=== 0 && <Film></Film>
        }
            
        {
            this.state.current=== 1 && <Center></Center>
        }

        {
            this.state.current=== 2 && <Cinema></Cinema>
        }
        {
            this.which()
        }
          <ul>
          {
              this.state.list.map((item,index)=>
                <li key={item.id} 
                className = {this.state.current === index? 'active':'secondaryactive'}
                onClick={()=>this.handleclick(index)}>{item.text}</li>)
          }</ul></div>
    )
  }
  handleclick(index){
      console.log(index)

      this.setState({
          current:index
      })
  }
}
