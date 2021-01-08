import React, { Component } from 'react'
import '../css/crearButton.css'
import { Link } from 'react-router-dom';

export default class CrearButton extends Component {
    render() {
        return (
            <div className="asd">
                <Link to="/home"><a class="myButton">Crear Ejercicio</a></Link>
            </div>
        )
    }
}
