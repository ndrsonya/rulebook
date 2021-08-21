import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RulesList( props ) {

	const data = props.data;
	const chapterNumber = props.chapterNumber;
	const chapterName = props.chapterName;
	const [searchWord, setSearchWord] = useState('');
	const [filteredList, setFilteredList] = useState(data);

	const handleChange = (event) => {
		setSearchWord(event.target.value);
		console.log();
	};

	const clearSearchField = () => {
		setFilteredList(data);
		setSearchWord('');
	};

	const handleFiltering = () => {
		let updatedArr = data.filter(el => el.ruleText.includes(searchWord));
		setFilteredList(updatedArr);
	};

	return (
		<div className="RightPart">

			<ul>
				
				<h2>Rules for the chapter {chapterNumber}. {chapterName}: </h2>
				<p>Type the keyword to filter the rules:</p>
				<input
					type='text'
					data-testid="textSearch"
					className="textSearch"
					value={searchWord}
					onChange={handleChange}
				/>
				<button
					className="button"
					onClick={() => handleFiltering()}
				>
                    Filter
				</button>
				<button
					className="button"
					onClick={() => clearSearchField()}
				>
                    Clear
				</button>

				{
					filteredList.map((el, index) => {
						return (
							<li key={index}>
								{el.ruleIndex} {el.ruleText}
							</li>
						);
					})
				}

			</ul>
		</div>
	);
}

RulesList.propTypes = {
	data: PropTypes.array.isRequired,
	chapterNumber: PropTypes.string.isRequired,
	chapterName: PropTypes.string.isRequired,

};

export default RulesList;