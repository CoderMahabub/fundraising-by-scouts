import React, { useEffect, useState } from 'react';
import Fund from '../Fund/Fund';
import Scouts from '../Scouts/Scouts';
import './ScoutMain.css';

// ScoutMain Componetn 
const ScoutMain = () => {
    const [scouts, setScouts] = useState([]);
    const [fund, setFund] = useState([]);
    const [donars, SetDonars] = useState([]);
    const [amount, setAmount] = useState(0);

    // Load Data from Public Folder
    useEffect(() => {
        fetch('./scouts.JSON')
            .then(res => res.json())
            .then(data => setScouts(data))
    }, [])

    // Handled Add To Fund Handler
    const handleAddToFund = (scout) => {

        // Find the numbers of donar
        const newFund = [...fund, scout];
        setFund(newFund);

        // New Array with donars who donate
        const newDonar = [...donars, scout];
        SetDonars(newDonar);

        // Total Fund Raised 
        const newAmount = amount + scout.deonation_amount;
        setAmount(newAmount);
    }

    return (
        <div className="scout-main">

            {/* Scouts Profile Container */}
            <div className="scouts-container">
                {
                    scouts.map(scout => <Scouts
                        key={scout.id}
                        scout={scout}
                        handleAddToFund={handleAddToFund}
                    >
                    </Scouts>)
                }

                {/* Fund Summary Container  */}
            </div>
            <div className="fund-raised">
                <Fund fund={fund} donar={donars} amount={amount}></Fund>
            </div>
        </div>
    );
};

export default ScoutMain;