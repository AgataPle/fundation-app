import React from 'react';

export default function OneColumn(props) {
    const {number, title, desc} = props;
    return (
        <div className="infoColumn infoColumnFirst">
            <h2 className="statNumber">{number}</h2>
            <p className="statInfo">{title}</p>
            <p className="statDescription">{desc}</p>
        </div>
    )
}
