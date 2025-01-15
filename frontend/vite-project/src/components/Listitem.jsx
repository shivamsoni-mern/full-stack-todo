import React from 'react'
import "./Listitem.css"
import { useDispatch, useSelector } from 'react-redux'
import { deletetodos, edittodo, removetodo } from '../features/slice'

const Listitem = ({todo}) => {
  const  {issucess} = useSelector((state)=> state.todolist)
  const dispatch = useDispatch()
  const handledelete = (id)=>{
    dispatch(deletetodos(id))
  if(issucess){
    dispatch(removetodo(id))
  }
  }

  const handleedit = (todo)=>{
    dispatch(edittodo(todo))
  } 
  return (
    <li className="task-item">
    <div className="task-content">
      <h3>title : {todo.title}</h3>
      <p> description : {todo.description}</p>
    </div>
    <div className="task-actions">
      <button onClick={(e)=> handleedit(todo)} className="edit-btn">Edit</button>
      <button onClick={(e)=> handledelete(todo._id)}  className="delete-btn">Delete</button>
    </div>
  </li>
  )
}

export default Listitem
