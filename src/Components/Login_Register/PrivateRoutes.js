import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
export let auth={'token': false}
const PrivateRoutes=()=> {
  return (
       auth.token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;