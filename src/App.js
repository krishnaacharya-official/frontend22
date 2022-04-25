// routes
import React, { useState, createContext, useEffect, useReducer } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { userReducer } from './Reducer/userReducer';
import useUser from './hooks/useUser';
// import './styles/scss/global.scss'
// import './styles/scss/global.scss'


import Router from './routes';
// theme

import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import Abc from './pages/Abc';
import MainRoutes from './Routes/MainRoutes';


export const UserContext = createContext({});


export default function App() {
    const [user, userdispatch] = useReducer(userReducer, {
        isLoggedIn: false,
        isUpdateCart: false,
        isUpdateOrg:false,
        data: {}
    });
    const UserProviderContext = useUser(user, userdispatch);
    return (
        <>
            <UserContext.Provider value={UserProviderContext}>
                <ToastContainer />
                <MainRoutes />
            </UserContext.Provider>
        </>
    );
}
