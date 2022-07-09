import React from "react";
import { useState } from "react";
import "./SignInBody.css";


function SignInBody(){

    // const displaySingUpPage = () => {
    //     var i = document.getElementById("p");
    //     i.remove();
    // }



    const [ShowSignInBox, setShowSignInBox] = useState(true);
    return(
        <>
            {ShowSignInBox ? (
                <div className="signinbody_container">
                {/* <img src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
                    alt="background_image">
    
                    </img> */}
                    <div className="signinbody_form" id="p">
                        <p className="signinbody_title">Sign In</p>
                        <input type="email" placeholder="Email" required></input>
                        <input type="password" placeholder="Password" required></input>
                        <button>Sign In</button>
                        <button>Login as Guest User</button>
                        {/* <p className="signinbody_text">
                            New to Movie App? <span onClick={displaySingUpPage}>Sign up now.</span>
                        </p> */}
                         <p className="signinbody_text">
                            New to Movie App?{" "}
                            <span onClick={()=>setShowSignInBox(false)}>Sign up now.</span>
                        </p> 
                    </div>
    
            </div>
            ) : (
                <div className="signinbody_container">
            {/* <img src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
                alt="background_image">

                </img> */}
                <div className="signinbody_form" id="p">
                    <p className="signinbody_title">Sign Up</p>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" required></input>
                    <input type="password" placeholder="Password" required></input>
                    <button>Sign Up</button>
                    <button>Login as Guest User</button>
                    {/* <p className="signinbody_text">
                        New to Movie App? <span onClick={displaySingUpPage}>Sign up now.</span>
                    </p> */}
                     <p className="signinbody_text">
                        Have an account?{" "} 
                        <span onClick={()=> setShowSignInBox(true)}>SignIn Now.</span>
                    </p> 
                </div>

        </div>
            )}
        
        
        
        
        
        
        </>



    );
}

export default SignInBody;