import React, { useState } from 'react';
import axios from 'axios';
import './EmailCheck.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function EmailCheck() {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkEmail = async () => {
    if (!emailText.trim()) {
      alert("Please enter email content first.");
      return;

      setLoading(true);
      setResult(null);

    }

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        email: emailText,
      });

      setResult(response.data);
      console.log("Results:" , result)
    } catch (error) {
      console.error(error);
      setResult('Error: Could not check the email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Container">
      <h1 className="Header">PhishCheck</h1>

      <div className="InputWords">
        <h2>Paste the content of your email in the box below</h2>
      </div>

      <div className="InputBox">
        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder="Paste your email here..."
        ></textarea>
      </div>

      <button className="ButtonBox" onClick={checkEmail}>
        Check Your Email
      </button>

      {result && (
        <div className={`ResultBox ${result.result.includes('phishing') ? 'phishing' : 'safe'}`}>
          <h3>Results:</h3>
            <p>{result.result}</p>
          <button className='Accuracy'>
            <p>{result.confidence} </p>
          </button>
          <h4>Confidence Score </h4>
          

          <h3>Summary:</h3>
          <h4> The following words contributed to this email being considered a {result.result} email:</h4>
          <p>{result.explanation.join(', ')}</p>
        </div>
      )}

    </div>
  );
}

export default EmailCheck;
