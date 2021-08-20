

const baseUrl = 'https://thawing-garden-65907.herokuapp.com/media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt';


async function getRulebookContent  ()  {
	const res = await fetch(baseUrl)
		.then(response => response.text())
		.then(text => {
			const splitArray = text.split(/\r?\n/).filter(str => /^[0-9]{3}/.test(str));
			return splitArray;
		})
		.catch(err => console.log(err));
	return res;
}



export default { getRulebookContent };