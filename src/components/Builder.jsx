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
            build: false,
            contentCard: '' ,
            suma: '',
            resta: '',
            multi: '',
            division: '',
                
        }
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    addItem (evt) {
        const resultado = document.getElementById("resultado");
        console.log(resultado);
        
    }
    handleDrop (evt) {
        evt.preventDefault();
        const card_id = evt.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';
        
        if(card.nodeName == "IMG"){
            card.classList.add("img-card");
            
        }
        evt.target.appendChild(card);

        const suma1 = document.getElementById("suma");
        const resta2 = document.getElementById("resta");
        const multi3 = document.getElementById("multi");
        const division4 = document.getElementById("division");
        this.setState({
                contentCard: card.textContent,
                
        })
        //console.log(card.firstChild.textContent);
        //this.addItem();
        
    }  


    handleClick (evt) {
        // console.log("click");
        const suma1 = document.getElementById("suma");
        const resta2 = document.getElementById("resta");
        const multi3 = document.getElementById("multi");
        const division4 = document.getElementById("division");
        
        // if(suma1.value == "Suma")
        //     suma1 = 0;
        // if(resta2.value == "Resta")
        //     resta2 = 0;
        // if(multi3.value == "Resta")
        //     multi3 = 1;    
        // if(division4.value == "Resta")
        //     division4 = 1;

        this.setState({
            build: true,
            suma: suma1.value,
            resta: resta2.value,
            multi: multi3.value,
            division: division4.value
        })
        // this.setState({
        //     opciones: {
        //         ...this.setState,
        //             suma: suma1,
        //             resta: resta2,
        //             multi: multi3,
        //             division: division4
        //     }
        // });
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
                <div id="opcion" className="card border-primary mb-3 border-dot" onDrop = {this.handleDrop} onDragOver = {this.handleDragOver}>
                    <div className="card-header">Construir</div>
                    <div className="card-body text-primary" placeholder="dadsd">
                        
                    </div>
                </div>
                <Operaciones></Operaciones>
                <button type="button" className="btn btn-dark dark" onClick={this.handleClick}>Construir Resultado</button>
                
                <Resultado id="resultado" opciones={this.state}></Resultado>
            </div>
        )
    }
}
