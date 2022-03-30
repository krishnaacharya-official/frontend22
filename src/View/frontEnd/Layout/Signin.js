import { Link } from "react-router-dom"
import Prestream from '../../../assets/images/prestream.png';

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
        <div className="text-center" style={bodyStyle}>
            <form className="form-signin" style={form}>
                <img className="mb-4" src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <input type="email" id="inputEmail" name="email" className="form-control" onChange={(e) => props.changevalue(e)} placeholder="Email address" autoComplete={false} />
                {stateData.error && stateData.error.email && <p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}
                <input type="password" id="inputPassword" name="password" onChange={(e) => props.changevalue(e)} className="form-control" placeholder="Password" />
                {stateData.error && stateData.error.password && <p className="error">{stateData.error ? stateData.error.password ? stateData.error.password : "" : ""}</p>}
                <button className="btn btn-lg btn-primary btn-block mt-3" type="button" onClick={() => props.signIn()}>Sign in</button>
                <div className="p-y-lg text-center">
                    <div>Don't have an account? <Link to='/signup' className="text-primary _600">Sign up</Link></div>
                </div>
            </form>

        </div>
    )
}