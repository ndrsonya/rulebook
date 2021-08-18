import rawText from './bookText.txt';
let decodedText;

fetch(rawText)
  .then(r => r.text())
  .then(rawText => {
    //console.log('text decoded:', text);
    decodedText = rawText
     .split(/\n{2,}/g)
     .filter(str => str.match(/^\d\d\d/));
    //text = text.filter(str => str.match(/^\d\d\d/));
    decodedText.map(el => console.log(el));
  });
  