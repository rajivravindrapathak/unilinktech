// RocketDetailsModal.js

import React from 'react';

const RocketDetailsModal = ({ rocket }) => {
    if (!rocket) {
        return null; // or return some fallback UI
    }

    return (
        <div 
            className="rocket-details-modal"
            style={{ 
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '10px'
            }}
        >
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h1>Upcoming launch</h1>
                <p>Mission Name: </p>
                <h2>{rocket.name}</h2>
                <p>Rocket: {rocket.rocket}</p>
                <p>Flight Number: {rocket.flight_number}</p>
                <p>Date (UTC): {rocket.date_utc}</p>
                <p>Links: <a href={rocket.links.webcast} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Watch</a></p>
                <p>Launchpad: {rocket.launchpad}</p>
            </div>
            <div style={{ flex: 1 }}>
                <p>Logo</p>
                <h1>LAUNCHPAD</h1>
                <p>KSC LC 39A</p>
            </div>
        </div>
    );
};

export default RocketDetailsModal;
