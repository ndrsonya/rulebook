import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import rulebookService from './services/rulebookContent'
import gettersService from './services/getters'
import ChaptersList from './components/Chapters';
import RulesList from './components/Rules';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
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
    <Router>

      <div>
        <Link to="/">home</Link>
        <br />
        <Link to={`${notes}`}>notes</Link>
        <br />
        <Link to="/users">users</Link>

        {
          chapters.map((el, index) => {
            return (
              <div key={index}>
                <Link to={`${el.chapterIndex}`}>lhkj{el.chapterIndex} {el.chapterDescription}</Link>
              </div>
            )

          })
        }
      </div>

      <Switch>
        <Route path="/notes">
          <h1>notes</h1>
        </Route>
        <Route path={`${notes}`}>
          <h1>userss</h1>
        </Route>
        <Route path="/">
          <h1>home</h1>
        </Route>
      </Switch>

      <div>
        <i>Note app, Department of Computer Science 2021</i>
      </div>
    </Router>
  );
}

export default App;
