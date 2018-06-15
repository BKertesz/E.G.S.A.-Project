import React from 'react'
import InputBox from './InputBox' 

class Room extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            user:props.user,
            assets:[]
        }
        this.getInput = this.getInput.bind(this)
    }

    getInput(comment) {
        console.log(comment);
    }

    render(){
        return(
            <div>
                <h4>Room Name: {this.state.name}</h4>
                <h4>Admin: {this.state.user.name}</h4>
                <InputBox onInput={this.getInput}/>
            </div>
        )
    }
}

export default Room