import React from 'react';
import Realtime from '../Components/Realtime'
export default function Time(){

  let currentTime = new Date();
  let hours=currentTime.getHours();
  let message="";
  let timeStyle= {fontWeight:"bold"};
  
  
  if(hours>1 && hours<=11){
    message="Good Morning ! "
    timeStyle.color="green";


  }else if(hours>11 && hours<=15){
    message="Good Afternoon !"
    timeStyle.color="yellow"
    
    

  }else if(hours>15 && hours<=19){
    message="Good Evening !"
    timeStyle.color="orange";
  }else if(hours>19 && hours<24){
    message="Good Night !"
    timeStyle.color="purple";
  }

  
  return (
   <>

<h1 className="my-4 mx-3">Hello <span style={timeStyle}>{message}</span></h1>
     
<Realtime />

     
   </>
    
  )
}