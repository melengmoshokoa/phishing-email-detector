import React from 'react';
import './EmailCheck.css'; 

function EmailCheck() {
    return (
            <div className="Container"> 
                    <h1 className="Header">PhishCheck</h1>
                    <div className="InputWords">
                        <h2>Paste the content of your email in the bow below</h2>
                    </div>
                    <div className="InputBox">
                       <textarea></textarea>

                      
                    </div>
                    <button className='ButtonBox'>Check Your Email</button>
            </div>
    );
}

export default EmailCheck;
