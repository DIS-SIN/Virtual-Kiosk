import React from 'react';
import Home from './components/pages/Home';
import dictionary from './dictionaries/fr';
import kiosk from './assets/kioskFrench.png';
import './App.css';

export default function App(props) {

    return (
        <Home t={dictionary} kiosk={kiosk}/>
    );
    
}
