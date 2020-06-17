import React, { useState, useRef, useEffect } from 'react';
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
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
  } 
}, [count]);
    return (
        <div className="home">
          <RingLoader
            size={150}
            color={"#a630a6"}
            loading={(count<2)}
          />
            <div className="map">
                <img className="kioskGlow" src={kioskGlow} useMap="#image-map" onLoad={() => imageLoaded()} hidden ref={glowRef}/>
                <img src={props.kiosk} hidden ref={kioskRef} onLoad={() => imageLoaded()}/>
            </div>
            <ImageMap t={props.t} />
        </div>
    );
}