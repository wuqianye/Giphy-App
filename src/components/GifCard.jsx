import React from 'react'

const GifCard = (props) => {
    return (
        <div>
            <img src={props.url} alt="gif"/>
        </div>
    )
}

export default GifCard
