import { createStore } from "redux"
// import blogReducer from "./blogReducer"
import blogPostReducer from "./blogReducer"
import { configureStore } from "@reduxjs/toolkit"

// const store = createStore(blogReducer)
const store = configureStore({
  reducer: {
    posts: blogPostReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store