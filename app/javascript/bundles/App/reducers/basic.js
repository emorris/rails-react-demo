import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  RESET_VIEW,
  EDIT_MESSAGE,
  SET_TEMP_MESSAGE
} from "../actions/index"

export const initState = {
  tempTxt: "Text to Start",
  messageList:[],

}

export default function googleMapsReducer (state = initState, action){
  switch(action.type){
    case SET_TEMP_MESSAGE:
      return {...state, tempTxt: action.txt}
    case ADD_MESSAGE:
     return {
       ...state,
       messageList:  [state.tempTxt, ...state.messageList]
     }
    case REMOVE_MESSAGE:
      let listCopy =  state.messageList.splice(0)
      return {
        ...state,
        messageList: listCopy.filter(txt => txt == action.txt)
      }
    case RESET_VIEW:
      return initState
    default:
      return state
  }
}
