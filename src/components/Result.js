import React from 'react'

function Result({content}) {
    return (
        <div>
            <ul>Excution
            {content.map((subitems, idx) => {
               return <li>{subitems}</li>
            })}</ul>
        </div>
    )
}

export default Result

