import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';

class Composition extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        const children = this.props;
        return(
        <>
            {/* <div className={'FancyBorder FancyBorder-' + this.props.color}>
                {this.props.children}
                {console.log('Composition:',Children.count(children))}
            </div> */}
            <div className="app">
                <div className="header">
                    {children.header}
                </div>
                <div className="main">
                    {children.main}
                </div>
                <div className="sidebar">
                    {children.sidebar}
                </div>
                <div className="footer">
                    {children.footer}
                </div>
            </div>
        </>);
    }
};


export default Composition;