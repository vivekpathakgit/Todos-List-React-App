import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be blank')
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
  return (

    <div className="container my-4 ">
        <h3 className="text-center">Add Todo</h3>
        <form>
  <div className="mb-3">
    <label  className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Task Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={submit}>Add</button>
</form>
    </div>

  )
}
