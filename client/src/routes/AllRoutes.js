// AllRoutes page

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RocketList from '../pages/RocketList';

const AllRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path='/' element={ <RocketList /> } />
            </Routes>
        </>
    );
}

export default AllRoutes;