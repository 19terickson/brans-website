/* eslint-disable no-unused-vars */


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"

export default function Home() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    return (
        <div className="home-hero text-center">
            <div className="background">
                <h1>Bransen D. Erickson</h1>
                <h3>All About Me</h3>
                <a className="home-button" href= "/about">About Me</a>
            </div>
        </div>
    );
}
