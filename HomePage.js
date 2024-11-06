import React, { useState } from 'react';
import "./App.css";

function HomePage(){
  
  const[longUrl, setlongUrl] = useState("");
  const[customCode, setCustomCode] = useState("");
  const[shortUrl, setShortUrl] = useState("");

  const handleShortenUrl = () => {

    if (customCode.length > 4) {

      setShortUrl(`https://cpt405.co/${customCode}`);

    }else{
      setShortUrl(`https://cpt405.co/${Math.random().toString(36).substring(6)}`);
    }
  };

  return(
    <div>
        <h1>Link Shrinker</h1>
        <div>
          <label>Long URL: </label>
          <input type="text" value={longUrl} onChange={(e) => setlongUrl(e.target.value)} />
        </div>
        <div>
          <label>Enter Custom Code: </label>
          <input type="text" value={customCode} onChange={(e) => setCustomCode(e.target.value)} />
        </div>
        <button onClick={handleShortenUrl}>Shorten</button>
        {shortUrl && (
          <div>
            <p>Short URL: </p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </div>
        )}
      </div>
    );
}

export default HomePage;

