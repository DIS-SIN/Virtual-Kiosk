import React, { useRef } from 'react';
import kiosk from './assets/kiosk.png';
import background from './assets/background.png';

export default function Home(props) {

    const richPreviewRef = useRef();

    function showPreview(ev) {
        richPreviewRef.current.classList.toggle("hide");
    }

    return (
        <div className="home" style={{backgroundImage: `url(${background})`}}>

            <img class="map" src={kiosk} usemap="#image-map"/>

            <map name="image-map">
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Busrides" title="Busrides" href="https://busrides-trajetsenbus.ca" coords="132,269,211,341" shape="rect"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="The AI in YouTube" title="The AI in YouTube" href="https://www.youtube.com/watch?v=AbBcfjLXLTE&amp;feature=emb_title" coords="404,85,593,199" shape="rect"/>
            </map>

            <div class="richPreview hide" ref={richPreviewRef}>
                <img src="https://d1em53b5kumigl.cloudfront.net/2019/11/Busrides-Home-Page-Image-Dark.jpg"/>
                <div>
                    <h2>Busrides</h2>
                    <p>Bite sized learning about digital technology and government</p>
                </div>
            </div>

        </div>
    );
}