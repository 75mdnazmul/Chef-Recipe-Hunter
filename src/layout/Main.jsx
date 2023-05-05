/* eslint-disable no-unused-vars */
import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
        const navigation = useNavigation()
    return (
        <div>
            <Navber></Navber>
            <div>{navigation.state === 'loading' ? 'Loading.......' : ''}</div>
                <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;