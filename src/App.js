import React, { Component } from 'react'
import Profile from './Profile'

//import Counter from './Counter';
export default class AppClass extends Component {
  
  
    constructor(props){
        super(props)
        this.state={
          photo:<img src='Profile1.png' alt='profile' width={'100px'} height={'80px'}/>,
          name:"houyem",
          lastName:"yazidi",
          profession:"developer",
          count:0,
            show:false,
            date: new Date()
        }
    }
    
    show=()=>{
this.setState({ show:!this.state.show})
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });}
  render() {
    return (
      <div style={{backgroundColor:'white' }}>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
       {this.state.show? <Profile name={this.state.name} lastName={this.state.lastName} profession={this.state.profession} photo={this.state.photo}/>:null}
        <button onClick={this.show} style={{backgroundColor:'green' }}>show me </button>
      </div>
    )
  }
}
