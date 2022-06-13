import React from "react";
import Time from '../Pages/Time'
export default function Hero(){
 let myStyle= {
   width:"100%"
 }
 return (
    <>
<Time />


    <div className="card text-center my-4" style= {{width:"92%", margin:"auto"}}>
      <img src="images.jpeg" className="card-img-top" alt="logo" style= {myStyle}/>
  <div className="card-header">
    The Home Page announcement= "The Deployment Of React Js
  </div>

      
  <div className="card-body" >
    <h5 className="card-title">{props.announcement}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>


      <div className="card my-4" style= {{width:"92%", margin:"auto"}}>
  <img src="images.jpeg" className="card-img-top" alt="logo" style= {myStyle}/>
  <div className="card-body">
    <h5 className="card-title">React Js Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>




<ol className="list-group list-group-numbered my-4" style= {{width:"92%", margin:"auto"}}>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
      





    </>
  )
}