import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
    name : "todolist",
    initialState : {
        issucess : false,
        iserror : false,
        isloading : false,
        alltodos : [],
      
        edit : {
            todo : {},
            isedit : false
        },
       
    }, 
    reducers : {
        removetodo : (state, action)=>{
          
            return {
                
                ...state,
                alltodos : state.alltodos.filter((item)=>{
                    if(item._id !== action.payload){
                        return true
                    }
                })
            }
        },
        edittodo : (state, action)=>{
            return {
                ...state,
                edit : {
                    todo : action.payload,
                    isedit : true,
                }
            }
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(gettodos.pending, (state, action)=>{
            state.isloading = true
            state.iserror = false
            state.issucess = false
        })
        builder.addCase(gettodos.rejected, (state, action)=>{
            state.isloading = false
            state.iserror = true
            state.issucess = false
            state.message = action.payload
        })

        builder.addCase(gettodos.fulfilled, (state, action)=>{
            state.isloading = false
            state.iserror = false
            state.issucess = true
            state.alltodos = action.payload

        })
        builder.addCase(deletetodos.pending, (state, action)=>{
            state.isloading = true
            state.iserror = false
            state.issucess = false
        })
        builder.addCase(deletetodos.rejected, (state, action)=>{
            state.isloading = false
            state.iserror = true
            state.issucess = false
        })

        builder.addCase(deletetodos.fulfilled, (state, action)=>{
            state.isloading = false
            state.iserror = false
            state.issucess = true
            
        })
        builder.addCase(addtodos.pending, (state, action)=>{
            state.isloading = true
            state.iserror = false
            state.issucess = false
        })
        builder.addCase(addtodos.rejected, (state, action)=>{
            state.isloading = false
            state.iserror = true
            state.issucess = false
        })

        builder.addCase(addtodos.fulfilled, (state, action)=>{
            state.isloading = false
            state.iserror = false
            state.issucess = true
            state.alltodos = [...state.alltodos, action.payload]
            
        })
        builder.addCase(updatetodo.pending, (state, action)=>{
            state.isloading = true
            state.iserror = false
            state.issucess = false
        })
        builder.addCase(updatetodo.rejected, (state, action)=>{
            state.isloading = false
            state.iserror = true
            state.issucess = false
        })

        builder.addCase(updatetodo.fulfilled, (state, action)=>{
            state.isloading = false
            state.iserror = false
            state.issuccess = true
            state.alltodos = state.alltodos.map((item)=>{
                if (item._id === action.payload._id)
                {
                    return action.payload
                } else {
                    return item
                }
            })
            state.edit = {
                todo : {},
                isedit : false,
            }
           
        })
    }
})
export default slice.reducer
export const {removetodo, edittodo} = slice.actions

export const gettodos = createAsyncThunk("fetch/todos", async(_, thunkAPI)=>{
 
    try {
        const response = await axios.get("/api/todo/")
    console.log(response.data)
    return response.data
    } catch (error) {
        console.log(error)
    }
  
})

export const deletetodos = createAsyncThunk("delete/todos", async(id)=>{
  try {
    const response = await axios.delete("/api/todo/"+ id)
    return response.data
  } catch (error) {
    console.log(error)
  }

})
export const addtodos = createAsyncThunk("add/todos", async(formData)=>{
 try {
    const response = await axios.post("/api/todo/",formData)
    return response.data
 } catch (error) {
    console.log(error)
 }

})

export const updatetodo = createAsyncThunk("update/todos", async(updatedtodo)=>{
   try {
    const response = await axios.put("/api/todo/" + updatedtodo._id , updatedtodo);
    console.log(response.data)
   return response.data
   } catch (error) {
    console.log(error)
   }

    
})