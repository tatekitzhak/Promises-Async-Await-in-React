import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Composition from './composition';
//import Footer from '../js/components/footer';

import Header from './ui-components-2/pages/header';

import Main from './ui-components-2/pages/main';

import SideBar from './ui-components-2/pages/sidebar';

import Footer from './ui-components-2/pages/footer';

class App2 extends Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
        <>
        <Composition 
            header={<Header /> } 
            main={<Main />} 
            sidebar={<SideBar/>} 
            footer={<Footer/>}/>

            {/* <Composition>
                <Header/>
                <Main/>
                <SideBar/>
                <Footer/>
            </Composition> */}
          
        </>);
    }
};


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App2 />, wrapper) : false; 
