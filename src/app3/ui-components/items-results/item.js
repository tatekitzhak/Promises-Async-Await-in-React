import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Item(props) {

    useEffect(() => {

    }, []);


    return (
        <>
            <div>
                <section>
                    <div className="services-grid">
                        <div className="service service1">
                            <h4>Convert Audio File To Text</h4>
                            <p className="section-lead">This workflow shows the concept functionality of using the online to text converter.</p>
                            <a className="cta">Read more <span className="ti-angle-right"></span></a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="services-grid">
                        <div className="service service1">
                            <h4>Convert Audio File To Text</h4>
                            <p className="section-lead">This workflow shows the concept functionality of using the online to text converter.</p>
                            <a className="cta">Read more <span className="ti-angle-right"></span></a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="services-grid">
                        <div className="service service1">
                            <h4>Convert Audio File To Text</h4>
                            <p className="section-lead">This workflow shows the concept functionality of using the online to text converter.</p>
                            <a className="cta">Read more <span className="ti-angle-right"></span></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Item;
