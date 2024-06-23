import React from 'react';

function Props(props) {
    console.log(" name",props.name)
    console.log(" city",props.city)
    return (
        <div>
            <div>{props.name}</div>
           <div>{props.city}</div>
        </div>
    );
}

export default Props;