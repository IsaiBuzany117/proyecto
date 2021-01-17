import React, { Component } from 'react'
import Pattern from '../img/1.jpg';
import { Link } from 'react-router-dom';
import '../css/leerStyles.css';

export default class Leer extends Component {
    render() {
        return (
            <div>
                <h1>Leer Ejercicio</h1>
                    <div id="container" className="container">
                        <div id="img">
                            <img src={Pattern} alt="" className="img"/>
                        </div>
                        <div id="info-c" className="info-c">
                            <ul className="info">
                                <li>Nombre</li>
                                <li>Tipo</li>
                                <li>Opciones</li>
                            </ul>
                        </div>
                    </div>
                    <div id="btn-h" className="btn-h">
                        <Link to="/home"><span class="badge badge-light">Regresar al home</span></Link>
                    </div> 
            </div>
        )
    }
}
