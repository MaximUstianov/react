import React, { Component } from 'react';

class About extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    async componentDidMount() {
        const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
        const json = await response.json();
        this.setState({ data: json });
    }
    render() {
        return (
            <div className="App">
                {this.state.data.map(el => (
                    <li key={el.id}>
                        {el.name}: {el.price_usd}
                    </li>
                ))}
            </div>
        );
    }
}
export default About;
