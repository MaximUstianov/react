import React, {Component} from 'react';
import './Table.css';
import Car from './Car/Car'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            pageTitle: 'Cars',
            showCars: true,
            inputValues: {name: "", year: ""},
        }
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeHandler = e => {
        this.setState({
            inputValues: {...this.state.inputValues, [e.target.name]: e.target.value}
        })
    };

    onSubmitHandler = e => {
        e.preventDefault();

        if (this.state.cars.some(car => car.name === this.state.inputValues.name) === false && this.state.inputValues.year > 1900) {
            this.setState({
                cars: [...this.state.cars, {name: this.state.inputValues.name, year: this.state.inputValues.year}]
            })
        } else if (this.state.inputValues.year < 1900) {
            alert("Year must be > 1900")
        } else {
            alert("This car name already exists!")
        }
    };

    onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }


    deleteHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                    />
                )
            })
        }
        return (

            <div style={divStyle}>
                <div className="index">
                    <h1>{this.props.title}</h1>
                    <button
                        onClick={this.toggleCarsHandler}
                    >show list
                    </button>
                    <form onSubmit={this.onSubmitHandler}>
                        <input
                            required pattern="^[a-zA-Z]+$"
                            onChange={this.onChangeHandler}
                            name="name"
                            type="text"
                            placeholder={"car name"}
                            value={this.state.inputValues.name}
                        />
                        <input
                            required pattern="^[0-9]+$"
                            onChange={this.onChangeHandler}
                            name="year"
                            type="text"
                            placeholder={"year"}
                            value={this.state.inputValues.year}
                        />
                        <button type="submit" onClick={this.contains}>Add car</button>
                    </form>
                    <div style={{
                        width: 400,
                        margin: 'auto',
                        paddingTop: '20px'
                    }}>
                        {cars}
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;