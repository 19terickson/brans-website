import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Contact() {
    const [contactInfo, setContactInfo] = useState({});

    useEffect(() => {
        async function fetchContactInfo() {
            try {
                const response = await axios.get('http://localhost:5000/contact');
                setContactInfo(response.data);
            } catch (error) {
                console.error("Error fetching contact info:", error);
            }
        }

        fetchContactInfo();
    }, []);

    return (
        <div>
            <h2>Contact Information</h2>
            <p>Email: {contactInfo.email}</p>
            <p>LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
            <p>Phone: {contactInfo.phone}</p>
        </div>
    );
}

