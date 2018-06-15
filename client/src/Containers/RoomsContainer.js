import React from 'react'
import Header from '../Components/Header'
import CreateRoom from '../Components/CreateRoom'
import Room from '../Components/Room'

class RoomsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rooms:[]
        }
        this.handleCreateRoom = this.handleCreateRoom.bind(this)
    }

    handleCreateRoom(){
        const newRoom = <Room key={this.state.rooms.length} user={this.props.user} name="Test Room" />
        // console.log(newRoom)
        const roomArray = this.state.rooms
        roomArray.push(newRoom)
        this.setState({rooms:roomArray})
    }

    componentDidMount(){
        // this.handleCreateRoom("Test Room")
    }



    render(){



        return(
            <div>
                <Header title="Rooms" />
                <CreateRoom onButtonClick={this.handleCreateRoom}/>
                {this.state.rooms[0]}
            </div>
        )
    }


}

export default RoomsContainer