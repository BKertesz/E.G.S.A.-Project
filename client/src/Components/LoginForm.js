import React from 'react'

const LoginForm = (props) => {

    return(
        <form>
            <h4>Login</h4>
            <label>Username:</label>
            <input type="text" name='name' />

            <br />

            <label>Password:</label>
            <input type="password" name="password" />

            <br />

            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm