import React, { useState } from 'react';
export default function Notes() {

  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const [displayHeading, setDisplayHeading] = useState('Notes Heading')
  const [displayDes, setDisplayDes] = useState('Notes Description')
  const headingChange = (e) => {
    setHeading(e.target.value)
  }
  const descriptionChange = (e) => {
    setDescription(e.target.value)
  }

  let ol = document.getElementsByTagName('ol')[0]
  let loading = document.getElementById('loading')
  let noteBtn = document.getElementById('noteBtn')
  const addVal = () => {
    loading.classList.add('spinner-border', 'spinner-border-sm')
    noteBtn.innerHTML = "Adding"


    setDisplayHeading(heading)
    setDisplayDes(description)
    setTimeout(() => {
      loading.classList.remove('spinner-border', 'spinner-border-sm')
      noteBtn.innerHTML = "Add"
    }, 2000)

  }

  const delBtn = () => {
    ol.style.display = "none"
  }
  return (
    <>

      <h2 style={{ width: "92%", margin: "auto" }} className="my-4">Add Notes</h2>
      <div className="form-floating mb-3 my-4">


        <input onChange={headingChange} defaultValue={heading} type="text" className="form-control px-3" id="floatingInput" placeholder="name@example.com" style={{ width: "92%", margin: "auto" }} />
        <label htmlFor="floatingInput" className="mx-4">Notes Heading</label>




      </div>
      <div className="form-floating">


        <input onChange={descriptionChange} defaultValue={description} type="text" className="form-control px-3" id="floatingInput" placeholder="name@example.com" style={{ width: "92%", margin: "auto" }} />
        <label htmlFor="floatingInput" className="mx-4">Notes Description</label>





      </div>


      <button onClick={addVal} className="btn btn-primary btn-lg my-4 mx-3" style={{ width: "92%", margin: "auto" }} >
        <span className="" id="loading" role="status" aria-hidden="false"></span> <span id="noteBtn">  Add</span></button>








      <h2 style={{ width: "92%", margin: "auto" }} className="my-4">Notes</h2>

      <ol className="list-group list-group-numbered my-4" style={{ width: "92%", margin: "auto", }}>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{displayHeading}</div>
            {displayDes}
          </div>
          <button className="btn btn-sm btn-danger btn-rounded my-3" onClick={delBtn}><i className="fa fa-check-circle" style={{ fontSize: "16px" }}></i></button>
        </li>

      </ol>


    </>


  )
}