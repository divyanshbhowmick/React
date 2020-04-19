import React from 'react';

import './progressCard.css'

const ProgressCard = (props) => {

    return (
        <div className="progress-card-box">
            <div className="progress-card">
                <div className="progress-card-heading">
                    Total Profit
                </div>
                <div className="progress-card-details">
                    Profit
                </div>
                <div className="progress-card-value">
                    &#36;180M
                </div>
                <div className="progress-card-progress-bar">
                    <div className="progress-card-progress" style={{ width: "65%", height: "100%", backgroundColor: "dodgerblue" }}>
                    </div>
                </div>
                <div className="progress-card-info">
                    <div className="progress-card-change">
                        Change
                     </div>
                    <div className="progress-card-percentage">
                        65%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressCard;