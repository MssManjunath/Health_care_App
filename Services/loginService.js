import axios from "axios";

export const userSignupService = async (body) =>{
    let res =  await axios.post("http://10.0.0.215:8080/user/create",body);
    return res?.data;

}

export const userLoginService = async (body) =>{
    console.log("Reachedddddddddddddddddd");
    let res =  await axios.post("http://10.0.0.215:8080/user/login",body);
    return res;
}