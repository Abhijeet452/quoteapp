import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setquote] = useState('');
  const [author, setauthor] = useState('');
  // const [bg, setbg] = useState('https://source.unsplash.com/random/?city,night');
  const update = async () => {
    let api = 'https://api.quotable.io/random';
    let data = await fetch(api);
    let parseddata = await data.json();
    setquote(parseddata.content);
    setauthor(parseddata.author);
    console.log(parseddata.content);
    // setbg('https://source.unsplash.com/random/?city,night');
  }
  useEffect(() => {
    update();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h3 className="advice">
          {quote}
        </h3>
        <h6 id="author">-{author}</h6>
        <div className="button">
          <button className="bubbly-button" onClick={update}>Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

