import React from 'react'

function Home(props) {
  const onLogoutSuccess=()=>{
        console.log("you have signed out successfully")
        window.localStorage.setItem('token', "null")
    }
  return (
    <div> 
      <button onClick={onLogoutSuccess}>{props.t("logout.1")}</button>
    </div>
  )
}

export default Home