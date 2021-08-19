import Reacts from 'react'

function RulesList(props) {
    const data = props.data;
    return (
        <div>
            <h2>Rules for the chapter </h2>
            <ul>
            {
                data.map((el, index) => {
                    return(
                        
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