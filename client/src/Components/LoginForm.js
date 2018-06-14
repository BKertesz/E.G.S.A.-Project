import React from 'react'

const LoginForm = (props) => {

    function handleFormSubmit(event){
        event.preventDefault()
        // console.log(event.target.name.value)
        // console.log(event.target.password.value)
        props.onFormSubmit(event)
    }

    const form = <form onSubmit={handleFormSubmit}>
    <h4>Login</h4>
    <label>Username:</label>
    <input type="text" name='name' onChange={props.onFormChange}/>

    <br />

    <label>Password:</label>
    <input type="password" name="password" onChange={props.onFormChange} />

    <br />

    <button type='submit'>Login</button>
</form>

    return !props.isVisible? form : null
        
}

export default LoginForm