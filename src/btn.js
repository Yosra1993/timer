import React, { Component } from 'react';
import './btn.css';

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
       <div className='btn btn-outline-secondary'>
        <input type='button' value='Start' onClick={this.Onclick()} />
        <input type='button' value='Reset' onClick={this.reset()}/>
      </div>
        
      
    );
  }
}

export default Btn;
