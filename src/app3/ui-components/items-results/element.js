import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Element(props) {
    const [isHidden, setIsHidden] = useState(0);

    // function handleSubmit(v) {
    //     e.preventDefault();
    //     console.log('You clicked submit.');
    //     setIsHidden(v)
    //   }

    useEffect(() => {
        //setIsHidden(true)
        document.title = `You clicked ${isHidden} times`;
    }, []);


    return (
        <>
            <div>{console.log('You clicked submit.', isHidden)}
                <section>
                    <nav className="link-nodes-path">
                        <ul className="links breadcrumb">
                            <li className="link-node"><a href="#"> Item-1 /</a></li>
                            <li className="link-node"><a href="#"> Item-2 /</a></li>
                            <li className="link-node"><a href="#"> Item-3 /</a></li>
                            <li className="link-node"><a href="#"> Item-4 /</a></li>
                            <li className="link-node active"><a href="#"> Item-5 </a></li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <div className="services-grid">
                        <div className="service service1">
                            <h4>Convert Audio File To Text</h4>
                            <p className="section-lead">This workflow shows the concept functionality of using the online to text converter.</p>

                        </div>
                    </div>
                    <div className="surveyContainer" id="survey-anchor">
                        <div >
                            <span >Was this article useful?</span>
                            <div>
                                
                                <form >
                                    <button  onClick={() => setIsHidden(isHidden + 1)} className="btn btn-primary text-white" type="button" >Yes</button>
                                    <button className="btn border-dark text-black" type="button" >Not really</button>
                                </form>
                            </div>
                        </div>
                        <div style={{ display: isHidden ? 'block' : 'none' }} >
                            <span >Glad we could help!</span>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <label>Can you tell us more about your experience today?</label>
                                    <textarea className="form-control" name="comment" placeholder="Message" rows="6">
                                    </textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 pding-btm">
                                    <label>Leave your email address if you would like us to get back to you on your feedback.</label>
                                    <input className="form-control" type="text" name="email" placeholder="Email (optional)" />

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
