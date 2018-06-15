import React from 'react'

const InputBox = (props) => {

    function handleSubmit(event){
        event.preventDefault()
        // console.log(event.target.textBox.value)
        props.onInput(event.target.textBox.value)
        event.target.reset()
    }

    return(
        <form onSubmit={handleSubmit} >
            <input type ="text" name="textBox" placeholder="Type in commands here" />
            <input type="submit"/>
        </form>
    )
}

export default InputBox