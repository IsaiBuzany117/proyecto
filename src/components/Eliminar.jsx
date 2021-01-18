import React, { Component } from 'react'
import '../css/eliminarStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Eliminar extends Component {
    constructor(){
        super();
        this.handleClickNo = this.handleClickNo.bind(this);
        this.handleAxios = this.handleAxios.bind(this);
        // this.handleAxios();
    }

    handleAxios(){
        console.log("asdas");
        console.log(this.props.match.params.nombre);
        let url =`http://localhost:8080/test/EliminarServlet?nombre=${this.props.match.params.nombre}`;
        console.log("qweqw");
        axios.get(url)
        .catch(err => {
            console.log(err);
        })
        this.props.history.push("/home");
    }


    handleClickNo(){
        this.props.history.push("/home");
    }
    render() {
        return (
            <div>
                <div className="text">
                    <h2>Eliminar ejercicio</h2>
                    <p className="p"><b>¿Estas seguro de que quieres eliminar <code>{this.props.match.params.nombre}</code>?</b></p>
                </div>
                
                <div className="btn-dis">
                    <button type="button" className="btn btn-success success" onClick={this.handleAxios}>Si</button>
                    <button type="button" className="btn btn-danger danger" onClick={this.handleClickNo}>No</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Eliminar);