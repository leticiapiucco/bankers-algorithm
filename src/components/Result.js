import React from 'react'

function Result({content}) {
    return (
        <div className='execution-div'>
            <h3>Execution</h3>
            <div>
            {content.map((subitems, idx) => {
               return {subitems}
            })}
            </div>
        </div>
    )
}

export default Result

