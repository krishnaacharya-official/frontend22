import { Outlet } from 'react-router-dom';
import '../assets/scss/global.scss'
// import { BrowserRouter as Router, Route, Routes, useLocation, Link as RouterLink } from 'react-router-dom'



export default function FrontEndLayOut() {
    return (
        <div className='frontend_pages'>
            <Outlet />
        </div>
    )

}