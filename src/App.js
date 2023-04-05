import React, { Component } from 'react'
import Profile from './Profile'

import Counter from './Counter';
export default class AppClass extends Component {
  
  
    constructor(props){
        super(props)
        this.state={
          photo:<img src='Profile1.png' alt='profile' width={'100px'} height={'80px'}/>,
          name:"houyem",
          lastName:"yazidi",
          profession:"developer",
          
            show:false
        }
    }
    
    show=()=>{
this.setState({ show:!this.state.show})
    }
  render() {
    return (
      <div style={{backgroundColor:'white' }}>
       <Counter/>
       {this.state.show? <Profile name={this.state.name} lastName={this.state.lastName} profession={this.state.profession} photo={this.state.photo}/>:null}
        <button onClick={this.show} style={{backgroundColor:'green' }}>show me </button>
      </div>
    )
  }
}
