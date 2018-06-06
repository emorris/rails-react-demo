import {

} from "../actions/index"

export const initState = {
}

function radiusToZoom(radius){
    return Math.round(14-Math.log(radius)/Math.LN2);
}
export default function googleMapsReducer (state = initState, action){
  switch(action.type){
    default:
      return state
  }
}
