import React, { useState } from 'react';
export default function Contact() {
  const [name, setName] = useState(' ');
  const [btnName, setBtnName] = useState(' ')
  const inputValue = (e) => {

    setName(e.target.value)


  }
  const onSubmit = () => {
    setBtnName(name)
  }
  return (
    <>

      <h1 className="my-4 mx-3">{btnName}</h1>

      <input onChange={inputValue} value={name} type="text" className="form-control my-4 mx-3" style={{ width: "90%", margin: "auto" }} />

      <button className="btn btn-primary my-4 mx-3" onClick={onSubmit}>Submit</button>

    </>

  )
}