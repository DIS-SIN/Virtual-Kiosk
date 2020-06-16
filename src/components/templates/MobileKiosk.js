import React from 'react';
import RichPreview from '../organisms/RichPreview';
import background from '../../assets/background.jpg';

export default function MobileKiosk(props) {

    let projects = [props.t.busrides, props.t.discoverSeries, props.t.csps];

    function renderList() {

        let output = [];

        projects.forEach(project => {

            output.push(
                <h2>{project.projectName}</h2>
            );

            for (let item in project) {

                item = project[item];

                if (typeof(item) === "object"){

                    output.push(
                        <a href={item.url}>
                            <RichPreview data={item}/>
                        </a>
                    );

                }
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