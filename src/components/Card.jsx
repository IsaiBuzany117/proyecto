import React from 'react';

class Card extends React.Component {

    constructor (){
        super();
    }

    handleDragStart (evt) {
        const target = evt.target;

        evt.dataTransfer.setData('card_id', target.id);

    }

    handleDragOver (evt) {
        evt.stopPropagation();
    }

    render (){
        return(

            <div
                id = {this.props.id}
                className = {this.props.className}
                draggable = {this.props.draggable}
                onDragStart = {this.handleDragStart}
                onDragOver = {this.handleDragOver}

            >                
                {this.props.children}
            </div>

        );
    }

}

export default Card;