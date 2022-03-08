import { Link } from "react-router-dom"
import '../../../assets/css/style.css'
import Prestream from '../../../assets/images/prestream.png';

export default function SignUp(props) {
    let stateData = props.stateData
    return (
        <div className="app dk" id="app">
            <div className="padding">
                <div className="navbar">
                    <div className="pull-center">
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
                                <i className="fa fa-facebook pull-left"/>
                                Sign up with Facebook
                            </a>
                            <a href="#" className="btn btn-block red text-white">
                                <i className="fa fa-google-plus pull-left"/>
                                Sign up with Google+
                            </a>
                        </div>
                        <div className="m-y text-sm">
                            OR
                        </div> */}
                        <form name="form">
                            <div className="form-group">
                                <select name="role" id="role" className="form-control"  onChange={(e) => props.changevalue(e)}>
                                    <option selected disabled>Sign Up As </option>
                                    <option value="2">Listener</option>
                                    <option value="3">Musician</option>
                                </select>    
                                {stateData.error && stateData.error.role &&<p className="error">{stateData.error ? stateData.error.role ? stateData.error.role : "" : ""}</p>}

                            </div>
                            <div className="form-group">
                                <input type="text" id="name" name="name" value={stateData.name} className="form-control" placeholder="name" onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.name &&<p className="error">{stateData.error ? stateData.error.name ? stateData.error.name : "" : ""}</p>}
                            </div>
                            <div className="form-group">
                                <input type="text" id="username" name="username" value={stateData.username} className="form-control" placeholder="Username" onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.username &&<p className="error">{stateData.error ? stateData.error.username ? stateData.error.username : "" : ""}</p>}
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" value={stateData.email} className="form-control" placeholder="Email" onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.email &&<p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}

                            </div>
                            <div className="form-group">
                                <input type="password" id="password" name="password" value={stateData.password} className="form-control" placeholder="Password" onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.password &&<p className="error">{stateData.error ? stateData.error.password ? stateData.error.password : "" : ""}</p>}

                            </div>
                            <div className="form-group">
                                <input type="password" id="cpassword" name="cpassword" value={stateData.cpassword} className="form-control" placeholder="Confirm Password" onChange={(e) => props.changevalue(e)} />
                                {stateData.error && stateData.error.cpassword &&<p className="error">{stateData.error ? stateData.error.cpassword ? stateData.error.cpassword : "" : ""}</p>}

                            </div>
                            <div className="m-b-md text-sm">
                                <span className="text-muted">By clicking Sign Up, I agree to the</span>&nbsp;
                                <a href="#">Terms of service</a>&nbsp;
                                <span className="text-muted">and</span>&nbsp;
                                <a href="#">Policy Privacy.</a>
                            </div>
                            <button type="button" className="btn btn-lg black p-x-lg" onClick={()=>props.signUp()}>Sign Up</button>
                        </form>
                        <div className="p-y-lg text-center">
                            <div>Already have an account? <Link to='/signin' className="text-primary _600">Sign in</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}