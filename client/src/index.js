import React from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import "./stylesheets/main.scss";

// import components
// Home page component
import Home from "./components/home.js";
import Contact from "./components/contact.js";

function App() {
    axios.defaults.withCredentials = true;
    return (
        <Routes>
            {/* home page route */}
            <Route
                path="/" element={<Home />}
            />
             {/* contact page route */}
             <Route
                path="/contact" element={<Contact />}
            />
        </Routes>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
