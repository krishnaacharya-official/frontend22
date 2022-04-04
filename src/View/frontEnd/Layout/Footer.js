import Logo from "../Component/atoms/logo";

const Footer = () =>{
    return(
        <footer className="main-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <div className="footer-heading-wrap">
                        <h3>Stay in the loop</h3>
                        <p>Join our mailing list to stay in the loop with our newest feature releases, non-profit partners, and
                            tips and tricks for navigating Donorport.</p>
                    </div>
                    <div className="sign-up-wrap mb-4">
                        <input type="email" className="form-control" id="yourEmailAddress" placeholder="Your email address" />
                        <button type="button" className="btn btn-primary">Sign up</button>
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-6">
                    <div className="footer-heading-wrap">
                        <h3>Join the community</h3>
                        <div className="social-links-wrap">
                            <a href="#" className="btn btn-primary"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="btn btn-primary"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="btn btn-primary"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="btn btn-primary"><i className="bi bi-discord"></i></a>
                            <a href="#" className="btn btn-primary"><i className="bi bi-envelope-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row footer-top">
                <div className="col-sm-12 col-lg-4">
                    <a href="/" className="logo-wrap">
                        {/* <img src="img/logo.svg" alt="" />
                        Donorport */}
                        <Logo />
                    </a>
                    <p>The world's first and largest crowd-funding platform for non-profits & charities. Donate directly to
                        the needs of the organization and help them fund all of their product needs.</p>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <a className="footer-title" href="#">Home</a>
                    <div className="footer-links">
                        <a href="#">About Us</a>
                        <a href="#">Press &amp; Media</a>
                        <a href="#">Leaderboard</a>
                        <a href="#">XP</a>
                        <a href="#">Ranks</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <a className="footer-title" href="#">Support</a>
                    <div className="footer-links">
                        <a href="#">Help Center</a>
                        <a href="#">Partnerships</a>
                        <a href="#">Sponsorships</a>
                        <a href="#">New Organizations</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <a className="footer-title" href="#">Information</a>
                    <div className="footer-links">
                        <a href="#">Trust &amp; Safety</a>
                        <a href="#">The Crate</a>
                        <a href="#">Become Verified</a>
                        <a href="#">Post Tags</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <a className="footer-title" href="#">Marketplace</a>
                    <div className="footer-links">
                        <a href="#">Animals</a>
                        <a href="#">Education</a>
                        <a href="#">Environment</a>
                        <a href="#">Family</a>
                        <a href="#">Food</a>
                        <a href="#">Home</a>
                        <a href="#">Lifestyle</a>
                        <a href="#">Micro-Farm</a>
                        <a href="#">Relief</a>
                        <a href="#">Science</a>
                        <a href="#">Sports</a>
                        <a href="#">Supplies</a>
                    </div>
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col-md-6">
                    &copy; 2021 Donorport, Inc.
                </div>
                <div className="col-md-6">
                    <div className="footer-bottoms-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer