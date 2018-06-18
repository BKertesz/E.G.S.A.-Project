import React from 'react'
import InputBox from './InputBox'
import OutputBox from './OutputBox' 
import io from 'socket.io-client'

class Room extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            user:props.user,
            assets:[],
            messages:[]
        }

        this.socket = io("http://localhost:3001");
        this.socket.on(this.state.name, this.addMessage.bind(this));

        this.getInput = this.getInput.bind(this)
    }


    addMessage(message){
        // console.log(message)
        const messages = this.state.messages
        // console.log(messages)
        messages.push(message)
        const newMessages = messages
        console.log(newMessages)
        // this.setState({messages:newMessages})
    }


    getInput(message) {
        // console.log(this.state.name)
        this.socket.emit(this.state.name,{usr:this.state.user.name,msg:message})
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