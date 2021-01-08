import React from 'react';
import Board from './Board';
import Card from './Card';
import Builder from './Builder';
import Ejercicio from './Ejercicio';
import '../css/crearStyles.css';
import '../css/crearButton.css'
import '../css/imgfiles.css';
import Pattern from '../img/1.jpg';
import Numbers from '../img/numbers (3).png';
import Equations from '../img/equations.png';
import CrearButton from './CrearButton';

class Crear extends React.Component {

    constructor (){
        super();
        this.state = {
            nombre: '',
            tipo: 'Numeros'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
    }

    handleChangeImg (evt) {
        if(evt.target.files.length > 0){
            let src = URL.createObjectURL(evt.target.files[0]);
            let preview;
            if(evt.target.id == "file-1"){
                preview = document.getElementById("file-1-img");
            } else if(evt.target.id == "file-2"){
                preview = document.getElementById("file-2-img");
            } else if(evt.target.id == "file-3"){
                preview = document.getElementById("file-3-img");
            } else if(evt.target.id == "file-4"){
                preview = document.getElementById("file-4-img");
            }
            // let preview = document.getElementById("file-1-img");
            preview.src = src;
            preview.style.display = "block";

        }
    }
    handleClick(evt){
        const board = document.getElementById("board1");
        this.setState({
            tipo: evt.target.id
        })
        console.log(this.state.tipo);
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
                            <div className="center">
                                <div className="form-input">
                                    <label htmlFor="file-1">Cargar imagen</label>
                                    <input type="file" id="file-1" accept="image/*" onChange={this.handleChangeImg}/>
                                    <div className="preview">
                                        <img id="file-1-img"/>
                                    </div>
                                </div>
                            </div>
                            
                        </Card>
                        <Card id="card2" className="card" draggable="true">
                            <div className="center">
                                <div className="form-input">
                                    <label htmlFor="file-2">Cargar imagen</label>
                                    <input type="file" id="file-2" accept="image/*" onChange={this.handleChangeImg}/>
                                    <div className="preview">
                                        <img id="file-2-img"/>
                                    </div>
                                </div>
                            </div>
                            
                        </Card>
                        <Card id="card3" className="card" draggable="true">
                            <div className="center">
                                <div className="form-input">
                                    <label htmlFor="file-3">Cargar imagen</label>
                                    <input type="file" id="file-3" accept="image/*" onChange={this.handleChangeImg}/>
                                    <div className="preview">
                                        <img id="file-3-img"/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card id="card4" className="card" draggable="true">
                            <div className="center">
                                <div className="form-input">
                                    <label htmlFor="file-4">Cargar imagen</label>
                                    <input type="file" id="file-4" accept="image/*" onChange={this.handleChangeImg}/>
                                    <div className="preview">
                                        <img id="file-4-img"/>
                                    </div>  
                                </div>
                            </div>
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
                <div className="pr row">
                    <div className="flexbox-ej">
                        <Ejercicio id="Patrones" img={Pattern} title="Patrones" className="border" onClick={this.handleClick}></Ejercicio>
                        <Ejercicio id="Numeros" img={Numbers} title="Numeros" className="border" onClick={this.handleClick}></Ejercicio>
                        <Ejercicio id="Ecuaciones" img={Equations} title="Ecuaciones" className="border" onClick={this.handleClick}></Ejercicio>
                    </div>
                    <CrearButton></CrearButton>
                </div>
                
            </div>
        )
    }

}

export default Crear;
