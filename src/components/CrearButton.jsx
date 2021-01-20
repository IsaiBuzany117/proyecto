import React, { Component } from 'react'
import '../css/crearButton.css'
import { Link } from 'react-router-dom';

export default class CrearButton extends Component {
    render() {
        return (
            <div className="asd">
                <input type="submit" className="myButton" value="Crear Ejercicio" onClick={this.props.click}></input>
            </div>
        )
    }
}
