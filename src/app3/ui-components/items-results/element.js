import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Element(props) {

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
                           
                        </div>
                    </div>
                    <div class="surveyContainer" id="survey-anchor">
                        <div ><span >Was this article useful?</span>
                            <div>
                                <button type="button" >Yes</button>
                                <button type="button" >Not really</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Element;