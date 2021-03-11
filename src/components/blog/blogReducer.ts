import { createSlice } from "@reduxjs/toolkit"
import { DataType, articles } from "./data"

export enum ActionTypes {DELETE = "DELETE"}

export interface DeleteType {
  type: ActionTypes.DELETE;
  payload: string;
}

// export const deleteActionCreator = (id: string) => {
//   return {type: ActionTypes.DELETE, payload: id}
// }

// export default function blogReducer(state = articles, action: DeleteType): DataType[] {
//   switch(action.type) {
//     case ActionTypes.DELETE:
//       return state.filter( post => action.payload !== post.id)

//     default:
//       return state
//   }
// }

export interface BlogPostState {
  data: DataType[]
}

export const initialState: BlogPostState = {
  data: articles
}

const blogPostSlice = createSlice({
  name: "blogPost",
  initialState,
  reducers: {
    deletePost: (state: BlogPostState, action) => {
      state.data.splice(state.data.findIndex( item => item.id === action.payload ), 1)
    }
  }
})

export const { deletePost } = blogPostSlice.actions

export default blogPostSlice.reducer