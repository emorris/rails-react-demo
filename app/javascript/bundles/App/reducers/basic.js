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
      return {
        ...state,
        messageList: [...state.messageList.slice(0, action.index), ...state.messageList.slice(action.index + 1)]
      }
    case EDIT_MESSAGE:
      return {
        tempTxt: state.messageList[action.index],
        messageList: [...state.messageList.slice(0, action.index), ...state.messageList.slice(action.index + 1)]
      }
    case RESET_VIEW:
      return initState
    default:
      return state
  }
}
