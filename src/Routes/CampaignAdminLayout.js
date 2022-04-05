import { Outlet } from 'react-router-dom';
import WelcomeSidebar from '../View/frontEnd/Layout/WelcomeSidebar';
import Footer from '../View/frontEnd/Layout/Footer';
import '../assets/scss/global.scss'
// import { BrowserRouter as Router, Route, Routes, useLocation, Link as RouterLink } from 'react-router-dom'



export default function CampaignAdminLayout() {
    return (
        <div className="frontend_pages">
            <Outlet />
        </div>
    )

}