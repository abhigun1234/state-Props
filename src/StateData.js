import React, { Component } from 'react';

class StateData extends Component {

    constructor(){

        super()
        this.state={name:'ram'}
        // intilizing this
       // this.setName=this.setName.bind(this)
    }
    setName(){
        console.log("this",this)
     this.setState({name:"rakesh"})

    }
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={this.setName}>setName</button>
            </div>
        );
    }
}

export default StateData;