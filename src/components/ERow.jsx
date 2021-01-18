import React, { Component } from 'react'
import '../css/homeStyles.css';
import { Link } from 'react-router-dom';

export default class ERow extends Component {
    render() {
        return (
            <tr>
                <td scope="row" className="name-text">{this.props.id}</td>
                <td className="name-text">{this.props.nombre}</td>
                <td className="acciones">
                    <div className="link">
                        <Link to="/leer"><span class="badge badge-pill badge-primary text">Leer</span></Link>
                    </div>
                    <div className="link">
                        <Link to="/modificar"><span class="badge badge-pill badge-secondary text">Modificar</span></Link>
                    </div>
                    <div className="link">
                        <Link to={`/eliminar/${this.props.nombre}`}><span class="badge badge-pill badge-danger text">Eliminar</span></Link>
                    </div>    

                    {/* <a href="./leerPregunta.html" onClick={this.handleSubmit}>Leer Pregunta</a>
                    <span>  ||  </span>
                    <a href="./modificarPregunta.html">Modificar Pregunta</a>
                    <span>  ||  </span>
                    <a href="./eliminarPregunta.html">Eliminar Pregunta</a> */}
                </td>
            </tr>
        )
    }
}
