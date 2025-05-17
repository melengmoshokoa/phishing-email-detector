import React, { useState } from 'react';
import axios from 'axios';
import './EmailCheck.css';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function EmailCheck() {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    setEmailText(e.target.result);
  };
  reader.readAsText(file);
};

  const checkEmail = async () => {
    if (!emailText.trim()) {
      alert("Please enter email content first.");
      return;
    }

    setLoading(true);
    setResult(null);

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
    <div className="Container1">
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

      <div className="FileUpload">
        <label htmlFor="fileUpload">Or upload an email file:</label>
        <input
          id="fileUpload"
          type="file"
          accept=".txt,.eml"
          onChange={handleFileUpload}
        />
      </div>

      <button className="ButtonBox" onClick={checkEmail} disabled={loading}>
        {loading ? 'Checking...' : 'Check Your Email'}
      </button>

      <button className="ButtonBox" onClick={() => navigate('/')}>Back To Home Page</button> 


      {loading }

      {result && (
        <div className={`ResultBox ${result.result.includes('phishing') ? 'phishing' : 'legitamate'}`}>
          <h2>Results:</h2>
            <h3>This ia a {result.result} email</h3>
          <button className='Accuracy'>
            <p>{result.confidence} </p>
          </button>
          <h4>Confidence Score </h4>
          

          <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Summary:</h2>
          <h4> The following words contributed to this email being considered a {result.result} email:</h4>
          <p>{result.explanation.join(', ')}</p>

          {result.chartData && result.chartData.length > 0 && (
            <div style={{ width: '100%', height: 300, marginTop: '2rem' }}>
                <h3>Graph showing the top contributing words:</h3>

                <p style={{ marginTop: '1rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  The explanation graph highlights the most influential words in your email that helped the model decide whether it's phishing or legitimate. 
                  For phishing emails, longer bars show suspicious terms. For legitimate emails, they show safe indicators.
                </p>
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="word" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="weight" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>

                
            </div>
            
)}

        </div>
      )}

     
    </div>
  );
}

export default EmailCheck;
