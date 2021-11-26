import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {

    useEffect(() => {

    }, []);


    return (
        <>
            <div>
                <section>
                    <h3>Our Services</h3>
                    <p className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="services-grid">
                        <div className="service service1">
                            <i className="ti-bar-chart"></i>
                            <h4>Wealth Management</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            {/* <a className="cta">
            Read More <span className="ti-angle-right">

            </a> */}
                        </div>

                        <div className="service service2">
                            <i className="ti-light-bulb"></i>
                            <h4>Financial Planning</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            {/* <a  className="cta">Read More <span className="ti-angle-right"></a> */}
                        </div>

                        <div className="service service3">
                            <i className="ti-money"></i>
                            <h4>Investment Banking</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="cta">Read more <span className="ti-angle-right"></span></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Home;
