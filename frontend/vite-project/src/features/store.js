import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slice"

const store = configureStore({
    reducer : {
        todolist : todoslice
    }
})

export default store