import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Particles from 'react-particles-js';
import AboutMe from "./components/AboutMe/AboutMe";


const particlesOpt = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "line_linked": {
            "enable": true,
            "distance": 140,
            "color": "#6d98ff",
            "opacity": 0.4,
            "width": 2
        },
        }
};


function App() {
    return (

        <div className="App">
            <Particles className={'particles'} params={particlesOpt}/>
            <Header/>
            <Main/>
            {/*<AboutMe/>*/}
            <Skills />
            <Projects />
            <Slogan/>
            <Contacts />
            <Footer/>
        </div>

    );
}

export default App;
