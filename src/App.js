
import './App.css';
import React, { Component } from 'react'
import Profile from './Profile/Profile';

export default class App extends Component {
  state={
    isShow:true,
    count:0
  }
  handleFalse=()=>this.setState({isShow:!this.state.isShow})
  handlePlus=()=>this.setState({count:this.state.count+1})
  handleMoins=()=>this.state.count>0&&this.setState({count:this.state.count-1 })
  render() {
    return (
      <div className='btn'>
            <button onClick={this.handleFalse}>{this.state.isShow?"Hide":"Show"}</button>
        {this.state.isShow&&
      
          <>
                   <h1>{this.state.count}</h1>
        <button onClick={this.handlePlus} >+</button>
        <button onClick={this.handleMoins}>-</button>

          
        <Profile/>
          </>
        }
      </div>
    )
  }
}


