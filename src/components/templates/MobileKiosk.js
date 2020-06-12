import React from 'react';
import RichPreview from '../organisms/RichPreview';
import background from '../../assets/background.jpg';

export default function MobileKiosk(props) {

    let projects = [props.t.busrides, props.t.csps, props.t.discoverSeries];

    function renderList() {

        let output = [];

        projects.forEach(project => {
            for (let item in project) {
                item = project[item];

                output.push(
                    <a href={item.url}>
                        <RichPreview data={item}/>
                    </a>
                );
            }
        });

        return output;
    }

    return (
        <div className="mobileKiosk" style={{backgroundImage: `url(${background})`}}>
            {renderList()}
        </div>
    );
}