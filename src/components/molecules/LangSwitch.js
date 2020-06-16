import React from 'react';

export default function LangSwitch(props) {

    function getOppositeURL() {
        return props.t.getOppositeLocale === "fr" ? `/Virtual-Kiosk/${props.t.getOppositeLocale}` : "/Virtual-Kiosk";
    }

    return (
        <a className="langSwitch" href={getOppositeURL()}>{props.t.getOppositeLang}</a>
    );
}