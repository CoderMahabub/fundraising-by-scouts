import React from 'react';
import './Donar.css';

// Donar Component 
const Donar = (props) => {
    //Destructured
    const { thumbnail, name } = props.donar;
    return (
        <div className="donars">
            <img src={thumbnail} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Donar;