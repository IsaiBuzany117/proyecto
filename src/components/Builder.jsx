import React, { Component } from 'react'
import Card from './Card';
import Operaciones from './Operaciones';
import Resultado from './Resultado';
import '../css/crearStyles.css';
import '../css/imgfiles.css';

export default class Builder extends Component {
    
    constructor (){
        super();
        this.state = {
    
        }
    
        this.handleDragOver = this.handleDragOver.bind(this);
        
    }

    addItem (evt) {
        const resultado = document.getElementById("resultado");
        console.log(resultado);
        
    }

    handleDragOver (evt) {
        evt.preventDefault();
        
    }
    
    render() {
        return (
            <div
                id = {this.props.id}
                className = {this.props.className}
            >
                <div id="opcion" className="card border-primary mb-3 border-dot">
                    <div className="card-header">Construir</div>
                    <div id="containerB"className="card-body text-primary " placeholder="dadsd"  onDrop = {this.props.drop} onDragOver = {this.handleDragOver}>
                        
                    </div>
                </div>
                <Operaciones info={this.props.info}></Operaciones>
                <button type="button" className="btn btn-dark dark" onClick={this.props.op}>Construir Resultado</button>
                
                <Resultado id="resultado" opciones={this.props.info}></Resultado>
            </div>
        )
    }
}
