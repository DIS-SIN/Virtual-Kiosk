import React, { useState, useRef, Fragment } from 'react';
import RichPreview from '../organisms/RichPreview';
import ReactGA from 'react-ga';

export default function ImageMap(props) {

  const [previewData, setPreviewData] = useState(null);

  const richPreviewRef = useRef();

  function showPreview(ev) {
    let project = ev.target.getAttribute("data-project");
    let item = ev.target.getAttribute("data-item");
    setPreviewData(props.t[project][item]);
    richPreviewRef.current.classList.toggle("hide");
  }

  ReactGA.initialize('UA-169138456-1');

  function captureOutboundLink() {
    ReactGA.event({
      category: 'click',
      action: 'http://www.example.com'
    });
  }

  return (
    <Fragment>
      <map name="image-map">
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="busrides" data-item="laptop" alt={props.t.busrides.laptop.cta} title={props.t.busrides.laptop.cta} href={props.t.busrides.laptop.url} coords="127,278,129,327,135,340,207,333,203,319,196,274" shape="poly" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="busrides" data-item="standingDoc" alt={props.t.busrides.standingDoc.cta} title={props.t.busrides.standingDoc.cta} href={props.t.busrides.standingDoc.url} coords="264,265,320,263,323,323,268,324" shape="poly" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="csps" data-item="computerScreen" alt={props.t.csps.computerScreen.cta} title={props.t.csps.computerScreen.cta} href={props.t.csps.computerScreen.url} coords="559,220,555,276,652,284,656,225" shape="poly" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="csps" data-item="envelope" alt={props.t.csps.envelope.cta} title={props.t.csps.envelope.cta} href={props.t.csps.envelope.url} coords="423,249,469,249,470,274,422,273" shape="poly" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="csps" data-item="atSign" alt={props.t.csps.atSign.cta} title={props.t.csps.atSign.cta} href={props.t.csps.atSign.url} coords="419,221,19" shape="circle" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="csps" data-item="standingDoc" alt={props.t.csps.standingDoc.cta} title={props.t.csps.standingDoc.cta} href={props.t.csps.standingDoc.url} coords="481,226,548,227,550,294,482,293" shape="poly" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="csps" data-item="twitterIcon" alt={props.t.csps.twitterIcon.cta} title={props.t.csps.twitterIcon.cta} href={props.t.csps.twitterIcon.url} coords="391,260,18" shape="circle" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="csps" data-item="tvScreen" alt={props.t.csps.tvScreen.cta} title={props.t.csps.tvScreen.cta} href={props.t.csps.tvScreen.url} coords="407,90,588,193" shape="rect" />
        <area onMouseOver={showPreview} onMouseOut={showPreview} onClick={captureOutboundLink} target="_blank" data-project="discoverSeries" data-item="standingDoc" alt={props.t.discoverSeries.standingDoc.cta} title={props.t.discoverSeries.standingDoc.cta} href={props.t.discoverSeries.standingDoc.url} coords="729,222,871,229,864,332,722,320" shape="poly" />
      </map>
      <RichPreview data={previewData} reference={richPreviewRef} />
    </Fragment>
  );

}
