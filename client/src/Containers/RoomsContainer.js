import React from 'react'
import Header from '../Components/Header'
import CreateRoom from '../Components/CreateRoom'
import Room from '../Components/Room'

class RoomsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        return(
            <div>
                <Header title="Rooms" />
                <CreateRoom />
                <Room />
            </div>
        )
    }


}

export default RoomsContainer