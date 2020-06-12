import React from 'react';
import Home from './components/pages/Home';
import dictionary from './dictionaries/en';
import kiosk from './assets/kioskEnglish.png';
import './App.css';

export default function App(props) {

    return (
        <Home t={dictionary} kiosk={kiosk}/>
    );
    
}
