import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NestedMenu from "../navigation/NestedMenu";

function Footer(props) {

    useEffect(() => {

    }, []);


    return (
        <>

            {/* <!--Some of this HTML is directly from Pavilion.  You can change it to whatever you want if you want to mimic this design.--> */}
            <footer className="flex-rw">
                {props.children}
                <NestedMenu route={props.route} id={'homeId'}>

                </NestedMenu>
                {/* <ul className="footer-list-top">
                    <li> <h4 className="footer-list-header">About Pavilion</h4></li>
                    <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" >GET TO KNOW US</a></li>
                    <li><a href='/promos.html' className="generic-anchor footer-list-anchor" >PROMOS</a></li>
                    <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" >BECOME A RETAILER</a></li>
                    <li><a href='/job-openings.html'  className="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>
                    <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" >EVENTS</a></li>
                </ul>
                <ul className="footer-list-top">
                    <li><h4 className="footer-list-header">The Gift Selection</h4></li>
                    <li><a href='/Angels/cat/id/70' className="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
                    <li><a href='/Home-Decor/cat/id/64' className="generic-anchor footer-list-anchor">HOME DECOR</a></li>
                    <li><a href='/Mugs/cat/id/32' className="generic-anchor footer-list-anchor">MUGS</a></li>
                    <li><a href='/Pet-Lover/cat/id/108' className="generic-anchor footer-list-anchor">PET LOVER</a></li>
                    <li><a href='/Ladies-Accessories/cat/id/117' className="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>
                </ul>
                <ul className="footer-list-top">
                    <li id='help'> <h4 className="footer-list-header">Please Help Me</h4></li>
                    <li><a href='/shop/about-contact' className="generic-anchor footer-list-anchor" >CONTACT</a></li>
                    <li><a href='/faq.html' className="generic-anchor footer-list-anchor" >FAQ</a></li>
                    <li id='find-a-store'><a href='/shop/store-locator' className="generic-anchor footer-list-anchor" >STORE LOCATOR</a></li>
                    <li id='user-registration'><a href='/shop/user-registration?URL=' className="generic-anchor footer-list-anchor" >NEW USERS</a></li>
                    <li id='order-tracking'><a href='/shop/order-status'  className="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
                </ul>
                <section className="footer-social-section flex-rw">
                    <span className="footer-social-overlap footer-social-connect"> CONNECT <span className="footer-social-small">with</span> US
                    </span>
                    <span className="footer-social-overlap footer-social-icons-wrapper">
                        <a href="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" title="Pinterest" ><i className="fa fa-pinterest"></i></a>
                        <a href="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" title="Facebook" ><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" title="Twitter" ><i className="fa fa-twitter"></i></a>
                        <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" title="Instagram" ><i className="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" title="Youtube" ><i className="fa fa-moon" aria-hidden="true"></i></a>
                        <a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" ><i className="fa fa-sun" aria-hidden="true"></i></a>
                    </span>
                </section>
                <section className="footer-bottom-section flex-rw">
                    <div className="footer-bottom-wrapper">
                        <i className="fa fa-copyright" role="copyright">
                        </i> 2019 Pavilion in <address className="footer-address" role="company address">Bergen, NY</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
                    </div>
                    <div className="footer-bottom-wrapper">
                        <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
                    </div>
                </section> */}
            </footer>


        </>);
}

export default Footer;