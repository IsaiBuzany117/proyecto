import React, { Component } from 'react';
import Card from './Card';
import '../css/crearStyles.css';

export default class Ejercicio extends Component {
    
    constructor (){
        super();
        this.state = {
            id: ''
        }
        this.handleClick =this.handleClick.bind(this);
        
    }

    handleClick (evt){
        const id = this.props.id;
        this.setState({
            id: id
        })
        switch(id){
            case "Patrones":

            break;
            case "Ecuaciones":
                const board = document.getElementById("board1");
                console.log(board.lastChild);
                board.lastChild.firstChild.textContent="X";
            break;
        }
    }
    
    render() {

        return (
            <div>
                <div className={`ejercicios ${this.props.className}`}
                style={{
                    backgroundImage: `url(${this.props.img})`,
                    
                }}
                onClick={this.props.onClick}
                id = {this.props.id}
                >
                </div>
                <div className="title-type">
                    <label className="text-warning">{this.props.title}</label>
                </div>
                
            </div>
            
        )   
    }
}
