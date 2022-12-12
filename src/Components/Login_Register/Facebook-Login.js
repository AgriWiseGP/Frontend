import React, {useState, useEffect} from 'react'
import FacebookLogin from 'react-facebook-login';

const Facebooklogin = (props) => {
    const [showLoginBtn, setShowLoginBtn]=useState(true);
    const [showLogoutBtn, setShowLogoutBtn]=useState(false);
    const [accessToken, setAccessToken]= useState(JSON.parse(window.localStorage.getItem('token') || false))
    const componentClicked = (data)=>{
        console.log("data", data)
    }
    const responseFacebook = (response) => {
        setAccessToken(window.localStorage.setItem('token', JSON.stringify(response.accessToken === "null" ? false : true )));
        setShowLoginBtn(false);
        setShowLogoutBtn(true);
    }

    const logout=(e)=>{
        e.preventDefault();
        window.FB.logout((res)=>{
            console.log(res)
        });
        setShowLoginBtn(true);
        setShowLogoutBtn(false);
    }
   return (
    <>
        {showLoginBtn?
        <FacebookLogin
            appId="2973922999570345"
            autoLoad={false}
            textButton= "f"
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} 
            cssClass="facebook"
        />: null
        }
        {
            showLogoutBtn?
            <button onClick={logout}>{props.t("logout.1")}</button>
            :null
        }
    </>
  )
}
export default Facebooklogin
