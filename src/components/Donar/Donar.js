import React from 'react';
import './Donar.css';

const Donar = (props) => {
    // console.log(props) 
    const { thumbnail, name } = props.donar;
    return (
        <div className="donars">
            <img src={thumbnail} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Donar;