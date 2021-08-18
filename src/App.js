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
      let rulesEditedArr = rawText.filter(str => /^[0-9]{3}\.\d/.test(str))
      let chaptersEditedArr = rawText.filter(str => /^[0-9]{3}\.\s/.test(str))
      rulesEditedArr = rulesEditedArr.map(content => ({content}))
      rulesEditedArr.forEach(element =>{
        let chapterIndexSubstring = element.content.substring(0,3);
        let ruleIndexSubstring = element.content.substring(0,6);
        let ruleTextSubstring = element.content.substring(7);
        element.chapterIndex = chapterIndexSubstring;
        element.ruleText = ruleTextSubstring;
        element.ruleIndex = ruleIndexSubstring;
        delete element.content;
        
      })//
      chaptersEditedArr = chaptersEditedArr.map(content => ({content}))
      chaptersEditedArr.forEach(element =>{
        let indexSubstring = element.content.substring(0,3);
        let contentSubstring = element.content.substring(5);
        element.chapterIndex = indexSubstring;
        element.chapterDescription = contentSubstring;
        delete element.content;
        
      })//
        
      console.log(chaptersEditedArr)
      console.log(rulesEditedArr)

    })
  }, [])

  console.log(rawText)
  //console.log(rawText)
  const reducer = (str) => {

  };

  const getRulebookChapters = () => {
    let blah = rawText.filter(str => /^[0-9]{3}\.\s/.test(str))
      blah = blah.map(content => ({content}))
      blah.forEach(element =>{
        let index = element.content.substring(0,3);
        element.index = index;
      })
    setChapters(blah)

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
