const expressAsyncHandler = require("express-async-handler");
const Todo = require("../model/todomodel");


const gettodos = expressAsyncHandler(async(req,res)=>{
   const gettodos = await Todo.find()
   if(!gettodos){
    res.status(401)
    throw new Error("Something went wrong")
   }
   res.status(200)
   res.json(gettodos)
   
})
const gettodo = expressAsyncHandler(async(req,res)=>{
    const gettodo = await Todo.findById(req.params.id)
    if(!gettodo){
        res.status(401)
        throw new Error("Something went wrong")
    }
    res.status(200)
    res.json(gettodo)
})
const addtodo = expressAsyncHandler(async(req,res)=>{
    const {title, description} = req.body
    if(!title || !description){
     res.status(401)
     throw new Error("Please fill all the details")
    }
    const newtodo = await Todo.create({
        title,
        description
    })
    if(!newtodo){
        res.status(401)
        throw new Error("Todo not created")
    }
    res.status(201)
    res.json(newtodo)
})
const updatetodo = expressAsyncHandler(async(req,res)=>{
   const updatetodo = await Todo.findByIdAndUpdate( req.params.id,  req.body, {new : true})
   if(!updatetodo){
    res.status(401)
    throw new Error("todos not updated")
   }
   res.status(200)
   res.json(updatetodo)
})
const removetodo = expressAsyncHandler(async(req,res)=>{
   const removetodo = await Todo.findByIdAndDelete(req.params.id)
   if(!removetodo){
    res.status(401)
    throw new Error("Todos not deleted")
   }
   res.status(200)
   res.json("todo deleted successfully")
})

module.exports = {gettodos, gettodo, addtodo, updatetodo, removetodo}