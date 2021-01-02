import React, { Component } from 'react';
import '../css/crearStyles.css';

export default class Ejercicio extends Component {
    render() {

        return (
            <div>
                <div className={`ejercicios ${this.props.className}`}
                style={{
                    backgroundImage: `url(${this.props.img})`,
                    
                }}
                >
                </div>
                <div className="title-type">
                    <label className="text-warning">{this.props.title}</label>
                </div>
                
            </div>
            
        )   
    }
}
