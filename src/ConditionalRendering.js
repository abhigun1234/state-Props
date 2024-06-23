import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(){
        super()
        this.state={

            isloggedIn:true
        }
    }
    render() {
        
        //1
        // if(this.state.isloggedIn){
        //     return (
        //         <div>
        //             <div>
        //                 Hello Node
        //             </div>
        //         </div>
        //     );
    
        // }
        // else{
        //     return (
        //         <div>
        //             <div>
        //                 Hello React
        //             </div>
                  
        //         </div>
        //     );
    
        // }
        //2
        // let message
        // if(this.state.isloggedIn){
        //     message=<div>Hello Node</div>
        // }
        // else{
            
        //     message=<div>Hello React</div>
        // }
        // return message

        // 3
        // return(this.state.isloggedIn ? <div>Hello Node</div>:<div>Hello React</div>)
        //4
        return(this.state.isloggedIn && <div>Hello Node</div>)
        
        
    }
}

export default ConditionalRendering;