import React from 'react';


const Users = (props) =>{
    const data = props;
    return(
        <div>
            <h1>User Component</h1>
            <h4>{data.data.name}</h4>
            <h4>{data.data.age}</h4>
        </div>
    )
}

export default Users;