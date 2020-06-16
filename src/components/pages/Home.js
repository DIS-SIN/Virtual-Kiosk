import React from 'react';
import { useWindowWidth } from "window-dimensions-hooks";
import { GCSplashScreen } from 'gc-tortilla';
import LangSwitch from '../molecules/LangSwitch';
import Kiosk from '../templates/Kiosk';
import MobileKiosk from '../templates/MobileKiosk';

export default function Home(props) {

    let width = useWindowWidth();

    return (
        <React.Fragment>
            <GCSplashScreen routes={{
                english: "/Virtual-Kiosk",
                french: "/Virtual-Kiosk/fr"
            }}/>
            <LangSwitch t={props.t}/>
            {width > 1000 ?
                <Kiosk t={props.t} kiosk={props.kiosk}/>
            : <MobileKiosk t={props.t}/>}
        </React.Fragment>
    );
}