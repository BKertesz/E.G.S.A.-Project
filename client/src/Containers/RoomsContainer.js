import React from 'react'
import Header from '../Components/Header'

class RoomsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        return(
            <div>
                <Header title="Rooms" />
            </div>
        )
    }


}

export default RoomsContainer