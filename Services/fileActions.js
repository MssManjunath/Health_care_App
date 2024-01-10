import axios from "axios";

export const fileUpload = async (body) =>{
    axios.post('http://10.0.0.215:8080/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });  
      return res?.data;

}
