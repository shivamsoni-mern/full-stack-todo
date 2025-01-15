import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Listgroup from './components/Listgroup'
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <>
    <Navbar/>
    <Form/>
    <Listgroup />
    <ToastContainer />
    
    
    </>
  )
}

export default App
