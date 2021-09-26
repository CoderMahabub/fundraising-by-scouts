import React, { useEffect, useState } from 'react';
import Scouts from '../Scouts/Scouts';
import './ScoutMain.css';

const ScoutMain = () => {
    const [scouts, setScouts] = useState([]);
    useEffect(() => {
        fetch('./scouts.JSON')
            .then(res => res.json())
            .then(data => setScouts(data))
    }, [])

    return (
        <div className="scout-main">
            <div className="scouts-container">
                {
                    scouts.map(scout => <Scouts key={scout.id} scout={scout}></Scouts>)
                }
            </div>
            <div className="fund-raised">
                <h1>Fund Raised</h1>
            </div>
        </div>
    );
};

export default ScoutMain;