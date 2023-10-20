import React from "react";

const Hello=(props)=>{
    const{name}=props
    console.log(props);
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default Hello