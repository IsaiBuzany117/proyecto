import React, { Component } from 'react'
import Card from './Card';
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
                let contentCard = this.props.opciones.contentCard;
                contentCard = parseInt(contentCard);
                
                suma = this.props.opciones.suma == "Suma"? 0:parseInt(this.props.opciones.suma);
                resta = this.props.opciones.resta == "Resta"? 0:parseInt(this.props.opciones.resta);
                multi = this.props.opciones.multi == "Multiplicación"? 1: parseInt(this.props.opciones.multi.substring(1));
                division = this.props.opciones.division == "División"? 1: parseInt(this.props.opciones.division.substring(1));

                res = (( contentCard + suma + resta )/ division)* multi ;

                return (
                    <Card id="card13" className="card" draggable="true">
                        <h4 className="text-center h1 font-we">{res.toFixed(1)}</h4>
                    </Card>
                );
            } else {
                return <i><span className="text-muted text-center">Resultado</span></i> 
            }
            
            
        }
        return (
            <div id={this.props.id} className="card border-primary mb-3 border-dot">
                <div className="card-header">Resultado</div>
                <div className="card-body text-primary">
                    
                    {handleOptions()}
                </div>
            </div>
        )
    }
}

