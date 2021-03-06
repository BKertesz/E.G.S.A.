import React from 'react'
import LoginContainer from './LoginContainer'
import RoomsContainer from './RoomsContainer';

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
                <LoginContainer onLogin={this.getUserObject} isVisible={this.state.userLoggedIn} />
                <RoomsContainer user={this.state.user} />
            </div>
        )
    }
}

export default Hub