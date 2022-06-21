import React from 'react';

export default function NotesList(props){
  return(
    <>
    
  <ol className="list-group my-3" style= {{width:"93%", margin:"auto"}}>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.text}</div>
     
    </div>
    <button className="btn btn-sm btn-danger btn-rounded my-3" onClick={()=>{
      props.onSelect(props.id)
    }}><i className="fa fa-check-circle" style={{ fontSize: "16px" }}></i></button>
  </li>
  
  
</ol>
    </>
  )
}