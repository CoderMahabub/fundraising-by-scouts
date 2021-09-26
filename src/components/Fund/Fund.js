import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Donar from '../Donar/Donar';
import './Fund.css';

const Fund = (props) => {
    // React Font Awesome Icons 
    const users = <FontAwesomeIcon icon={faUser} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="fund-container">
            <h1>Fund Summary</h1>
            <h3>Total Donars {users}: {props.fund.length}</h3>
            <h4>Total Fund Raised: {dollar} {props.amount}</h4>
            {/* Single Donar part Map*/}
            <div className="single-donar">
                {
                    props.donar.map(donar => <Donar key={donar.id} donar={donar}></Donar>)
                }
            </div>
        </div>
    );
};

export default Fund;