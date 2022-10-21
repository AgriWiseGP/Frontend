import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
import {isToken} from './Google-Login.js'
export let auth={'token': isToken !== "null" ? true : false};

const PrivateRoutes=()=> {
  return (
    auth.token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;