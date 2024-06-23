import React, { Component } from 'react';

class Faculty extends Component {
    constructor(){
        super()
        this.state={
            message:"ravi"
        }
        this.setFeculty=this.setFeculty.bind(this)
    }
    setFeculty(){
        this.setState({message:'raj'})
    }
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.setFeculty}>click</button>
            </div>
        );
    }
}

export default Faculty;