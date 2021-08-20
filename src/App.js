import React, { useEffect, useState } from 'react';
import './App.css';
import rulebookService from './services/rulebookContent';
import gettersService from './services/getters';
import RulesList from './components/Rules';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [chapters, setChapters] = useState([]);
	useEffect(() => {
		rulebookService.getRulebookContent().then(res => {
			const chaptersData = gettersService.getChapters(res);
			setChapters(chaptersData);
		});
	}, []);
	return (

		<div>
			<div className="Header">
				<h1>Rulebook app</h1>
			</div>
			<div className="App">
				<div className="LeftPart">
					<Link className="Link" to="/">Home</Link>
					{
						chapters.map((el, index) => {
							return (
								<Link key={index} className="Link" to={`${el.chapterIndex}`}>
									{el.chapterIndex} {el.chapterDescription}
								</Link>
							);
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
									<RulesList data={el.rules} chapterNumber={el.chapterIndex} chapterName={el.chapterDescription} />
								</Route>
							);
						})
					}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
