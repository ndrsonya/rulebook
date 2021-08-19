import React, { useEffect, useState } from 'react'
import './App.css';
import rulebookService from './services/rulebookContent'
import gettersService from './services/getters'
import RulesList from './components/Rules';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [chapters, setChapters] = useState([]);


  useEffect(() => {
    rulebookService.getRulebookContent().then(res => {
      const chaptersData = gettersService.getChapters(res);
      setChapters(chaptersData)
    })
  }, []);
  let notes = 'notes';
  console.log("chapter state")
  console.log(chapters)


  return (

    <div className="App" >
      <div className="LeftPart">
        <Link className="Link" to="/">home</Link>=
        <Link className="Link" to={`${notes}`}>notes</Link>


        {
          chapters.map((el, index) => {
            return (
              <div key={index}>
                <Link className="Link" to={`${el.chapterIndex}`}
                >
                  {el.chapterIndex} {el.chapterDescription}
                </Link>

              </div>
            )

          })
        }
      </div>

      <Switch>
        <Route path="/notes">
          <h1>notes</h1>
        </Route>
        {
          chapters.map((el, index) => {

            return (
              <Route key={index} path={`/${el.chapterIndex}`}>
                <div className="RightPart">
                  <RulesList data={el.rules} />
                </div>
              </Route>
            )
          })

        }

        <Route path="/">
          <h1>home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
