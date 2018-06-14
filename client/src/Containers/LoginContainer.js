import React from 'react'
import LoginForm from '../Components/LoginForm'

class LoginContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
                name:'',
                password:''
            
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleFormSubmit(event){
        event.preventDefault()
        // console.log(this.state)
        const user = {...this.state}
        // console.log(user)
        this.props.onLogin(user)
    }

    handleChange(event){
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    render(){

        return(
            <div>
                This is the login screen
                <LoginForm onFormChange={this.handleChange} onFormSubmit={this.handleFormSubmit} />
            </div>
        )
    }
}

export default LoginContainer