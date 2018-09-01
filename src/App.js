import React, { Component } from 'react';
import Time from './timer'
import Btn from './btn'
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      ms:0,
      isOn: false,
      
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  timer =setInterval(
    () => {
      if(this.state.isOn)
    this.setState({
      ms: this.state.ms+1000
    })
  },
  1000
)
  
startTimer() {
  console.log("start")
  this.setState({
    isOn: true,
    
  })
  }
  stopTimer() {
    console.log('sdqsd')
    this.setState({isOn: false})

  }
  resetTimer () { 
    this.setState ({ms: 0, isOn: false}) 
  }
  render() {
    return (

       <div>
        <Time ms={this.state.ms} />
        <Btn start={this.startTimer} isOn={this.state.isOn} stop={this.stopTimer} reset={this.resetTimer} />
      </div>
        
      
    );
  }
}

export default App;
