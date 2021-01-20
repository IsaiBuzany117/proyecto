import React, { Component } from 'react'

export default class Operaciones extends Component {
    
    
    render() {

        const typeOp = () => {
            if(this.props.info.tipo == "Patrones"){
                return(
                <div className="card-body caja" placeholder="adasdasdads">                    
                    <div className="select">
                        <select name="imgop" id="imgop" defaultValue="Seleccionar">
                            <option value="Seleccionar" disabled>Seleccionar</option>
                            <option value="Ampliar">Ampliar</option>
                            <option value="Estirar">Estirar</option>
                            {/* <option value="+1" className="op">+1</option>
                            <option value="+2" className="op">+2</option>
                            <option value="+3" className="op">+3</option> */}
                        </select>
                    </div>
                    
                </div>
                )
            } else {
                return(
                <div className="card-body caja" placeholder="adasdasdads">                    
                    <div className="select">
                        <select name="suma" id="suma" defaultValue="Suma">
                            <option value="Suma"disabled>Suma</option>
                            <option value="+1" className="op">+1</option>
                            <option value="+2" className="op">+2</option>
                            <option value="+3" className="op">+3</option>
                        </select>
                    </div>
                    <div className="select">
                        <select name="resta" id="resta" defaultValue="Resta">
                            <option value="Resta"disabled>Resta</option>
                            <option value="-1" className="op">-1</option>
                            <option value="-2" className="op">-2</option>
                            <option value="-3" className="op">-3</option>
                        </select>
                    </div>
                    <div className="select">
                        <select name="multi" id="multi" defaultValue="Multiplicación">
                            <option value="Multiplicación"disabled>Multiplicación</option>
                            <option value="x1" className="op">*1</option>
                            <option value="x2" className="op">*2</option>
                            <option value="x3" className="op">*3</option>
                        </select>
                    </div>
                    <div className="select">
                        <select name="division" id="division" defaultValue="División">
                            <option value="División"disabled>División</option>
                            <option value="/1" className="op">/1</option>
                            <option value="/2" className="op">/2</option>
                            <option value="/3" className="op">/3</option>
                        </select>
                    </div>
                </div>
                )
            }
        }

        return (
            <div id="operaciones" className="card border-primary mb-3 border-dot">
                <div className="card-header">operaciones</div>
                {typeOp()}
            </div>
        )
    }
}
