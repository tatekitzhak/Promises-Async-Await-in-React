import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Subtopic(props) {
  const [topicName, setTopicName] = useState('');
  const path = props.match.params.link;
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
      <div className="border-end bg-white">
        <div className="sidebar-heading border-bottom bg-light">
          <h1>Subtopic: {topicName}</h1>
        </div>
        {console.log("Subtopic:", props.match.params)}
      </div>
      <section className="categories_wrapper">
        <div className="box a">
          <h3>Menu: {topicName}</h3>
          <ul>
            <li><Link to={`${path}/item-1`} > 1</Link></li>
            <li><Link to={`${path}/item-2`} > 2</Link></li>
            <li><Link to={`${path}/item-3`} > 3</Link></li>
            <li><Link to={`${path}/item-4`} > 4</Link></li>
          </ul>
        </div>
      </section>
      <section>
        <div className="col-md-8 pull-md-right border">
          {console.log('Subtopic:', props.match)}
          <Switch>
            {/* <Route exact path={`${param}`}
              render={(props) => <Subtopic {...props} msg={'From Task1 To TopicsList'} />} />

            <Route exact path={`${path}/:link`}
              render={(props) => <Subtopic {...props} msg={'From Task1 To Topics'} />} />
 */}
          </Switch>
        </div>
      </section>
    </>
  );
};


export default Subtopic;
