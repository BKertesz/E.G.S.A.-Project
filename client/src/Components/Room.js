import React from 'react'
import InputBox from './InputBox'
import OutputBox from './OutputBox' 

class Room extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            user:props.user,
            assets:[],
            messages:[]
        }
        this.getInput = this.getInput.bind(this)
    }

    getInput(message) {
        const allMessages = this.state.messages
        // console.log(this.state.user,message)
        allMessages.push(`${this.state.user.name} says ${message}`)
        this.setState({messages:allMessages})
    }

    render(){
        return(
            <div>
                <h4>Room Name: {this.state.name}</h4>
                <h4>Admin: {this.state.user.name}</h4>
                <OutputBox messages={this.state.messages} />
                <InputBox onInput={this.getInput}/>
            </div>
        )
    }
}

export default Room