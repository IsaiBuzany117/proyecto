import React, { Component } from 'react'

export default class Operaciones extends Component {
    
    
    render() {
        return (
            <div id="operaciones" className="card border-primary mb-3 border-dot">
                <div className="card-header">operaciones</div>
                <div className="card-body caja" placeholder="adasdasdads">                    
                    {/* <div className="row"> */}
                        <div className="select">
                            <select name="suma" id="suma">
                                <option selected disabled>Suma</option>
                                <option value="+1" className="op">+1</option>
                                <option value="+2" className="op">+2</option>
                                <option value="+3" className="op">+3</option>
                            </select>
                        </div>
                        <div className="select">
                            <select name="resta" id="resta">
                                <option selected disabled>Resta</option>
                                <option value="-1" className="op">-1</option>
                                <option value="-2" className="op">-2</option>
                                <option value="-3" className="op">-3</option>
                            </select>
                        </div>
                        {/* <div class="w-100"></div> */}
                        <div className="select">
                            <select name="multi" id="multi">
                                <option selected disabled>Multiplicación</option>
                                <option value="x1" className="op">x1</option>
                                <option value="x2" className="op">x2</option>
                                <option value="x3" className="op">x3</option>
                            </select>
                        </div>
                        <div className="select">
                            <select name="division" id="division">
                                <option selected disabled>División</option>
                                <option value="/1" className="op">/1</option>
                                <option value="/2" className="op">/2</option>
                                <option value="/3" className="op">/3</option>
                            </select>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
