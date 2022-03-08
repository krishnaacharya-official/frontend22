import { Link } from "react-router-dom"
import Prestream from '../../../assets/images/prestream.png';

export default function Signin(props) {
    let stateData = props.stateData;
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
                        {/* <div>
                            <a href="#" className="btn btn-block indigo text-white m-b-sm">
                                <i className="fa fa-facebook pull-left"></i>
                                Sign in with Facebook
                            </a>
                            <a href="#" className="btn btn-block red text-white">
                                <i className="fa fa-google-plus pull-left"></i>
                                Sign in with Google+
                            </a>
                        </div>
                        <div className="m-y text-sm">
                            OR
                        </div> */}
                        <form name="form">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.email &&<p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}

                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" id="password" placeholder="password" required onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.password &&<p className="error">{stateData.error ? stateData.error.password ? stateData.error.password : "" : ""}</p>}

                            </div>
                            {/* <div className="m-b-md">
                                <label className="md-check " htmlFor="ch">
                                    <input type="checkbox" /><i className="primary"/> Keep me signed in
                                </label>
                            </div> */}
                            <button type="button" className="btn btn-lg black p-x-lg" onClick={()=>props.signIn()}>Sign in</button>
                        </form>
                        <div className="m-y">
                            <Link to="/forgotpassword" className="_600">Forgot password?</Link>
                        </div>
                        <div>
                            Do not have an account?
                            &nbsp;<Link to='/signup'  className="text-primary _600">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}