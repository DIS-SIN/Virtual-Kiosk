import React from 'react';

export default function LangSwitch(props) {

    function getOppositeURL() {
        return props.t.getOppositeLocale === "fr" ? `/${props.t.getOppositeLocale}` : "/";
    }

    return (
        <a className="langSwitch" href={getOppositeURL()}>{props.t.getOppositeLang}</a>
    );
}