import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Bransen Erickson</a>
                <ul class="navbar-nav m-auto">
                    <NavLink
                        to="/"
                        className="nav-link nav-item"
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="/About"
                        className="nav-link nav-item"
                        >
                        About
                    </NavLink>
                    <NavLink
                        to="/Projects"
                        className="nav-item nav-link"
                        >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/Contact"
                        className="nav-item nav-link"
                        >
                        Contact
                    </NavLink>
                </ul>
            </div>
        </nav>
        
    );
}