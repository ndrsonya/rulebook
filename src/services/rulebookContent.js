// External proxy api is used and to fetch data from "media.wizards.com"
const url = 'https://thawing-garden-65907.herokuapp.com/media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt';

// Getting data from the server, f-on returns array of strings that start with 3 numbers
const getRulebookContent = async() =>  {

	const res = await fetch(url)
		.then(response => response.text())
		.then(text => {
			const splitArray = text.split(/\r?\n/).filter(str => /^[0-9]{3}/.test(str));
			return splitArray;
		})
		.catch(err => console.log(err));

	return res;
};

export default { getRulebookContent };