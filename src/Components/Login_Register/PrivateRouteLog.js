import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
import {auth} from './PrivateRoutes'
const PrivateRouteLog = () => {
  console.log(auth,"trr")
    return (
      auth.token ?  <Navigate to="/home"/> : <Outlet/>
    )
}
export default PrivateRouteLog