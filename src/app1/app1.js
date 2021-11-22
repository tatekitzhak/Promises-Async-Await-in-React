import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SildeShow from './sildeShow';
/* 
https://www.youtube.com/watch?v=DJ53-G8EbxE
 */
class App1 extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
        <>
            <SildeShow>
                <img src='https://placekitten.com/g/200/200' alt='Cat pic'/>
                <img src='https://placekitten.com/g/200/300' alt='Cat pic'/>
                <img src='https://placekitten.com/g/200/400' alt='Cat pic'/>
                <img src='https://placekitten.com/g/200/500' alt='Cat pic'/>
                <img src='https://placekitten.com/g/200/600' alt='Cat pic'/>
            </SildeShow>
          
        </>);
    }
};


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App1 />, wrapper) : false; 
