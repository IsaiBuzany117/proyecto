import React, { Component } from 'react'
import '../css/crearStyles.css';

export default class Builder extends Component {
    
    constructor (){
        super();

        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
    }

    handleDrop (evt) {
        evt.preventDefault();
        const card_id = evt.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        evt.target.appendChild(card);
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
                <div id="operaciones" className="card border-primary mb-3 border-dot">
                    <div className="card-header">operaciones</div>
                    <div className="card-body caja" placeholder="adasdasdads">
                        
                        <div className="select">
                            <select name="format" id="format">
                                <option selected disabled>Choose a book format</option>
                                <option value="pdf">PDF</option>
                                <option value="txt">txt</option>
                                <option value="epub">ePub</option>
                                <option value="fb2">fb2</option>
                                <option value="mobi">mobi</option>
                            </select>
                        </div>
                        <div className="select">
                            <select name="format" id="format">
                                <option selected disabled>Choose a book format</option>
                                <option value="pdf">PDF</option>
                                <option value="txt">txt</option>
                                <option value="epub">ePub</option>
                                <option value="fb2">fb2</option>
                                <option value="mobi">mobi</option>
                            </select>
                        </div>
                        <div className="select">
                            <select name="format" id="format">
                                <option selected disabled>Choose a book format</option>
                                <option value="pdf">PDF</option>
                                <option value="txt">txt</option>
                                <option value="epub">ePub</option>
                                <option value="fb2">fb2</option>
                                <option value="mobi">mobi</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div id="resultado" className="card border-primary mb-3 border-dot">
                    <div className="card-header">Resultado</div>
                    <div className="card-body text-primary" placeholder="adasdasdads">
                        
                    </div>
                </div>
            </div>
        )
    }
}
