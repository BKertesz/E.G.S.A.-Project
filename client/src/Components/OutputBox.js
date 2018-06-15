import React from 'react'

const OutputBox = (props) => {

    const messageDisplay = props.messages.map((message,index)=>{
        // console.log(message)
        return <p key={index}>{message}</p>
    })

    return(
        <div>
            {messageDisplay}
        </div>
    )
}

export default OutputBox