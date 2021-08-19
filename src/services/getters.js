

function getRules (rawText) {
    let rulesEditedArr = rawText.filter(str => /^[0-9]{3}\.\d/.test(str))
    rulesEditedArr = rulesEditedArr.map(content => ({ content }))
    rulesEditedArr.forEach(element => {
        let ruleIndexSubstring = element.content.substring(0, 6);
        let ruleTextSubstring = element.content.substring(7);
        element.ruleText = ruleTextSubstring;
        element.ruleIndex = ruleIndexSubstring;
        delete element.content;
    })
    return rulesEditedArr;
}

function getChapters (rawText)  {
    console.log(rawText)
    let rules = getRules(rawText);
    let chaptersEditedArr = rawText.filter(str => /^[0-9]{3}\.\s/.test(str))
    chaptersEditedArr = chaptersEditedArr.map(content => ({ content }))
    chaptersEditedArr.forEach(element => {
        let indexSubstring = element.content.substring(0, 3);
        let contentSubstring = element.content.substring(5);
        let chapterRules = rules.filter(rule => rule.ruleIndex.substring(0, 3) === indexSubstring)
        element.chapterIndex = indexSubstring;
        element.chapterDescription = contentSubstring;
        element.rules = chapterRules
        delete element.content;
    })
    return chaptersEditedArr;
}

export default {getRules, getChapters}