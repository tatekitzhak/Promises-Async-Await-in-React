import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Subtopic from './subtopic';


function Topics(props) {
  const [topicName, setTopicName] = useState('');
  const path = props.match.params.link;
  const link = props.match.url;
  const fetchData = () => {
    switch ('topic-1') {
      case 'topic-1':
        return (`${path}`);
      case 'topic-2':
        return (`${path}`);
      case 'topic-3':
        return (`${path}`);
      case 'topic-4':
        return (`${path}`);
      case 'topic-5':
        return (`${path}`);
      case 'topic-6':
        return (`${path}`);
      default:
        return ('Default');
    }
  }
  useEffect(() => {

    setTopicName(fetchData());
  }, [path]);


  return (
    <>
      <Router>
      <section>
        <div className="sidebar-heading border-bottom bg-light">
          <h1>{topicName}</h1>
        </div>
        {console.log("Menu:", props.match.params)}
        <div className="categories_wrapper">
          <h3> Menu:</h3>
          <div className="box a">
            <ul>
              <li><Link to={`${path}/subtopic-1`} >Subtopic 1</Link></li>
              <li><Link to={`${path}/subtopic-2`} >Subtopic 2</Link></li>
              <li><Link to={`${path}/subtopic-3`} >Subtopic 3</Link></li>
              <li><Link to={`${path}/subtopic-4`} >Subtopic 4</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="col-md-8 pull-md-right border">
          {console.log('Topics:', link)}
          <Switch>
            <Route exact path={`${link}/subtopic-1`}
              render={(props) => <Subtopic {...props} msg={'From Task1 To Subtopic'} />} />

            <Route exact path={`${link}/subtopic-1/:link`}
              render={(props) => <Subtopic {...props} msg={'From Task1 To Subtopic'} />} />

          </Switch>
        </div>
      </section>
      </Router>
    </>
  );
};


export default Topics;
