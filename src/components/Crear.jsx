import React from 'react';
import Board from './Board';
import Card from './Card';
import Builder from './Builder';
import Ejercicio from './Ejercicio';
import '../css/crearStyles.css';
import Pattern from '../img/1.jpg';
import Numbers from '../img/numbers (3).png';
import Equations from '../img/equations.png';

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
                    <Ejercicio img={Pattern} title="Patrones" className="border"></Ejercicio>
                    <Ejercicio img={Numbers} title="Numeros" className="border"></Ejercicio>
                    <Ejercicio img={Equations} title="Ecuaciones" className="border"></Ejercicio>
                </footer>
            </div>
        )
    }

}

export default Crear;