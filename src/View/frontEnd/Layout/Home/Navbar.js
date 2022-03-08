import { Link } from 'react-router-dom';
import Logo from '../../../../assets/images/logo.png';
import Prestream from '../../../../assets/images/prestream.png';
import AccountMenu from '../../AccountMenu';
// import { useParams, useNavigate } from "react-router-dom";

export default function Navbar() {
    // const navigate = useNavigate()

    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className="app-header navbar-md black box-shadow-z1">
            <div className="navbar" data-pjax>
                <a data-toggle="collapse" data-target="#navbar" className="navbar-item pull-right hidden-md-up m-r-0 m-l">
                    <i className="material-icons">menu</i>
                </a>
                <Link to='/' className="navbar-brand md">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                        <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)" />
                        <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color" />
                        <circle cx="24" cy="24" r="10" fill="#ffffff" />
                        <circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate" />
                        <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                        <circle cx="24" cy="24" r="3" fill="#000000" />
                    </svg> */}

                    <img src={Prestream} alt="." />
                    <span className="hidden-folded inline">Prestream</span>
                    {/* <img src={Logo} alt="." className="hide" />
                    <span className="hidden-folded inline">Prestream</span> */}
                </Link>

                {!userData ?
                    <ul className="nav navbar-nav pull-right">
                        <li className="nav-item">
                            <Link to='/signup' className="nav-link">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="signin" className="nav-link">
                                <span className="btn btn-sm rounded primary _600">
                                    Signin
                                </span>
                            </Link>
                        </li>
                    </ul>
                    : 
                    // <h6 className="pull-right md" style={{lineHeight: "3.5rem"}}>Hello {userData.name}</h6>
                    <AccountMenu name ={userData.name} username={userData.username}/>
                }

                <div className="collapse navbar-toggleable-sm l-h-0 text-center" id="navbar">
                    {/* <ul className="nav navbar-nav nav-md inline text-primary-hover">
                    <li className="nav-item">
                        <a href="home.html" className="nav-link">
                            <span className="nav-text">Site</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="player.html" className="nav-link">
                            <span className="nav-text">Web App</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="rtl.html" className="nav-link">
                            <span className="nav-text">Rtl</span>
                        </a>
                    </li>
                </ul> */}
                </div>
            </div>
        </div>
    )
}