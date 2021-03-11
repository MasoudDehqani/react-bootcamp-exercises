import { createStore } from "redux"
import blogReducer from "./blogReducer"

const store = createStore(blogReducer)

export default store