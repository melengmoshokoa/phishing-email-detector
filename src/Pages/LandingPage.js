import React from 'react';
import './LandingPage.css';  // This will be your custom CSS file

function LandingPage() {
    return (
            <div className="Container"> 

                <div className="Header"> 
                </div>
                    <dic className="Welcome">
                        <h2 className="typing-effect">PhishCheck</h2>
                        <p className="typing-effect2">Don't Get Caught in their Net!</p>
                    </dic>
                    <div className="Buttons">
                        <button>Check Your Email</button>
                        <button>What is Phishing</button>
                        <button>Why us?</button>
                    </div>
               
            </div>
    );
}

export default LandingPage;
