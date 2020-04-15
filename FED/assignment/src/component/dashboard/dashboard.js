import React from 'react';


import './dashboard.css';
import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import ProcessingInformation from './../progress-information/progressInformation';
import RecentReferrals from './../recent-referrals/recentReferrals';
import PaymentCards from './../payment-cards/paymentCards';
import Teams from './../teams/teams';


function Dashboard(props) {
    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <div className="item1">
                    <Sidebar />
                </div>
                <div className="item2">
                    <ProcessingInformation />
                </div>
                <div className="item3">
                    <RecentReferrals />
                </div>
                <div className="item4">
                    <PaymentCards />
                </div>
                <div className="item5">
                    <Teams />
                </div>
            </div>
        </>
    );
}

export default Dashboard;