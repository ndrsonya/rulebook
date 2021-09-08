// The function takes raw text, proceeds data and returns array of rules
function getRules(rawText) {
	// every rule starts with 3 numbers, dot and a digit
	// we select only strings that start with this pattern
	const pattern = /^[0-9]{3}\.\d/;
	const rulesEditedArr = rawText
		.filter(str => pattern
			.test(str))
		.map(content => ({ content }));
	rulesEditedArr.forEach(element => {
		const ruleIndexSubstring = element.content.substring(0, 6);
		const ruleTextSubstring = element.content.substring(7);
		element.ruleText = ruleTextSubstring;
		element.ruleIndex = ruleIndexSubstring;
		delete element.content;
	});
	return rulesEditedArr;
}

// The function takes raw text, proceeds data and returns array of chapters
function getChapters(rawText) {
	// every chapter starts with 3 numbers, dot and a whitespace
	// we select only strings that start with this pattern
	const pattern = /^[0-9]{3}\.\s/;
	const rules = getRules(rawText);
	const chaptersEditedArr = rawText
		.filter(str => pattern
			.test(str))
		.map(content => ({ content })
		);
	chaptersEditedArr.forEach(element => {
		const indexSubstring = element.content.substring(0, 3);
		const contentSubstring = element.content.substring(5);
		const chapterRules = rules.filter(rule => rule.ruleIndex.substring(0, 3) === indexSubstring);
		element.chapterIndex = indexSubstring;
		element.chapterDescription = contentSubstring;
		element.rules = chapterRules;
		delete element.content;
	});

	return chaptersEditedArr;
}

export default { getRules, getChapters };