import React, { Component, Fragment } from "react";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    //https://bootstrapious.com/p/bootstrap-sidebar
    return (
        <>
            <footer className="footer-area footer--light ">
                <div className="footer-big ">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-2 pull-md-right">
                                <div className="footer-widget">
                                <h4 className="footer-widget-title">Audio Converter</h4>
                                    <div className="widget-about">
                                    
                                        <p>Free online Audio and Video convert to text</p>
                                        
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-2 pull-md-right">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">About Us</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">Free Convert</a>
                                            </li>
                                            <li>
                                                <a href="#">Term</a>
                                            </li>
                                            <li>
                                                <a href="#"> Privacy </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-2 pull-md-right">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h4 className="footer-widget-title">CONVERT</h4>
                                        <ul className="list-unstyled text-muted mb-0">
                                            <li ><a className="text-reset" href="/convert-audio-to-text">Audio to Text</a></li>
                                            <li ><a className="text-reset" href="/convert-video-to-text">Video to Text</a></li>
                                            <li ><a className="text-reset" href="/convert-mp3-to-text">MP3 to Text</a></li>
                                            <li ><a className="text-reset" href="/convert-mp4-to-text">MP4 to Text</a></li>
                                            <li ><a className="text-reset" href="/convert-m4a-to-text">M4A to Text</a></li>
                                            <li><a className="text-reset" href="/convert-mov-to-text">MOV to Text</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-text">
                                <p>© 2021 All rights reserved. </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
  }
}

export default Footer;