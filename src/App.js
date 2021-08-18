import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import rulebookService from './services/rulebookContent'


function App() {

  const [rawText, setRawText] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [formatedContent, setFormatedContent] = useState([]);

  useEffect(() => {
    rulebookService.getRulebookContent().then(res => {
      setRawText(res);
      getChapters();

    })
    console.log(rules)
    console.log(formatedContent)
  }, [])

  const getRules = () => {
    let rulesEditedArr = rawText.filter(str => /^[0-9]{3}\.\d/.test(str))
    rulesEditedArr = rulesEditedArr.map(content => ({ content }))
    rulesEditedArr.forEach(element => {
      let ruleIndexSubstring = element.content.substring(0, 6);
      let ruleTextSubstring = element.content.substring(7);
      element.ruleText = ruleTextSubstring;
      element.ruleIndex = ruleIndexSubstring;
      delete element.content;
    })
    setRules(rulesEditedArr);
  }
  const getChapters = () => {
    getRules();
    let chaptersEditedArr = rawText.filter(str => /^[0-9]{3}\.\s/.test(str))
    chaptersEditedArr = chaptersEditedArr.map(content => ({ content }))
    chaptersEditedArr.forEach(element => {
      let indexSubstring = element.content.substring(0, 3);
      let contentSubstring = element.content.substring(5);
      let chapterRules = rules.filter(rule => rule.ruleIndex.substring(0,3) === indexSubstring)
      element.chapterIndex = indexSubstring;
      element.chapterDescription = contentSubstring;
      element.rules = chapterRules 
      delete element.content;
    })
    setFormatedContent(chaptersEditedArr)
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
