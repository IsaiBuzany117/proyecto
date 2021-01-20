import React, { Component } from 'react';
import '../css/crearButton.css';

export default class ResetButton extends Component {
    render() {
        return (
            <div className="asd">
                <input type="submit" className="myButtonR" value="Borrar Todo" onClick={this.props.click}></input>
            </div>
        )
    }
}
