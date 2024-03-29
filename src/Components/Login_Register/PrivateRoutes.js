import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
export let auth={'token': JSON.parse(window.localStorage.getItem("token") || false)}
const PrivateRoutes=()=> {
  return (
    auth.token ? <Outlet/> : <Navigate to="/login-register"/>
  )
}

export default PrivateRoutes;