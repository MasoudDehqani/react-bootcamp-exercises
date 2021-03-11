import { DataType, articles } from "./data"

export enum ActionTypes {DELETE = "DELETE"}

export interface DeleteType {
  type: ActionTypes.DELETE;
  payload: string;
}

export const deleteActionCreator = (id: string) => {
  return {type: ActionTypes.DELETE, payload: id}
}

export default function blogReducer(state = articles, action: DeleteType): DataType[] {
  switch(action.type) {
    case ActionTypes.DELETE:
      return state.filter( post => action.payload !== post.id)

    default:
      return state
  }
}