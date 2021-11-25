import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Categories(props) {

    return (
        <>

            <div className="border-end bg-white">
                <div className="sidebar-heading border-bottom bg-light">
                    <h1>Categories</h1>
                </div>
                {console.log("Categories:", props)}
            </div>

            <section className="categories_wrapper">
                <div className="box a">
                    <h3>A</h3>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>
                <div className="box b">
                    <h3>B</h3>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>
                <div className="box c">
                    <h3>C</h3>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>

            </section>
        </>
    );
};


export default Categories;
