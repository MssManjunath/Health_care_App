import { ActionTypes } from "../constants/actionTypes";

export const uploadFile = (body) =>{
    return async dispatch =>{
        let respnd = await fileUpload(body);
    if(respnd.status === "200"){
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:respnd?.userId
        })
    }
    else{
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:null
        })
    }
    }
}