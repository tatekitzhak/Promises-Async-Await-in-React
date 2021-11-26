import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {

    useEffect(() => {

    }, []);


    return (
        <>
            <div>
                <section className="convert_service_plan">
                    <h3>Our Converter Services </h3>
                    <p className="section-lead">File converter service, Free online video converter,audio converter, image photo, pictures, converter, PDF Conversion.</p>
                    <div className="services-grid">
                        <div className="service service1">
                            <i className="ti-bar-chart"></i>
                            <h4>Convert Audio File To Text</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="cta">Choose Plan <span className="ti-angle-right">></span></a>
                            <a className="cta">start a stage <span className="ti-angle-right">></span></a>
                        </div>

                        <div className="service service2">
                            <i className="ti-light-bulb"></i>
                            <h4>Convert Image File To Text</h4>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a className="cta">starting a programm <span className="ti-angle-right">></span></a>
                        </div>
                    </div>
                </section>
                <section className="convert_service_plan">
                    <h3>How does it work? </h3>
                    <p className="section-lead">This workflow shows the concept functionality of using the online to text converter.</p>
                    <div className="services-grid">
                        <div className="service service1">
                        <i class="fa fa-upload" aria-hidden="true"></i>
                            <h4>Upload A File Type</h4>
                            <p>Pre-Processing: User provide the input data.
                                Choose the type of file you want to upload and then upload file to the converter.</p>
                            <a className="cta">Read more <span className="ti-angle-right"></span></a>
                        </div>

                        <div className="service service2">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                            <h4>Using Machine Learning Techniques To Text Recognition </h4>
                            <p>The program will use machine learning techniques when audio files of spoken words are uploaded. Speech recognition then identifies words and phrases in languages spoken by humans and the converter service delivers the best text structure results.</p>
                        </div>

                        <div className="service service3">
                        <i class="fa fa-file" aria-hidden="true"></i>

                            <h4>Displaying The Conversion Text On The Page</h4>
                            <p>The converted result will display as text structure on the screen, it will be constructed as a text-searchable file.</p>
                            <a className="cta">Read more <span className="ti-angle-right"></span></a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="service service3">
                        <h4>Additional resources...</h4>
                        <p>Additional resources...</p>
                        <i class="fa fa-sun" ></i>
                        <i class="fa fa-bars"></i>
                        <h4>See also useful content...</h4>
                        <p>See also useful content...</p>
                        <h4>Recommended content...</h4>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Home;
