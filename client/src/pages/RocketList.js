//rocketList.js page

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUpcomingLaunches, fetchPreviousLaunches } from '../redux/actions';
// import RocketDetailsModal from './RocketDetailsModal';

// const RocketList = () => {
//     const [activeTab, setActiveTab] = useState('dashboard'); // State to manage active tab
//     const dispatch = useDispatch();
//     const upcomingLaunches = useSelector(state => state.upcomingLaunches); // Adjust this according to your state structure
//     const previousLaunches = useSelector(state => state.previousLaunches); // Adjust this according to your state structure

//     useEffect(() => {
//         dispatch(fetchUpcomingLaunches());
//         dispatch(fetchPreviousLaunches());
//     }, [dispatch]);

//     console.log("upcoming launch", upcomingLaunches);

//     if (!upcomingLaunches || !previousLaunches) {
//         return <div>Loading...</div>; // or some loading indicator
//     }

//     const renderContent = () => {
//         if (activeTab === 'rockets') {
//             return (
//                 <div className="rocket-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//                     {upcomingLaunches && upcomingLaunches.map((rocket) => (
//                         <div key={rocket.id} className="rocket-item" style={{ flex: '1 1 calc(50% - 20px)', marginBottom: '20px', backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}>
//                             <RocketDetailsModal rocket={rocket} />
//                             <h3>{rocket.name}</h3>
//                         </div>
//                     ))}
//                     {previousLaunches && previousLaunches.map(rocket => (
//                         <div key={rocket.id} className="rocket-item" style={{ flex: '1 1 calc(50% - 20px)', marginBottom: '20px', backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}>
//                             <RocketDetailsModal rocket={rocket} />
//                             <h3>{rocket.name}</h3>
//                         </div>
//                     ))}
//                 </div>
//             );
//         }
//     };

//     return (
//         <div className="container" style={{ height: '100vh', display: 'flex', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', margin: '20px', borderRadius: '10px' }}>
//             <div className="left-section" style={{ flex: '0 1 30%', backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
//                 <img src="https://logowik.com/content/uploads/images/starlink7823.logowik.com.webp" alt="Icon" style={{ width: '90%', marginBottom: '20px' }} /> {/* Add your icon here */}
//                 <h1 onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>Dashboard</h1>
//                 <h2 onClick={() => setActiveTab('rockets')} style={{ cursor: 'pointer' }}>Rockets</h2>
//             </div>
//             <div className="right-section" style={{ flex: '0 1 70%', backgroundColor: 'black', color: 'white', overflowY: 'auto', padding: '20px' }}>
//                 <div>
//                     <h1>Welcome to the Dashboard</h1>
//                     <p>Here you can find an overview of the system.</p>
//                 </div>
//                 {renderContent()}
//             </div>
//         </div>
//     );
// };

// export default RocketList;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingLaunches, fetchPreviousLaunches } from '../redux/actions';
import RocketDetailsModal from './RocketDetailsModal';

const RocketList = () => {
    const [activeTab, setActiveTab] = useState('dashboard'); // State to manage active tab
    const dispatch = useDispatch();
    const upcomingLaunches = useSelector(state => state.upcomingLaunches); // Adjust this according to your state structure
    const previousLaunches = useSelector(state => state.previousLaunches); // Adjust this according to your state structure

    useEffect(() => {
        dispatch(fetchUpcomingLaunches());
        dispatch(fetchPreviousLaunches());
    }, [dispatch]);

    console.log("upcoming launch", upcomingLaunches);

    if (!upcomingLaunches || !previousLaunches) {
        return <div>Loading...</div>; // or some loading indicator
    }

    const renderContent = () => {
        if (activeTab === 'dashboard') {
            // Render some data for the dashboard
            return (
                <div>
                    <h1>Dashboard Overview</h1>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ flex: '1', backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}>
                            <h2>Upcoming Launches</h2>
                            {upcomingLaunches.slice(0, 2).map(rocket => (
                                <div key={rocket.id}>
                                    <h3>{rocket.name}</h3>
                                    <p>Rocket: {rocket.rocket}</p>
                                    <p>Date (UTC): {rocket.date_utc}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: '1', backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}>
                            <h2>Previous Launches</h2>
                            {previousLaunches.slice(0, 2).map(rocket => (
                                <div key={rocket.id}>
                                    <h3>{rocket.name}</h3>
                                    <p>Rocket: {rocket.rocket}</p>
                                    <p>Date (UTC): {rocket.date_utc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else if (activeTab === 'rockets') {
            return (
                <div className="rocket-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {upcomingLaunches && upcomingLaunches.map((rocket) => (
                        <div key={rocket.id} className="rocket-item" style={{ flex: '1 1 calc(50% - 20px)', marginBottom: '20px', backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}>
                            <RocketDetailsModal rocket={rocket} />
                            <h3>{rocket.name}</h3>
                        </div>
                    ))}
                    {previousLaunches && previousLaunches.map(rocket => (
                        <div key={rocket.id} className="rocket-item" style={{ flex: '1 1 calc(50% - 20px)', marginBottom: '20px', backgroundColor: '#222', padding: '10px', borderRadius: '10px' }}>
                            <RocketDetailsModal rocket={rocket} />
                            <h3>{rocket.name}</h3>
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="container" style={{ height: '100vh', display: 'flex', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', margin: '20px', borderRadius: '10px' }}>
            <div className="left-section" style={{ flex: '0 1 30%', backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
                <img src="https://logowik.com/content/uploads/images/starlink7823.logowik.com.webp" alt="Icon" style={{ width: '90%', marginBottom: '20px' }} /> {/* Add your icon here */}
                <h1 onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer' }}>Dashboard</h1>
                <h2 onClick={() => setActiveTab('rockets')} style={{ cursor: 'pointer' }}>Rockets</h2>
            </div>
            <div className="right-section" style={{ flex: '0 1 70%', backgroundColor: 'black', color: 'white', overflowY: 'auto', padding: '20px' }}>
                <div>
                    <h1>Welcome to the Dashboard</h1>
                    <p>Here you can find an overview of the system.</p>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default RocketList;
