/* eslint-disable no-unused-vars */
import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;