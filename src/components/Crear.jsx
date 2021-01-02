import React from 'react';
import Board from './Board';
import Card from './Card';
import Builder from './Builder';
import Ejercicio from './Ejercicio';
import '../css/crearStyles.css';

class Crear extends React.Component {

    render() {
        return(
            <div>
                <h1>Crear Ejercicio</h1>
                <label htmlFor="nombre" className="nombre">Nombre del ejercicio:</label>
                <input type="text" name="nombre" id="nombre" className="in-nombre"/>

                <div className="flexbox">
                    <Board id="board1" className="board">
                        <Card id="card1" className="card" draggable="true">
                            <p>Tarjeta 1</p>
                        </Card>
                        <Card id="card2" className="card" draggable="true">
                            <p>Tarjeta 2</p>
                        </Card>
                        <Card id="card3" className="card" draggable="true">
                            <p>Tarjeta 3</p>
                        </Card>
                        <Card id="card4" className="card" draggable="true">
                            <p>Tarjeta 4</p>
                        </Card>
                    </Board>        

                    
                    <Builder id="builder" className="builder"></Builder>

                    <Board id="board2" className="board">
                        <Card id="card5" className="card" draggable="true">
                            <p>Tarjeta 5</p>
                        </Card>
                    </Board>   
                </div>    
                <footer className="flexbox-ej">
                    <Ejercicio></Ejercicio>
                    <Ejercicio></Ejercicio>
                    <Ejercicio></Ejercicio>
                </footer>
            </div>
        )
    }

}

export default Crear;