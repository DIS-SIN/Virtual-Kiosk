import React from 'react';
import Home from './Home';
import AboutPage from './components/templates/AboutPage';
import dictionary from './dictionaries/en';
import kiosk from './assets/kioskEnglish.png';
import './App.css';

export default function App(props) {

    if (props.aboutPage){
        return (
            <AboutPage t={dictionary}/>
        );    
    }

    return (
        <Home t={dictionary} kiosk={kiosk}/>
    );
    
}
