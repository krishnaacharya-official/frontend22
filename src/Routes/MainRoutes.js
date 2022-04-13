import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link as RouterLink } from 'react-router-dom'
// import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import ForgotPasswordController from '../Controller/frontEnd/ForgotPasswordController';
import SigninController from '../Controller/frontEnd/SigninController';
import SignupController from '../Controller/frontEnd/SignupController';
// import HomePage from '../View/frontEnd/Layout/Home/HomePage';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';


import Login from '../pages/Login';

// import Router from '../routes';
import Abc from '../pages/Abc';
import ThemeConfig from '../theme';
import ScrollToTop from '../components/ScrollToTop';
import GlobalStyles from '../theme/globalStyles';
import { BaseOptionChartStyle } from '../components/charts/BaseOptionChart';
import AdminPrivateRoutes from './AdminPrivateRoutes';
import Logo from '../components/Logo';
import UserPrivateRoutes from './UserPrivateRoutes';
import HomeController from '../Controller/frontEnd/HomeController'
import FrontEndLayOut from './FrontEndLayOut'
import OrganizationDetailsController from '../Controller/frontEnd/OrganizationDetailsController';
import ItemDetailsController from '../Controller/frontEnd/ItemDetailsController';
import ProjectDetailsController from "../Controller/frontEnd/ProjectDetailsController"
import FrontEndAuthLayOut from './FrontEndAuthLayout';
import OrganizationAdminController from '../Controller/frontEnd/OrganizationAdminController';
import CampaignAdminLayout from './CampaignAdminLayout';
import CartController from '../Controller/frontEnd/CartController';
import CheckoutController from '../Controller/frontEnd/CheckoutController';
import ThankYou from '../View/frontEnd/ThankYou';

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    left: 0,
    lineHeight: 0,
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3, 3, 0),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5, 5, 0)
    }
}));

export default function MainRoutes() {
    const [login, setLogin] = useState(false);
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const userAuthToken = localStorage.getItem('userAuthToken');
    const location = useLocation();




    return (

        <>
            {
                CampaignAdminAuthToken && location.pathname.startsWith('/campaign') &&

                <Routes>
                    <Route path="/" element={<CampaignAdminLayout />} >
                        <Route path="/campaign/:name" element={<OrganizationAdminController />} />

                    </Route>
                </Routes>
            }

            {


                location.pathname.startsWith('/admin') ?
                    !adminAuthToken && !userAuthToken && !CampaignAdminAuthToken &&
                    <ThemeConfig>
                        <ScrollToTop />
                        <GlobalStyles />
                        <BaseOptionChartStyle />
                        <LogoOnlyLayout />
                    </ThemeConfig>
                    :

                    !location.pathname.startsWith('/admin') &&  !location.pathname.startsWith('/campaign') && !userAuthToken &&

                    <>
                        <Routes>
                            {/* <Route path="/" element={<FrontEndAuthLayOut />} > */}
                                <Route exact path="/" element={<SigninController />} />
                                <Route exact path="/signin" element={<SigninController />} />
                                <Route exact path="*" element={<SigninController />} />
                                <Route exact path="/signup" element={<SignupController />} />
                                <Route exact path="/forgot-password" element={<ForgotPasswordController />} />


                            {/* </Route> */}



                        </Routes>
                    </>

            }

            {

                adminAuthToken && location.pathname.startsWith('/admin') ?


                    <ThemeConfig>
                        <ScrollToTop />
                        <GlobalStyles />
                        <BaseOptionChartStyle />
                        <AdminPrivateRoutes />
                    </ThemeConfig> :

                    ""





            }






            {
                userAuthToken && !location.pathname.startsWith('/admin') &&
                <Routes>
                    <Route path="/" element={<FrontEndLayOut />} >
                        <Route path="/" element={<HomeController />} />

                        <Route exact path="/organization/:name" element={<OrganizationDetailsController />} />
                        <Route exact path="/item/:name" element={<ItemDetailsController />} />
                        <Route exact path="/project/:name" element={<ProjectDetailsController />} />
                        <Route path="/cart" element={<CartController />} />
                        <Route path="/checkout" element={<CheckoutController />} />
                        <Route path="/thankyou" element={<ThankYou />} />


                        <Route path="*" element={<HomeController />} />

                    </Route>
                </Routes>




            }







        </>




    );
}
