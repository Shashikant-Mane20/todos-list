import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc,setdesc] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Please enter title and description");
            
        }
        addTodo(title,desc);

    }
  return (
    <div className='container'>
      <>
      <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit ={submit}>
  <div className="form-group mb-3">
    <label htmlFor="title">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
     className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title"/>
    
  </div>
  <div className="form-group mb-3">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}}
    className="form-control" id="desc" placeholder="Enter description"/>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
</form>
</div>
      </>
      
    </div>
  )
}

export default AddTodo
