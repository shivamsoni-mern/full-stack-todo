import React, { useEffect, useState } from 'react'
import "./Form.css"
import { useDispatch, useSelector } from 'react-redux'
import { addtodos, updatetodo } from '../features/slice'
const Form = () => {
    const {edit} = useSelector((state)=> state.todolist)
    const disptach = useDispatch()
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const handlesubmit = (e)=>{
        e.preventDefault()  
        if(edit.isedit){
            disptach(updatetodo({
                _id : edit.todo._id,
                title,
                description
            }))
        }
        else{
            disptach(addtodos({title, description}))
        }
        settitle("")
        setdescription("")


    }
    useEffect(()=>{
        settitle(edit.todo.title)
        setdescription(edit.todo.description)
    }, [edit])
  return (
    <>
    
    <div className="form-container">
      <h2>Create ToDo</h2>
      <form  onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
          type='textarea'
            id="description"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e)=>setdescription(e.target.value)}
            required
              />
        </div>
        <button className="btn-submit">Add Task</button>
      </form>
    </div>
    
    </>
  )
}

export default Form
