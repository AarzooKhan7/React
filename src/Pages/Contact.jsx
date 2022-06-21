import React, { useState } from 'react';
export default function Contact() {


const [firstName, setFirstName] = useState('');
const formSubmit= (e)=>{
  e.preventDefault()
  const fName=e.target.firstName.value;
  setFirstName(fName)
}

  return (
    <>

      


      

      <form onSubmit= {formSubmit}>
        
        <input defaultValue= " " name= "firstName" className= "form-control my-4" style= {{width:"92%", margin:"auto"}}/>


        


        <button className= "btn btn-primary mx-3 my-3">Submit</button>



      
      </form>





<h1 className= "mx-3 my-4">{firstName}</h1>
      
    </>

  )
}