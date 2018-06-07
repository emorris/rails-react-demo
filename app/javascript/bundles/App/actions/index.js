export const ADD_MESSAGE = "ADD_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
export const EDIT_MESSAGE = "EDIT_MESSAGE"
export const SET_TEMP_MESSAGE = "SET_TEMP_MESSAGE"
export const RESET_VIEW = "REMOVE_MESSAGE"


export const setTempMessage = (txt) => {
  return {
    type: SET_TEMP_MESSAGE,
    txt
  }
}

export const addMessage = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const removeMessage = (txt) => {
  return {
    type: REMOVE_MESSAGE,
    txt
  }
}


export const resetView = () => {
  return {
    type: RESET_VIEW
  }
}
