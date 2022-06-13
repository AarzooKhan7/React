import React from 'react';
import {useState} from 'react';
export default function Realtime(){
  let time = new Date().toLocaleTimeString();
  
const[currentTime, setCurrentTime] = useState(time);
  function update() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time)
  }
  setInterval(update, 1000)



  return (
   <>


<h3 className= "my-4 mx-3">
 Time :  {currentTime}
</h3>
     
   </>
    
  )
}