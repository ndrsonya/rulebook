import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import rulebookService from './services/rulebookContent'


function App() {

  const [rawText, setRawText] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    rulebookService.getRulebookContent().then(res => {
      setRawText(res);
      let blah = rawText.filter(str => /^[0-9]{3}\.\s/.test(str))
      console.log(blah)
      
    })
  }, [])

  //console.log(rawText)
  const reducer = (str) => {

  };

  const getRulebookChapters = () => {
    let blah = rawText.filter(str => /^[0-9]{3}\.\s/.test(str))

  }

  const getRulebookRules = () => {

  }





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
