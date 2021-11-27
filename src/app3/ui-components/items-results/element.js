import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Element(props) {

    useEffect(() => {

    }, []);


    return (
        <>
            <div>
                <section>
                    <div class="link-nodes-path">
                        <ul class="links breadcrumb">
                            <li class="link-node"><a href="#" >Path: </a></li>
                            <li class="link-node"><a href="#">A/</a></li>
                            <li class="link-node"><a href="#">B/</a></li>
                            <li class="link-node"><a href="#">C/</a></li>
                            <li class="link-node"><a href="#">D/</a></li>
                            <li class="link-node"><a href="#">E</a></li>
                        </ul>
                    </div>
                </section>
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
                                <button className="btn btn-primary text-white" type="button" >Yes</button>
                                <button className="btn border-dark text-black" type="button" >Not really</button>
                            </div>
                        </div>
                        <div>
                            <span >Glad we could help!</span>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <label>Can you tell us more about your experience today?</label>
                                    <textarea class="form-control" name="comment" placeholder="Message" rows="6">
                                    </textarea>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 pding-btm">
                                    <label>Leave your email address if you would like us to get back to you on your feedback.</label>
                                    <input class="form-control" type="text" name="email" placeholder="Email (optional)" />

                                </div>
                                <div>
                                    <button className="btn btn-primary text-white" type="button" >Submit</button>
                                    <button className="btn border-dark text-black" type="button" >Skip</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </>
    );
};


export default Element;
