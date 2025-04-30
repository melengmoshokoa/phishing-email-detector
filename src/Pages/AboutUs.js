import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
    return (
            <div className="Container"> 
                    <h1 className="Header">PhishCheck</h1>
                    <div className="InputWords">
                        <h1>ABOUT US</h1>
                    </div>

                    <div className="InputBox">
                <div className="BoxItem">
                    {/* Content for the first box */}
                    <h3>Box 1</h3>
                    <p>Some content for the first box.</p>
                </div>

                <div className="BoxItem">
                    {/* Content for the second box */}
                    <h3>Box 2</h3>
                    <p>Some content for the second box.</p>
                </div>

                <div className="BoxItem">
                    {/* Content for the third box */}
                    <h3>Box 3</h3>
                    <p>Some content for the third box.</p>
                </div>
            </div>
                    
            </div>
    );
}

export default AboutUs;
