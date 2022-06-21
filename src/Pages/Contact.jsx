import React, { useState } from 'react';
export default function Contact() {

  const [data, setData] = useState({ name: '', email: '' });
  const [displayData, setDisplayData] = useState('');

  const submit = (e) => {
    e.preventDefault()
    setDisplayData(data)
  }

  return (
    <>

      <form onSubmit={submit} >


        <input defaultValue={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="form-control my-4" style={{ width: "92%", margin: "auto" }} type="text" required placeholder="Name" />



        <input defaultValue={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="form-control my-4" style={{ width: "92%", margin: "auto" }} type="email" placeholder="Email" required />



        <button type="submit" className="btn btn-dark my-3 mx-3">Set</button>

      </form>







      <h1>{displayData.name}</h1>
      <h1>{displayData.email}</h1>




    </>

  )
}