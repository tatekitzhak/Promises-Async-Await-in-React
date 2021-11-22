import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Composition from './composition';
import Footer from '../js/components/footer';

function Header(props) {
    return(
    <>
        <h1>Header</h1>
    </>);
};

function Main(props) {
    return(
    <>
        <h1>Main</h1>
    </>);
};

function SideBar(props) {
    return(
    <>
        <h1>SideBar</h1>
    </>);
};

function Foooter(props) {
    return(
    <>
        <h1>Foooter</h1>
    </>);
};

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
