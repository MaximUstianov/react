import React, {Component} from 'react';
import './App.css';
import Table from './Table'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'React components',
        }
    }


    render() {
        return (
            <div>
                <span><a href="/about">Spreadsheet</a></span>
                <Table/>

            </div>
        );
    }
}

export default App;

