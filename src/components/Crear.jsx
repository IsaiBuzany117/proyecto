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

    constructor (){
        super();
        this.state = {
            nombre: '',
            tipo: 'Numeros'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
        const board = document.getElementById("board1");
        this.setState({
            tipo: evt.target.id
        })
        console.log(this.state.tipo);
        // const board = document.getElementById("board1");
        // switch(evt.target.id){
        //     case "Patrones":
        //         console.log("Patronesssss");
        //         console.log(board.firstChild.firstChild);
        //         const h1 = document.createElement("h1");
        //         h1.textContent = "A";
        //         board.firstChild.firstChild.replaceWith(h1);
        //         // board.replaceWith(board.firstChild.firstChild, h1;
        //     break;
        //     case "Ecuaciones":
                
        //         console.log(board.lastChild);
        //         board.lastChild.firstChild.textContent="X";
        //     break;
        //     case "Numeros":
        //         for(let i = 0; i < board.childNodes.length; i++){
        //             board.childNodes[i].firstChild
        //         }
        //     break;
        // }
    }
    render() {
        const boardContent = () => {
            if(this.state.tipo == "Numeros"){
                return(
                    <Board id="board1" className="board">
                        <Card id="card1" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-4</h4>
                            
                        </Card>
                        <Card id="card2" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-3</h4>
                            
                        </Card>
                        <Card id="card3" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-2</h4>
                        </Card>
                        <Card id="card4" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-1</h4>
                        </Card>
                        <Card id="card5" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">0</h4>
                        </Card>
                        <Card id="card6" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">1</h4>
                        </Card>
                        <Card id="card7" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">2</h4>
                        </Card>
                        <Card id="card8" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">3</h4>
                        </Card>
                        <Card id="card9" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">4</h4>
                        </Card>
                        <Card id="card10" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">5</h4>
                        </Card>
                        <Card id="card11" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">6</h4>
                        </Card>
                        <Card id="card12" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">7</h4>
                        </Card>
                    </Board>   
                )
            } else if(this.state.tipo == "Ecuaciones"){
                return(
                    <Board id="board1" className="board">
                        <Card id="card1" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-4</h4>
                            
                        </Card>
                        <Card id="card2" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-3</h4>
                            
                        </Card>
                        <Card id="card3" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-2</h4>
                        </Card>
                        <Card id="card4" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-1</h4>
                        </Card>
                        <Card id="card5" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">0</h4>
                        </Card>
                        <Card id="card6" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">1</h4>
                        </Card>
                        <Card id="card7" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">2</h4>
                        </Card>
                        <Card id="card8" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">3</h4>
                        </Card>
                        <Card id="card9" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">4</h4>
                        </Card>
                        <Card id="card10" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">5</h4>
                        </Card>
                        <Card id="card11" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">6</h4>
                        </Card>
                        <Card id="card12" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">X</h4>
                        </Card>
                    </Board>   
                )
            } else if(this.state.tipo == "Patrones"){
                return(
                    <Board id="board1" className="board">
                        <Card id="card1" className="card" draggable="true">
                            <input type="file" name="img1" id="img1" className="text-center"/>
                            
                        </Card>
                        <Card id="card2" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-3</h4>
                            
                        </Card>
                        <Card id="card3" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-2</h4>
                        </Card>
                        <Card id="card4" className="card" draggable="true">
                            <h4 className="text-center h1 font-we">-1</h4>
                        </Card>
                    </Board>
                )
            }
        }

        return(
            <div>
                
                <h3>Crear Ejercicio</h3>
                <label htmlFor="nombre" className="nombre">Nombre del ejercicio:</label>
                <input type="text" name="nombre" id="nombre" className="in-nombre"/>

                <div className="flexbox">
                    {boardContent()}

                    <Builder id="builder" className="builder"></Builder>

                    <Board id="board2" className="board">
                        
                    </Board>   
                </div>    
                <footer className="flexbox-ej">
                    <Ejercicio id="Patrones" img={Pattern} title="Patrones" className="border" onClick={this.handleClick}></Ejercicio>
                    <Ejercicio id="Numeros" img={Numbers} title="Numeros" className="border" onClick={this.handleClick}></Ejercicio>
                    <Ejercicio id="Ecuaciones" img={Equations} title="Ecuaciones" className="border" onClick={this.handleClick}></Ejercicio>
                </footer>
                
            </div>
        )
    }

}

export default Crear;
