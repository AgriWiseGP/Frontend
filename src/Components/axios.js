import axios from "axios";
const axiosInstance= axios.create({
  baseURL: "https://a763-156-203-27-183.ngrok-free.app",
  headers:{
    Authorization : localStorage.getItem("token")
    ? `JWT ${localStorage.getItem("access_token")}`   
    : null
  }
});

export default axiosInstance