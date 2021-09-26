import React, { useEffect, useState } from 'react';
import Fund from '../Fund/Fund';
import Scouts from '../Scouts/Scouts';
import './ScoutMain.css';

const ScoutMain = () => {
    const [scouts, setScouts] = useState([]);
    const [fund, setFund] = useState([]);
    const [donars, SetDonars] = useState([]);
    const [amount, setAmount] = useState(0);
    useEffect(() => {
        fetch('./scouts.JSON')
            .then(res => res.json())
            .then(data => setScouts(data))
    }, [])

    const handleAddToFund = (scout) => {
        console.log(scout);

        const newFund = [...fund, scout];
        setFund(newFund);

        const newDonar = [...donars, scout];
        SetDonars(newDonar);

        const newAmount = amount + scout.deonation_amount;
        setAmount(newAmount);

    }

    return (
        <div className="scout-main">
            <div className="scouts-container">
                {
                    scouts.map(scout => <Scouts
                        key={scout.id}
                        scout={scout}
                        handleAddToFund={handleAddToFund}
                    >
                    </Scouts>)
                }
            </div>
            <div className="fund-raised">
                <Fund fund={fund} donar={donars} amount={amount}></Fund>
            </div>
        </div>
    );
};

export default ScoutMain;