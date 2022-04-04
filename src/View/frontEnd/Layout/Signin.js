import { Link } from "react-router-dom"
import Prestream from '../../../assets/images/prestream.png';
import "../../../assets/authentication/sass/app.scss"
import Logo from "../Component/atoms/logo";
import googleLogo from "../../../assets/authentication/img/google.svg"

export default function Signin(props) {
    let stateData = props.stateData;
    const bodyStyle = {
        // display: -webkit-box;
        display: "flex",
        "-ms-flex-align": "center",
        "-ms-flex-pack": "center",
        "-webkit-box-align": "center",
        alignItems: "center",
        "-webkit-box-pack": "center",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        // backgroundColor: "#f5f5f5",
        height: "100%",
    }

    const form = {
        width: "100%",
        maxWidth: "330px",
        padding: "15px",
        margin: " 0 auto",
    }
    return (

        <div className="auth_layout col-lg-6">
            <div className="login-form-wrapper">
                <a href="/" className="logo-wrap">
                    <Logo />
                    {/* <img src="../../../assets/authentication/img/logo.svg" alt="" /> */}
                    {/* Donorport */}
                </a>
                <div className="row">
                    <div className="col-xl-8">
                        <form className="login-form">
                            <div className="login-header">
                                Sign in
                                <a href="#" className="switch-content"></a>
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control" name="email" id="email" value={stateData.email} onChange={(e) => props.changevalue(e)} placeholder="Email" />
                                {stateData.error && stateData.error.email && <p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}
                            </div>
                            <div className="mb-5">
                                <div className="input-group">
                                    <input type={!props.showPassword ? "password" : "text"} className="form-control" name="password" onChange={(e) => props.changevalue(e)} id="inputPassword" aria-label="Password"
                                        aria-describedby="basic-addon1" placeholder="Password" />
                                    <span className="input-group-text" id="basic-addon1" >
                                        <i className="bi bi-eye-fill" onClick={() => props.setShowPassword(!props.showPassword)}></i>
                                    </span>

                                </div>
                                {stateData.error && stateData.error.password && <p className="error">{stateData.error ? stateData.error.password ? stateData.error.password : "" : ""}</p>}
                            </div>


                            <div className="form-check-wrap mb-4">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                    <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                </div>
                                <a className="forget-text" href="#">Forgot Password?</a>
                            </div>
                            <button type="button" className="btn btn-outline-secondary mb-4">
                                <img src={googleLogo} alt="google logo" />
                                <span>Sign in with Google</span>
                            </button>
                            <button type="button" className="btn btn-primary mb-4" onClick={() => props.signIn()}>Login</button>
                            <Link  className="btn btn-link" to='/signup'>Don’t have an account? Sign up</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}