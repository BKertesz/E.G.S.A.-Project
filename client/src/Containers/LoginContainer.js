import React from 'react'
import LoginForm from '../Components/LoginForm'

class LoginContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            user:{
                name:'',
                password:''
            }
            
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleFormSubmit(event){
        console.log(this.state)
        //props.onLogin(this.state.user)
    }

    handleChange(event){
        console.log(event.target.value)
        //this.setState({user:{[event.target.name]:[event.target.value]}})
    }

    render(){

        return(
            <div>
                This is the login screen
                <LoginForm />
            </div>
        )
    }
}

export default LoginContainer