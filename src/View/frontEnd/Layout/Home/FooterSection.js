import Prestream from '../../../../assets/images/prestream.png';

export default function FooterSection(){
    return(
        <div className="white dk pos-rlt">
                        <div className="p-a-md">
                            <div className="footer p-y-md text-primary-hover">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="clearfix m-b-lg">
                                            <a href="index.html" className="navbar-brand md">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                                                    <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)" />
                                                    <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color" />
                                                    <circle cx="24" cy="24" r="10" fill="#ffffff" />
                                                    <circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate" />
                                                    <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                                                    <circle cx="24" cy="24" r="3" fill="#000000" />
                                                </svg> */}

                                                <img src={Prestream} alt="." style={{borderRadius:"7px"}}/>
                                                <span className="hidden-folded inline">Prestream</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-xs-6">
                                        <h6 className="text-u-c m-b text-muted">About</h6>
                                        <div className="m-b-md">
                                            <ul className="nav l-h-2x _600">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">About us</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Mobile apps</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Blog</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Jobs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-xs-6">
                                        <h6 className="text-u-c m-b text-muted">Links</h6>
                                        <div className="m-b-md">
                                            <ul className="nav l-h-2x _600">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Help</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Support</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Legal</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Copyright</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-xs-6">
                                        <h6 className="text-u-c m-b text-muted">Connect</h6>
                                        <div className="m-b-md">
                                            <ul className="nav l-h-2x _600">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Facebook</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Twitter</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Google+</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-6">
                                        <h6 className="text-u-c m-b text-muted">Subscribe</h6>
                                        <p>Do not want to miss our newsletter?</p>
                                        <form className="m-b-lg">
                                            <input type="text" className="form-control" placeholder="Your email" />
                                            <button type="submit" className="btn btn-sm btn-outline b-dark rounded m-t">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="b b-b m-b m-t-lg"/>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a href="#" className="text-muted text-sm">Cookies</a>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="text-sm-right text-xs-left">
                                            <small className="text-muted">&copy; Copyright. All rights reserved.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )

}