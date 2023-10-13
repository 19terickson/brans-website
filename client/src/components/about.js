import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact() {
    const [contactInfo, setContactInfo] = useState({});

    useEffect(() => {
        async function fetchContactInfo() {
            try {
                const response = await axios.get('http://localhost:5000/about');
                setContactInfo(response.data);
            } catch (error) {
                console.error("Error fetching contact info:", error);
            }
        }

        fetchContactInfo();
    }, []);

    return (
        <div>
            <h2>About Me</h2>
        </div>
    );
}