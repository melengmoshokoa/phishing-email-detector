import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
            <div className="Container"> 

                <div className="Header"> 
                </div>
                    <dic className="Welcome">
                        <h2 className="typing-effect">PhishCheck</h2>
                        <p className="typing-effect2">Don't Get Caught in their Net!</p>
                    </dic>
                    <div className="Buttons">
                        <button onClick={() => navigate('/check-email')}>Check Your Email</button>
                        <button onClick={() => navigate('/about')}>About Us</button>
                    </div>
               
            </div>
    );
}

export default LandingPage;
