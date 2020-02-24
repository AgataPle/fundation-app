import React from 'react';
import icon1 from "../assets/Icon.png";

export default function SimpleStep(props) {
    const {simpleStepsTitle, simpleStepsTitleDesc} = props;
    return (
        <div>
            <h4 className="iconTitle">{simpleStepsTitle}</h4>
            <hr className="horizontalLine"/>
            <p className="iconInfo">{simpleStepsTitleDesc}</p>
        </div>
    )
}
