import { ActionTypes } from "../constants/actionTypes";
const initialState = {
    allFiles:{},
    reportFiles:{},
    priscriptionFiles:{},
 };
 export const fileReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case(ActionTypes.UPLOAD_FILE):
      return {...state,allData:payload}
       default:
          return state;
    }
 }