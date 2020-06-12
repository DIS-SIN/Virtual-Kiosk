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
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="GC nuance meets digital know-how - Visit Busrides.ca" title="GC nuance meets digital know-how - Visit Busrides.ca" href="https://busrides-trajetsenbus.ca/" coords="127,278,129,327,135,340,207,333,203,319,196,274" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Over 4,000 of your peers are reading the Going Remote Guide, find out why!" title="Over 4,000 of your peers are reading the Going Remote Guide, find out why!" href="https://busrides-trajetsenbus.ca/en/going-remote-guide/" coords="264,265,320,263,323,323,268,324" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="We help public servants become digital. Discover Digital Academy." title="We help public servants become digital. Discover Digital Academy." href="https://www.csps-efpc.gc.ca/digital-academy/index-eng.aspx" coords="559,220,555,276,652,284,656,225" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Subscribe to our newsletter." title="Subscribe to our newsletter." href="https://da-an.us3.list-manage.com/subscribe?u=9e5810d743bf898c302d3c312&amp;id=bbc8bab3e7" coords="423,249,469,249,470,274,422,273" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Contact us" title="Contact us" href="mailto:csps.digitalacademy-academiedunumerique.efpc@canada.ca" coords="419,221,19" shape="circle"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="What’s going on at Digital Academy? Click to find out." title="What’s going on at Digital Academy? Click to find out." href="https://drive.google.com/drive/folders/1qwtKHi3vT00onClUtAYEt_kM45V_XEJv" coords="481,226,548,227,550,294,482,293" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Follow us on Twitter." title="Follow us on Twitter." href="https://twitter.com/DigiAcademyCAN" coords="391,260,18" shape="circle"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="What does it mean to be digital. Watch the video." title="What does it mean to be digital. Watch the video." href="https://www.youtube.com/watch?v=TZ-TA44WWHc" coords="407,90,588,193" shape="rect"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" alt="Learn about the new Discover Series" title="Learn about the new Discover Series" href="https://drive.google.com/file/d/1pa1-elG0E5IGtF1OWTePtAdnfndLotLF/view?usp=sharing" coords="729,222,871,229,864,332,722,320" shape="poly"/>
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