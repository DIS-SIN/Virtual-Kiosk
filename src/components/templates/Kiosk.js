import React, { useState, useRef, useEffect } from 'react';
import kioskGlow from '../../assets/kioskGlow.png';
import ImageMap from '../molecules/ImageMap';

export default function Kiosk(props) {

  const [count, setCount] = useState(0);
  const glowRef = useRef(null);
  const kioskRef = useRef(null);

function imageLoaded() {
    let newCount = count + 1;
    setCount(newCount);    
  }

useEffect(() => {
  if (count > 1) {
    glowRef.current.hidden = false;
    kioskRef.current.hidden = false;
    console.log("Unhide the Images");
  } 
}, [count]);
    return (
        <div className="home">

            <div className="map">
                <img className="kioskGlow" src={kioskGlow} useMap="#image-map"/>
                <img src={props.kiosk}/>
            </div>

            <map name="image-map">
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="busrides" data-item="laptop" alt={props.t.busrides.laptop.cta} title={props.t.busrides.laptop.cta} href={props.t.busrides.laptop.url} coords="127,278,129,327,135,340,207,333,203,319,196,274" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="busrides" data-item="standingDoc" alt={props.t.busrides.standingDoc.cta} title={props.t.busrides.standingDoc.cta} href={props.t.busrides.standingDoc.url} coords="264,265,320,263,323,323,268,324" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="csps" data-item="computerScreen" alt={props.t.csps.computerScreen.cta} title={props.t.csps.computerScreen.cta} href={props.t.csps.computerScreen.url} coords="559,220,555,276,652,284,656,225" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="csps" data-item="envelope" alt={props.t.csps.envelope.cta} title={props.t.csps.envelope.cta} href={props.t.csps.envelope.url} coords="423,249,469,249,470,274,422,273" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="csps" data-item="atSign" alt={props.t.csps.atSign.cta} title={props.t.csps.atSign.cta} href={props.t.csps.atSign.url} coords="419,221,19" shape="circle"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="csps" data-item="standingDoc" alt={props.t.csps.standingDoc.cta} title={props.t.csps.standingDoc.cta} href={props.t.csps.standingDoc.url} coords="481,226,548,227,550,294,482,293" shape="poly"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="csps" data-item="twitterIcon" alt={props.t.csps.twitterIcon.cta} title={props.t.csps.twitterIcon.cta} href={props.t.csps.twitterIcon.url} coords="391,260,18" shape="circle"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="csps" data-item="tvScreen" alt={props.t.csps.tvScreen.cta} title={props.t.csps.tvScreen.cta} href={props.t.csps.tvScreen.url} coords="407,90,588,193" shape="rect"/>
                <area onMouseOver={showPreview} onMouseOut={showPreview} target="_blank" data-project="discoverSeries" data-item="standingDoc" alt={props.t.discoverSeries.standingDoc.cta} title={props.t.discoverSeries.standingDoc.cta} href={props.t.discoverSeries.standingDoc.url} coords="729,222,871,229,864,332,722,320" shape="poly"/>
            </map>

            <RichPreview data={previewData} reference={richPreviewRef}/>

        </div>
        <ImageMap t={props.t} />
      </div>
    );
}