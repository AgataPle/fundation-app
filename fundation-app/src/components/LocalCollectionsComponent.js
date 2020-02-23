import React, {Component} from 'react';
import LocalCollection from './LocalCollection';

export default class LocalCollectionsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });

    }

    render() {
        const list = this.props.organizations.map(local => {
            return (

                <LocalCollection
                    title={local.title}
                    aim={local.aim}
                    desc={local.desc}
                />

            );
        });
        const {currentPage, itemsPerPage} = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
        const renderItems = currentItems.map((item, index) => {
            return <div key={index}>{item}</div>
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <button className="pageButton"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </button>
            );
        });

        return (
            <section className="collectionColumn">
                <div className="container">
                    <div className="titleSection">
                        <h2 className="localTitle">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                            którymi
                            współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                    </div>

                    <div>{renderItems}</div>
                    <div id="page-numbers" className="pageNumbers">{renderPageNumbers}</div>

                </div>
            </section>
        )
    }
}


//container -> fun zmienala state - currentPage
//fun -> przekazac organizations
