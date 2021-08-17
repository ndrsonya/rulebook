import logo from './logo.svg';
import './App.css';
import rawText from './bookText.txt';

console.log(rawText);

function App() {

  let decodedText;
  fetch(rawText)
    .then(r => r.text())
    .then(text => {
      //console.log('text decoded:', text);
      text = text
        .replace(/\n\r/g, "\n")
        .replace(/\r/g, "\n")
        .split(/\n{2,}/g);
    //  console.log(text); //3257
      const distinctContent = [...new Set(text)]
      //filter to have elements that starts with number
      const result = distinctContent.filter(word => word.length > 6);
      distinctContent.map(el => console.log(el))
     //console.log(distinctContent); //3254
    });




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
