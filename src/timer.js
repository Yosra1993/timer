import React from 'react';
import './timer.css';

class Time extends React.Component{
constructor(props)
{
  super(props)
  this.Convert = this.Convert.bind(this);

}

Convert()
{ let ms=this.props.ms
  
     let hours   = Math.floor(((ms/1000)/60)/60);
    let minutes = Math.floor(((ms/1000)/60)%60);
    let seconds = Math.floor((ms/1000)%60);
    
  return (hours.toString().padStart(2, "0")+':'+ minutes.toString().padStart(2, "0") +':'+ seconds.toString().padStart(2, "0"))
}
render()
 { return (  <div className="time">
    
                <p className='time1'>{this.Convert(this.props.ms)}</p>
    
                <div className='container'>
                      <p className="hour">Hour</p>
                      <p className="seconde">Seconde</p>
                      <p className="minute"> Minute </p>
                </div>
            </div>
  )
}
}


export default Time ;