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
            <p>Address: 1674 South Haven Parkway, West Haven UT, 84401</p>
            <p>Email: bransenerickson02@gmail.com</p>
            <p>Phone: 801-444-1215{contactInfo.phone}</p>
            <p><a href= "https://www.linkedin.com/in/bransen-erickson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
    );
}

