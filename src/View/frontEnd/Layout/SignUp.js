import { Link } from "react-router-dom"
import '../../../assets/css/style.css'
import Prestream from '../../../assets/images/prestream.png';
import Logo from "../Component/atoms/logo";
import googleLogo from "../../../assets/authentication/img/google.svg"

export default function SignUp(props) {
    let stateData = props.stateData
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
        // <div className="text-center" style={bodyStyle}>
        //     <form className="form-signin" style={form}>
        //         <img className="mb-4" src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg" alt="" width="72" height="72" />
        //         <h1 className="h3 mb-3 font-weight-normal">Please sign Up</h1>

        //         <input type="text" id="name" name="name" className="form-control" onChange={(e) => props.changevalue(e)} placeholder="Name" autoComplete={false} />
        //         {stateData.error && stateData.error.name && <p className="error">{stateData.error ? stateData.error.name ? stateData.error.name : "" : ""}</p>}

        //         <input type="email" id="inputEmail" name="email" className="form-control" onChange={(e) => props.changevalue(e)} placeholder="Email address" autoComplete={false} />
        //         {stateData.error && stateData.error.email && <p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}
        //         <input type="password" id="inputPassword" name="password" onChange={(e) => props.changevalue(e)} className="form-control" placeholder="Password" />
        //         {stateData.error && stateData.error.password && <p className="error">{stateData.error ? stateData.error.password ? stateData.error.password : "" : ""}</p>}
        //         <input type="password" id="cpassword" name="cpassword" onChange={(e) => props.changevalue(e)} className="form-control" placeholder="Confirm Password" />
        //         {stateData.error && stateData.error.cpassword && <p className="error">{stateData.error ? stateData.error.cpassword ? stateData.error.cpassword : "" : ""}</p>}

        //         <button className="btn btn-lg btn-primary btn-block mt-3" type="button" onClick={() => props.signUp()}>Sign in</button>

        //         <div className="p-y-lg text-center">
        //             <div>Already have an account? <Link to='/signin' className="text-primary _600">Sign in</Link></div>
        //         </div>

        //     </form>

        // </div>
        <div className="col-lg-6">
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
                            Sign Up
                            <a href="#" className="switch-content"></a>
                        </div>

                        <div className="mb-4">
                            <input type="text" className="form-control" name="name" id="name" value={stateData.name} onChange={(e) => props.changevalue(e)} placeholder="Name" />
                            {stateData.error && stateData.error.name && <p className="error">{stateData.error ? stateData.error.name ? stateData.error.name : "" : ""}</p>}
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

                        <div className="mb-5">
                            <div className="input-group">
                                <input type={!props.showCPassword ? "password" : "text"} className="form-control" name="cpassword" onChange={(e) => props.changevalue(e)} id="inputPassword" aria-label="Password"
                                    aria-describedby="basic-addon1" placeholder="Confirm Password" />
                                <span className="input-group-text" id="basic-addon1" >
                                    <i className="bi bi-eye-fill" onClick={() => props.setShowCPassword(!props.showCPassword)}></i>
                                </span>

                            </div>
                            {stateData.error && stateData.error.cpassword && <p className="error">{stateData.error ? stateData.error.cpassword ? stateData.error.cpassword : "" : ""}</p>}
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
                        <button type="button" className="btn btn-primary mb-4" onClick={() => props.signUp()}>Register</button>
                        <Link to='/signin' className="btn btn-link">Already have an account? Sign in</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
}