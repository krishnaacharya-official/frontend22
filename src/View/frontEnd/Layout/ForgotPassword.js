import Prestream from '../../../assets/images/prestream.png';
import { Link } from 'react-router-dom';


export default function ForgotPassword(props) {
    let stateData = props.stateData
    return (
        <div className="app dk" id="app">
            <div className="padding">
                <div className="navbar">
                    <div className="pull-center">
                        <Link to="/" className="navbar-brand md">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                                <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)" />
                                <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color" />
                                <circle cx="24" cy="24" r="10" fill="#ffffff" />
                                <circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate" />
                                <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                                <circle cx="24" cy="24" r="3" fill="#000000" />
                            </svg> */}
                            <img src={Prestream} alt="." />
                            <img src="images/logo.png" alt="." className="hide" />
                            <span className="hidden-folded inline">Prestream</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="b-t">
                <div className="center-block w-xxl w-auto-xs p-y-md text-center">
                    <div className="p-a-md">

                        <form name="form">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.email && <p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}

                            </div>

                            <button type="button" className="btn btn-lg black p-x-lg" onClick={() => props.sendOtp()}>Send</button>
                        </form>

                        <div className='m-y'>
                            Back To
                            &nbsp;<Link to='/signin' className="text-primary _600">Sign in</Link>&nbsp; Page
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}