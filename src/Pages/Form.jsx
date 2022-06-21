import React, { useState } from 'react';
export default function Form() {
function initialCount() {
    return 0
  }
const [count, setCount] = useState(initialCount());
function decrementCount() {
    setCount(count - 1);
  }
function increamentCount() {
    setCount(count + 1);
  }




const [data, setData] = useState({firstName:'', lastName:'', address:'', number:''})


const [displayData, setDisplayData] = useState('')
const submitName= (e)=>{
  e.preventDefault()
  setDisplayData(data)
}

  return (
    <>
      

      


      
<h1 className= "my-4 mx-3">Student Details</h1>

<input onChange= {(e)=> setData({...data ,firstName: e.target.value})} defaultValue= {data.firstName} className= "form-control mx-3 my-4" placeholder= "First name" style= {{width:"92%", margin:"auto"}} required/>



<input onChange= {(e)=> setData({...data, lastName: e.target.value})} defaultValue= {data.lastName} className= "form-control mx-3 my-4" placeholder= "Last name" style= {{width:"92%", margin:"auto"}}/>




<input onChange= {(e)=> setData({...data, address: e.target.value})} className= "form-control" placeholder= "Enter address" style= {{width:"92%", margin:"auto"}} type= "email" defaultValue= {data.email}/>



<input onChange= {(e)=> setData({...data, number: e.target.value})} className= "form-control my-4" placeholder= "Enter number" style= {{width:"92%", margin:"auto"}} type= "number" defaultValue= {data.number}/>



<div className="mx-3 my-4" >
<label>Age  </label>
<button className="btn btn-sm btn-primary" onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button className="btn btn-sm btn-primary" onClick={increamentCount}>+</button>
</div>
      


<button onClick= {submitName} className= "btn btn-info mx-3 my-3">Submit</button>

<h1 className= "mx-3 my-3">First Name: {displayData.firstName}</h1>
<h1 className= "mx-3 my-3">Last Name: {displayData.lastName}</h1>
<h1 className= "mx-3 my-3">Address: {displayData.address}</h1>
<h1 className= "mx-3 my-3">Number: {displayData.number}</h1>




      
    </>

  )
}