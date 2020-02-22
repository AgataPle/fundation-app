import React from 'react';


function LocalCollection(props) {
    return (
        <div className="localCollContainer">
            <div>
                <h3 className="collectionTitle">{props.title}</h3>
                <p className="collectionDesc">{props.aim}</p>
            </div>
            <div>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default LocalCollection;
