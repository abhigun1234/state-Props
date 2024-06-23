import React from 'react';

function Students({name,email}) {
    
    console.log("name",name)
    console.log("email",email)
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    );
}

export default Students;