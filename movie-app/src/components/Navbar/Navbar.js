import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useAuth0} from "@auth0/auth0-react";


function Navbar({showSignInButton, logOut, show}){

    const {user, loginWithRedirect} = useAuth0();

    const {logout} = useAuth0();

    const navigate = useNavigate();

    const [dark, setDark] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setDark(true);
        } else {
            setDark(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        };
    }, []);

    const goToSignInPage = () => {
     //   navigate("/sign-in");
        loginWithRedirect();
    };

    return(

        <div className="navbar_container">
            <img
                className="navbar_logo"
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBT3N2hYRiW7Wn2jxZsOz_wNaHuhISSgzBag&usqp=CAU"
                src="data:image/png;base64,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"
                alt="Logo"
            />
            {/* <Link to="/sign-in">
            <button className="navbar_button">SignIn</button>
            </Link> */}

            {/* <button className="navbar_button" onClick={goToSignInPage}>SignIn</button> */}
            
            {showSignInButton === false ? (
                " "
            ) : (
                <button className="navbar_button" onClick={goToSignInPage}>SignIn</button>
            )}

            {logOut && (

                <>
                    <h4 className="user_name"> {user && `Hi, ${user.name}`}</h4>
                    <p onClick={() => logout({
                     returnTo: window.location.origin,
                    })
                    }
                     className="navbar_icon">
                    <AccountCircleIcon />
                </p>
            
                
                </>
                

                )}
        </div>
    );
}

export default Navbar;