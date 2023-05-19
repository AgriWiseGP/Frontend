import axios from "axios";
const axiosInstance= axios.create({
  baseURL: "https://e34f-156-203-11-225.ngrok-free.app",
  headers:{
    Authorization : localStorage.getItem("token")
    ? `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0MTcxNDEwLCJqdGkiOiJlYzc0ZDU0MTlhMGI0M2QwOTUyNzhhYzc0ZGJjMzg1MSIsInVzZXJfaWQiOjF9.tOJNHVtAqTbKIeppdMoXctLLB7nAo2nKj7rJtZQaVg8`   
    : null
  }
});

export default axiosInstance