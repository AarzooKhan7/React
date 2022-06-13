import React, { useState } from 'react';
export default function Blogs(){
  const [noteHeading, setNoteHeading] = useState("Sub Heading")

const [desHeading, setDesHeading] = useState("Description")

function settingNoteHeading() {
    setNoteHeading()
    setDesHeading()

  }
    
  
  
  
  
  
  return (
   <>

     <h2 style={{width:"92%", margin:"auto"}} className="my-4">Add Notes</h2>
<div className="form-floating mb-3 my-4">
  <input  type="text" className="form-control" id="floatingInput" placeholder="Title" style={{width:"92%", margin:"auto"}} onChange={event => setNoteHeading(event.target.value)}/>
  <label htmlFor="floatingInput" className="mx-4">Title</label>
</div>
<div className="form-floating">
  <textarea row="6" type="text" className="form-control" id="floatingPassword" placeholder="Description" style={{width:"92%", margin:"auto"}} onChange={event => setDesHeading(event.target.value)}></textarea>
  <label htmlFor="floatingPassword" className="mx-4">Description</label>

  
</div>


<button className="btn btn-primary btn-lg my-4 mx-3" style={{width:"92%", margin:"auto"}} onClick= {settingNoteHeading}>Add</button>
  







<h2 style={{width:"92%", margin:"auto"}} className="my-4">Notes</h2>
     
   <ol className="list-group list-group-numbered my-4" style={{width:"92%", margin:"auto"}}>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{noteHeading}</div>
      {desHeading}
    </div>
    <button className="btn btn-sm btn-primary btn-rounded my-3"><i className="fa fa-check-circle" style= {{fontSize:"16px"}}></i></button>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <button className="btn btn-sm btn-primary btn-rounded my-3"><i className="fa fa-check-circle" style= {{fontSize:"16px"}}></i></button>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item 
    </div>
    
<button className="btn btn-sm btn-primary btn-rounded my-3"><i className="fa fa-check-circle" style= {{fontSize:"16px"}}></i></button>
  </li>
</ol>
   
   
   </>
    
  )
      }