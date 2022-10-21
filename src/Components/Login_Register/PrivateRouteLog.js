import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
import {auth} from './PrivateRoutes'
const PrivateRouteLog = () => {
    return (
      auth.token ?  <Navigate to="/home"/> : <Outlet/>
    )
}
export default PrivateRouteLog