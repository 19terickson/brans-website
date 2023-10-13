import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <footer class="footer">
            <div class="container">
            <div class="row">
                <div class="col">
                <img src="./images/CBDIcon.png" alt=""/>
                </div>
                <div class="col">
            </div>
            </div>
            </div>
            <div class="footer-bottom">
            <div class="container">
                <div class="row text-center">
                <div class="col-12">
                    <div class="footer-bottom__copyright">
                    &copy; Bransen Erickon 2023 All rights reserved.
                    </div>
                </div>
                </div>
            </div>
            </div>
            </footer>    
    );
}
