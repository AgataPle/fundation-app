import React, {Component} from 'react';


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

export default class LocalCollectionsComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
    }
    render() {
        const {localCollections} = this.props;
        const list = localCollections.map(local => {
            return (

                <LocalCollection
                    title={local.title}
                    aim={local.aim}
                    desc={local.desc}
                />

            );
        });
        return (
            <section className="collectionColumn">
                <div className="container">
                    <div className="titleSection">
                        <h2 className="localTitle">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                            współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                    </div>

                    <div>{list}</div>
                    <div className="pagination">
                        <p>Tutaj pagniacja tylko ukryta w tym przypadku by byla</p>
                    </div>
                    <h3>Minęło {this.state.seconds}</h3>
                </div>
            </section>
        )
    }
}
