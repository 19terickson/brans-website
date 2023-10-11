/* eslint-disable no-unused-vars */


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    return (
        <div className="home-hero text-center">
            <div className="background">
                <h1>Algo Gauges</h1>
                <h3>Battle Of The Algorithms</h3>
                <a className="home-button" href="/testing">Fight</a>
            </div>
        </div>
    );
}
