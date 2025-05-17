import React from 'react';
import './AboutUs.css'; 
import { useNavigate } from 'react-router-dom';

function AboutUs() {

    const navigate = useNavigate();

    return (
            <div className="Container3"> 
                    <h1 className="Header">PhishCheck</h1>
                    <div className="InputWords">
                        <h1>ABOUT US</h1>
                    </div>

                    <div className="InputBox">
                <div className="BoxItem">
                   
                    <h3>What is Phishing?</h3>
                    <p>Phishing is a type of cyberattack where attackers trick users into revealing sensitive information
                    like passwords or banking details by pretending to be a trustworthy entity through email or other communication.
                    These messages often include malicious links or attachments.</p>
                </div>

                <div className="BoxItem">
                    
                    <h3>Our Model</h3>
                    <p>We built a logistic regression machine learning model that analyzes both the content and metadata of emails to determine whether a message is a phishing attempt. It provides a confidence score along with an explanation of the result.</p>
                </div>

                <div className="BoxItem">
                  
                    <h3>How It Works</h3>
                    <p>Users can upload an email file or paste email content into the system. The backend extracts features,
                    processes the text, and uses a trained model to classify the message as phishing or legitimate.
                    It also highlights suspicious patterns or phrases for transparency.</p>
                </div>

                
            </div>
                   <button className="ButtonBox"onClick={() => navigate('/')}>Home</button> 
            </div>
    );
}

export default AboutUs;
