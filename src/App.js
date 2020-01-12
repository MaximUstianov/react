import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            pageTitle: 'React components',
            showCars: true,
            inputValues: {name: "", year: ""},
            canAdd: true
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
        if (this.state.cars.includes(this.state.inputValues.name)) {
            console.log("wrong name");
        } else {
            if (this.state.cars.name !== this.state.inputValues.name) {
                this.setState({
                    cars: [...this.state.cars, {name: this.state.inputValues.name, year: this.state.inputValues.year}]
                })
            }
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
                    <a href="/about">About page</a>
                    <button
                        onClick={this.toggleCarsHandler}
                    >Toggle cars
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
                            required pattern="(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d"
                            onChange={this.onChangeHandler}
                            name="year"
                            type="text"
                            placeholder={"release date DD/MM/YYYY"}
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

export default App;

