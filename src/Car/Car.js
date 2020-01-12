import React from 'react'
import Radium from "radium";
import './Car.css'

const Car =  props => {
    const inputClasses = ['input']
    if (props.name !== '') {
        inputClasses.push('green')
    }
    else {
        inputClasses.push('red')
    }
    if(props.name.length > 4){
        inputClasses.push('bold')
    }
    const style = {
        border: "1px solid #ccc",
        ':hover': {
            border: "1px solid #aaa"
        },
        ':first-child': {
            background: 'red'
        }
    }
    return (

        <div className="Car" style={style}>
            <h3>Сar name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input type="text" onChange={props.onChangeName} value={props.name} className={inputClasses.join(' ')}/>
            <button onClick={props.onDelete}>Delete</button>
        </div>

    )
}
 export default Radium(Car)