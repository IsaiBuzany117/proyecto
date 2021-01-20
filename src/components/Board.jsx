import React from 'react';

class Board extends React.Component {

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
        evt.target.appendChild(card);
        evt.target.appendChild(card);
        
    }   

    handleDragOver (evt) {
        evt.preventDefault();
        
    }

    render() {
        return(

            <div 
                id = {this.props.id}
                className = {this.props.className}
                onDrop = {this.handleDrop}
                onDragOver = {this.handleDragOver}
            >
                {this.props.children}
            </div>

        );
    }


}

export default Board;