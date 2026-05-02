import React from 'react';

const Popular = async() => {
    const res =await fetch('http://localhost:3000/data.json')
    const name=await res.json()
    console.log(name);
    return (
        <div>
            <p>popiular item</p>
        </div>
    );
};

export default Popular;