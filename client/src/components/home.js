/* eslint-disable no-unused-vars */


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"
import Navbar from "./navbar";
import Footer from "./footer"

export default function Home() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    return (
        <body>
       {/* navbar */}
       <Navbar />
       {/* title */}
        <div className="home-hero text-center">
            <div className="background">
                <h1>Bransen D. Erickson</h1>
                <a className="home-button" href= "/about">Enter</a>
            </div>
        </div>
            {/* footer */}
            <Footer class="Footer"/>
            {/* title */}
        </body>
    );
}
