import React from 'react';

import ReferralTable from './referral-table/referralTable'
import './recentReferrals.css';

function RecentReferrals(props) {
    return (
        <div className="recent-referrals">
            <div className="recent-referrals-heading">
                RECENT REFERRALS
            </div>
            <div className="recent-referrals-description">
                Block with important Recent Referrals information
            </div>
            <div className="recent-referrals-table-container">
                <ReferralTable />
            </div>
        </div>
    );
}

export default RecentReferrals;