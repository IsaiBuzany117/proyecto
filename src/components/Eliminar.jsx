import React, { Component } from 'react'
import '../css/eliminarStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class Eliminar extends Component {
    constructor(){
        super();
        this.handleClickNo = this.handleClickNo.bind(this);
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
                    <button type="button" className="btn btn-success success">Si</button>
                    <button type="button" className="btn btn-danger danger" onClick={this.handleClickNo}>No</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Eliminar);