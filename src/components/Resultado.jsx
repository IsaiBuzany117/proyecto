import React, { Component } from 'react'
import Card from './Card';
import {simplify} from 'mathjs';
import '../css/imgfiles.css';

export default class Resultado extends Component {
    constructor(){
        super();
        // this.handleOptions = this.handleOptions.bind(this);
        
    }
    
    render() {
        const handleOptions = () => {
            // console.log(this.props.opciones);
            let suma, resta, multi, division, res;
            if(this.props.opciones.build){
                console.log(this.props.opciones);
                if(this.props.opciones.tipo == "Numeros"){
                    let contentCard = this.props.opciones.contentCard;
                    contentCard = parseInt(contentCard);
                    suma = this.props.opciones.suma == "Suma"? 0:parseInt(this.props.opciones.suma);
                    resta = this.props.opciones.resta == "Resta"? 0:parseInt(this.props.opciones.resta);
                    multi = this.props.opciones.multi == "Multiplicación"? 1: parseInt(this.props.opciones.multi.substring(1));
                    division = this.props.opciones.division == "División"? 1: parseInt(this.props.opciones.division.substring(1));

                    res = (( contentCard + suma + resta )*multi)/division ;

                    return (
                        <Card id="card13" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">{res.toFixed(1)}</h4>
                        </Card>
                    );
                } else if(this.props.opciones.tipo == "Ecuaciones"){
                    let contentCard = this.props.opciones.contentCard;

                    suma = this.props.opciones.suma == "Suma"?'':this.props.opciones.suma;
                    resta = this.props.opciones.resta == "Resta"?'':this.props.opciones.resta;
                    multi = this.props.opciones.multi == "Multiplicación"?'': this.props.opciones.multi.substring(1);
                    division = this.props.opciones.division == "División"?'':this.props.opciones.division;
                        
                    res = `((${contentCard+suma+resta})*${multi})${division}`;
                    console.log(res);
                    return (
                        <Card id="card13" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">{simplify(res).toString()}</h4>
                        </Card>
                    ); 
                } else if(this.props.opciones.tipo == "Patrones"){
                    
                    if(this.props.opciones.imgop == "Ampliar"){
                        // img.classList.add("ampliar");
                        const img = document.createElement("img");
                        img.src = this.props.opciones.media;
                        return (
                            <Card id="imgresult" draggable="true">
                                <img id="img" src={this.props.opciones.media} alt="" className="ampliar"/>
                            </Card>
                        )
                    } 
                    if(this.props.opciones.imgop == "Estirar"){ 
                        // img.classList.add("estirar");
                        return (
                            <Card id="imgresult" draggable="true">
                                <img id="img" src={this.props.opciones.media} alt="" className="estirar"/>
                            </Card>
                        )
                    }
                    
                    
                    
                    
                    
                    // let containerB = document.getElementById("result");
                    // let boardop = document.getElementById("board2");
                    // const img = document.createElement("img");
                    // img.src = this.props.opciones.media;
                    // if(this.props.opciones.imgop == "Ampliar"){
                    //     img.classList.add("ampliar");
                    // } 
                    // if(this.props.opciones.imgop == "Estirar"){ 
                    //     img.classList.add("estirar");
                    // }
                    // containerB.appendChild(img);
                }

            } else {
                return <i><span className="text-muted text-center">Resultado</span></i> 
            }
            
            
        }
        return (
            <div id={this.props.id} className="card border-primary mb-3 border-dot">
                <div className="card-header">Resultado</div>
                <div id="result" className="card-body text-primary">
                    
                    {handleOptions()}
                </div>
            </div>
        )
    }
}

