import { Link } from "react-router-dom"

const ThankYou = () => {

    return (
        <>
            <head>

                <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css' />
                <style>
                    {/* @import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
                    @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css); */}
                </style>
                <link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css" />
                <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
                <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
            </head>
            {/* <body> */}
                <header className="site-header" id="header">
                    <h1 className="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
                </header>

                <div className="main-content">
                    <i className="fa fa-check main-content__checkmark" id="checkmark"></i>
                    <p className="main-content__body mb-5" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>

                    <Link to="/" className="site-footer__fineprint " id="fineprint">Back To Home</Link>
                </div>
            

                {/* <footer className="site-footer" id="footer">
                    <p className="site-footer__fineprint" id="fineprint">Copyright ©2014 | All Rights Reserved</p>
                </footer> */}
            {/* </body> */}
        </>
    )

}
export default ThankYou