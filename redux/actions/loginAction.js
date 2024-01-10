import { ActionTypes } from "../constants/actionTypes";
import { userSignupService,userLoginService } from "../../Services/loginService";

export const userSignup = (userName,email,password) =>{
    let body = {
        userName:userName,
        email:email,
        password:password
    }

    return async dispatch =>{
        let respnd = await userSignupService(body);
        console.log(respnd)
        console.log(respnd?.userId)
    if(respnd.status === "201"){
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

export const loginUser = (email,password) =>{
    let body = {
        email:email,
        password:password
    }
    return async dispatch =>{
        let respnd = await userLoginService(body);
        console.log(respnd?.data)
    if(respnd.status === 200 && respnd?.data?.validate === true){
        dispatch({
            type:ActionTypes.LOGIN_ACTION,
            payload:respnd?.data?.userData
        })
    }
    else if(respnd.status === 200 && respnd?.data?.validate === false){
        dispatch({
            type:ActionTypes.LOGIN_ACTION,
            payload:{"validation":false}
        })
    }
    else{
        dispatch({
            type:ActionTypes.LOGIN_ACTION,
            payload:null
        })
    }
    }

}