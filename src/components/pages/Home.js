import React from 'react';
import { useWindowWidth } from "window-dimensions-hooks";
import { GCSplashScreen } from 'gc-tortilla';
import LangSwitch from '../molecules/LangSwitch';
import Kiosk from '../templates/Kiosk';
import MobileKiosk from '../templates/MobileKiosk';
import background from '../../assets/background.jpg';

export default function Home(props) {

    let width = useWindowWidth();

    function showKiosk() {
        if (width !== 0){
            if (width > 1000){
                return <Kiosk t={props.t} kiosk={props.kiosk}/>;
            }
            return <MobileKiosk t={props.t}/>;
        }
    }

    return (
        <React.Fragment>
            <div className="backgroundImage" style={{backgroundImage: `url(${background})`}}/>
            <GCSplashScreen
                backgroundImage={background}
                routes={{
                    english: "/Virtual-Kiosk",
                    french: "/Virtual-Kiosk/fr"
                }}
            />
            <LangSwitch t={props.t}/>
            {showKiosk()}
        </React.Fragment>
    );
}