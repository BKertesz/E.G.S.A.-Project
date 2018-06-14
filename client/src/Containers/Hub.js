import React from 'react'
import LoginContainer from './LoginContainer'

class Hub extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userLoggedIn: false,
            user:{}
        }

        this.getUserObject = this.getUserObject.bind(this)
    }

    getUserObject(currentUser){
        this.setState({user:currentUser,userLoggedIn:true})
    }


    render(){

        return(
            <div>
                This is the container for the Hub
                <LoginContainer onLogin={this.getUserObject} />
            </div>
        )
    }
}

export default Hub