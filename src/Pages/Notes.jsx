import React, { useState } from 'react';
import NotesList from '../Components/NotesList'
export default function Notes() {




  

const [note, setNote] = useState('')
const [displayNote, setDisplayNote]= useState([])


let loading=document.getElementById('loading');
let noteBtn=document.getElementById('noteBtn');
let noteTitle=document.getElementById('noteTitle');

const submit= ()=>{
  setNote("")
  setDisplayNote((oldItems)=>{
    return [...oldItems, note]


})
  
  noteTitle.style.display= "block"
  loading.classList.add("spinner-border", "spinner-border-sm");
  noteBtn.innerHTML= "Adding"
  setTimeout(()=>{
loading.classList.remove("spinner-border", "spinner-border-sm");
    noteBtn.innerHTML= "Add"

},
1000)



}


const delBtn= (id)=>{
  setDisplayNote((oldItems)=>{
return oldItems.filter((arrElem, index)=>{
  return index!==id
})
  })
}
  
  return (
    <>

      <h2 style={{ width: "92%", margin: "auto" }} className="my-4">Add Notes</h2>
    
      <div className="form-floating">


        <input  type="text" className="form-control px-3" id="floatingInput" placeholder="name@example.com" style={{ width: "92%", margin: "auto" }} onChange= {(e)=> setNote(e.target.value)} value= {note}/>
        <label htmlFor="floatingInput" className="mx-4">
          
          Notes
        </label>





      </div>


      <button className="btn btn-dark btn-lg my-4 mx-3" style={{ width: "92%", margin: "auto" }} onClick= {submit}>
        <span className="" id="loading" role="status" aria-hidden="false"></span> <span id="noteBtn">  Add</span></button>







      
<h2 style={{ width: "92%", margin: "auto", display:"none" }} className="my-4" id= "noteTitle">Notes</h2>

    



      
      {
        displayNote.map((data, index)=>{
return <NotesList text={data} key= {index} id= {index} onSelect= {delBtn}/>
})
      }


    </>


  )
}