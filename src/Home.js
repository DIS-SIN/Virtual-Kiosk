import React, { useRef } from 'react';
import { GCSplashScreen } from 'gc-tortilla';
import kiosk from './assets/kioskEnglish.png';
import kioskGlow from './assets/kioskGlow.png';
import background from './assets/background.png';

export default function Home(props) {

    const richPreviewRef = useRef();

    function showPreview(ev) {
        richPreviewRef.current.classList.toggle("hide");
    }

    return (
        <div className="home" style={{backgroundImage: `url(${background})`}}>
            <GCSplashScreen routes={{
                english: "/Virtual-Kiosk",
                french: "/Virtual-Kiosk/fr"
            }}/>

            <div className="map">
                <img className="kioskGlow" src={kioskGlow} useMap="#image-map"/>
                <img src={kiosk}/>
            </div>

            <map name="image-map">
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Busrides" title="Busrides" href="https://busrides-trajetsenbus.ca" coords="132,269,211,341" shape="rect"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="The AI in YouTube" title="The AI in YouTube" href="https://www.youtube.com/watch?v=AbBcfjLXLTE&amp;feature=emb_title" coords="404,85,593,199" shape="rect"/>
            </map>

            <div className="richPreview hide" ref={richPreviewRef}>
                <img src="https://d1em53b5kumigl.cloudfront.net/2019/11/Busrides-Home-Page-Image-Dark.jpg"/>
                <div>
                    <h2>Busrides</h2>
                    <p>Bite sized learning about digital technology and government</p>
                </div>
            </div>

        </div>
    );
}