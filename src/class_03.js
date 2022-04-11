import React, { Component } from 'react'


class Child extends Component{
    render(){
        return <div>child</div>
    }
}


function Navbar(){
    return<div>navbar111
            <Child></Child>
        </div>
}

function Swiper(){
    return<div>swiper</div>
}
function Tabbar(){
    return<div>tabbar</div>
}


export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Swiper></Swiper>
          <Tabbar></Tabbar>
      </div>
    )
  }
}
