import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TopicsList(props) {
    const path = props.match.path;
    return (
        <>

            <div className="border-end bg-white">
                <div className="sidebar-heading border-bottom bg-light">
                    <h1>TopicsList</h1>
                </div>
                {console.log("TopicsList:", path)}
            </div>

            <section className="categories_wrapper">
                <div className="box a">
                    <h3>Topic 1</h3>
                    <ul>
                        <li><Link to={`${path}/topic-1/a`} >A</Link></li>
                        <li><Link to={`${path}/topic-1/b`} >b</Link></li>
                        <li><Link to={`${path}/topic-1/c`} >C</Link></li>
                        <li><Link to={`${path}/topic-1/d`} >D</Link></li>
                    </ul>
                </div>
                <div className="box b">
                    <h3>Topic 2</h3>
                    <ul>
                        <li><Link to={`${path}/topic-2/a`} >A</Link></li>
                        <li><Link to={`${path}/topic-2/b`} >B</Link></li>
                        <li><Link to={`${path}/topic-2/c`} >C</Link></li>
                        <li><Link to={`${path}/topic-2/d`} >D</Link></li>
                    </ul>
                </div>
                <div className="box c">
                    <h3>Topic 3</h3>
                    <ul>
                        <li><Link to={`${path}/topic-3/a`} >A</Link></li>
                        <li><Link to={`${path}/topic-3/b`} >B</Link></li>
                        <li><Link to={`${path}/topic-3/c`} >C</Link></li>
                        <li><Link to={`${path}/topic-3/d`} >D</Link></li>
                    </ul>
                </div>

            </section>
        </>
    );
};


export default TopicsList;
