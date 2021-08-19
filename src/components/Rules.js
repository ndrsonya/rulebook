import Reacts from 'react'

function RulesList(props) {
    const data = props.data;
    const chapterNumber = props.chapterNumber;
    return (
        <div className="RightPart">
            <ul>
            <h2>Rules for the chapter {chapterNumber}: </h2>
                {
                    data.map((el, index) => {
                        return (
                            <li key={index}>
                                {el.ruleIndex} {el.ruleText}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RulesList;