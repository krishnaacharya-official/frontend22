import { Outlet } from 'react-router-dom';
import WelcomeSidebar from '../View/frontEnd/Layout/WelcomeSidebar';
import Footer from '../View/frontEnd/Layout/Footer';
import '../assets/authentication/sass/app.scss'
// import { BrowserRouter as Router, Route, Routes, useLocation, Link as RouterLink } from 'react-router-dom'



export default function FrontEndAuthLayOut() {
    return (
        <div className="auth_layout main-wrapper">
            <div className="container-fluid bg-container">
                <div className="row">
                    <WelcomeSidebar/>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )

}