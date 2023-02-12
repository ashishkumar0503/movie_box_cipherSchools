import React from "react";
import "./LandingPage.css";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent";
import Navbar from "../../components/Navbar/Navbar";

export default function LandingPage(){


    return(

        <div className="landingpage_container">
            <Navbar/>
            <LandingPageContent/>
        </div>
    );
}