import React, { Component } from 'react';
import './btn.css';
import { Button } from 'react-bootstrap';

class Btn extends Component {
  constructor(props)
{
  super(props)
  this.Onclick = this.Onclick.bind(this);
  this.reset = this.reset.bind(this);
}
Onclick()
{
  if(this.props.isOn==false)
  return this.props.start
  return this.props.stop
}
reset()
{
  return this.props.reset
}

  render() {
    return (
       <div className='btn'>
        <Button bsStyle="info" onClick={this.Onclick()}>Start</Button>
        <input className='btn btn-info'type='button' value='Reset' onClick={this.reset()} style={{marginLeft:'20px'}}/>
    
      </div>
        
      
    );
  }
}

export default Btn;
