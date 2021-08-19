import Reacts from 'react'

function RulesList(props) {
    const data = props.data;
    return (
        <div>
            {
                data.map((el, index) => {
                    return(
                        <div key={index}>
                            {el.ruleIndex} {el.ruleText}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RulesList;