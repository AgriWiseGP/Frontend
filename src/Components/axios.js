import axios from "axios";
const axiosInstance= axios.create({
  baseURL: "https://c5a8-197-41-188-223.ngrok-free.app/",
  headers:{
    Authorization : localStorage.getItem("token")
    ? `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1MDM2OTIzLCJqdGkiOiJkN2QzNTNkZDY1N2U0OTI1OTdhZTYzNjIxZGQ4Y2NhZCIsInVzZXJfaWQiOjR9.OGHR3ExlTu60thGl9Q2RLOGMkJMuT88yeWNvq9nI3eA`   
    : null
  }
});

export default axiosInstance