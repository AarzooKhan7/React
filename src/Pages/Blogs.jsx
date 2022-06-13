import React, { useState } from 'react';
export default function Blogs() {
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



  const [name, setName] = useState("Sub Heading")
  function settingName() {
    setName("Larry Page")
  }


  return (
    <>
      <ol className="list-group" id="ol">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            Content for list item
    </div>
          <span className="badge bg-primary rounded-pill my-3">1</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            Content for list item
    </div>
          <span className="badge bg-primary rounded-pill my-3">4</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            Content for list item
    </div>
          <span className="badge bg-primary rounded-pill my-3">7</span>
        </li>
      </ol>






      <button className="btn btn-sm btn-primary" onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button className="btn btn-sm btn-primary" onClick={increamentCount}>+</button>





      <button className="btn btn-danger" onClick={settingName}>Setting Name</button>




      
    </>

  )
}