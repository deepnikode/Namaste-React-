import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header =()=>
    {
        console.log("Header");

        const [btnNameReact, setBtnNameReact]=useState("Login");

        return(

            <div className="header">

                <div className="logo-container">
                    <img className ="logo "src={LOGO_URL}/>
                </div>
            
                <div className="nav-items">
                    <ul>

                        <li>Home</li>
                        <li>About-us</li>
                        <li>Contact-us</li>
                        <li>Cart</li>
                        
                        <button 
                        className="login"
                        onClick={
                            ()=>{

                                btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                                
                                //                              Same same hai!!!
                                //  if(btnNameReact==="Login")
                                //     {    setBtnNameReact("Logout")   }
                                //  else
                                //     {    setBtnNameReact("Login")    }
                                
                                }
                            
                        }>{btnNameReact}</button>
                        
                    </ul>
                </div>

            </div>
        )
    }

    export default Header;