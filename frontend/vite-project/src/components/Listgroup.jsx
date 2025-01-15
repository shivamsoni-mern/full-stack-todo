import React, { useEffect } from 'react'
import "./Listgroup.css"
import Listitem from './Listitem'
import { useDispatch, useSelector } from 'react-redux'
import { gettodos } from '../features/slice'


const Listgroup = () => {
    const {alltodos, isloading, iserror} = useSelector((state)=> state.todolist)
    const dispatch  = useDispatch()
    useEffect(()=>{
        dispatch(gettodos())
    }, [])
   
    if (isloading){
        return <h2 className='hello'> loading plz wait</h2>
        
      }
      if (iserror){
        return <h2 className='hello'> something went wrong...</h2>
      }

  return (
   <>
   
   
   <div className="list-container">
      <h2 className='hello'> Your Tasks</h2>
      <ul className="task-list">
        {
              alltodos.map((todo)=>{
                return <Listitem key={todo._id} todo={todo} />
              })
        }
      </ul>
    </div>
   
   </>
  )
}

export default Listgroup
