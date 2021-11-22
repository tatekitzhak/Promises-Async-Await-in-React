import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';

class SlideShow extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        const {children} = this.props;
        return(
        <>
           <div>
               {children}
           </div>
        </>);
    }
};


export default SlideShow;