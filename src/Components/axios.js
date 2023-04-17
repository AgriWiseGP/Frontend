import axios from "axios";
const axiosInstance= axios.create({
  baseURL: "https://5b49-41-35-222-85.ngrok-free.app/",
  headers:{
    Authorization : localStorage.getItem("token")
    ?'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMTEwNTM3LCJqdGkiOiI3NWM0OTRjNjI0OWU0YTNhODA4MDE4OTljMDFiYzU5MSIsInVzZXJfaWQiOjUzfQ.OBPS2fWn2nbpPfGfGhZsl8j1g4PEItQlzzkVPiGn36s' 
    : null
  }
});

export default axiosInstance