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
import BoardOp from './BoardOp';
import ResetButton from './ResetButton';
import { withRouter } from 'react-router-dom';

class Crear extends React.Component {

    constructor (){
        super();
        this.state = {
            nombre: '',
            tipo: 'Numeros',
            contentCard: '',
            activeOp: false,
            build: false,
            media: '',
            contentCard: '' ,
            repuesta: '',
            suma: '',
            resta: '',
            multi: '',
            division: '',
            imgop: '',
            opciones: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleAxios = this.handleAxios.bind(this);
        this.handleDropBuilder = this.handleDropBuilder.bind(this);
        this.handleOP = this.handleOP.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleDrop (evt) {
        evt.preventDefault();
        
        const card_id = evt.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        evt.target.appendChild(card);

        let opaux = [];
        for(let i=0; i<3 ;i++){
            opaux.push((Math.random() * (10+0)-4).toFixed(1));
        }
        console.log(opaux);
        let imgop = document.getElementById("imgop");
        
        if(this.state.tipo == "Patrones"){
            this.setState({
                resultado: imgop.value,
                activeOp: true,
            })
        } else {
            this.setState({
                resultado: card.firstChild.textContent,
                activeOp: true,
                opciones: opaux
            })
        }
        
        console.log(this.state);
        
        
    }   

    handleDropBuilder (evt){
        evt.preventDefault();
        const card_id = evt.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';
        
        if(card.nodeName == "IMG"){
            card.classList.add("prewiew");
            
        }
        evt.target.appendChild(card);

        this.setState({
            contentCard: card.textContent,     
        })
    }

    handleOP (evt){
        const suma1 = document.getElementById("suma");
        const resta2 = document.getElementById("resta");
        const multi3 = document.getElementById("multi");
        const division4 = document.getElementById("division");
        const imgop = document.getElementById("imgop");

        if (this.state.tipo == "Patrones"){
            this.setState({
                build: true,
                imgop: imgop.value
            })
        } else {
            this.setState({
                build: true,
                suma: suma1.value,
                resta: resta2.value,
                multi: multi3.value,
                division: division4.value,
            })
        }
    }

    handleDragOver (evt) {
        evt.preventDefault();
        
    }

    handleChangeName(evt){
        this.setState({
            nombre: evt.target.value
        })
        
    }

    handleAxios (evt) {
        console.log(this.state.nombre);
        this.props.history.push("/home")
    }

    handleReset (evt) {
        // this.props.history.push("/crear")
        location.reload()
    }

    handleChangeImg (evt) {
        if(evt.target.files.length > 0){
            let src = URL.createObjectURL(evt.target.files[0]);
            let containerB = document.getElementById("containerB");
            const img = document.createElement("img");
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
            img.src = src;
            img.setAttribute("class", "img-card");
            containerB.appendChild(img);
            this.setState({
                media: src
            })
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
                        <Card id="card1" className="card" draggable="true" k="ck1">
                            <h4 className="text-center h1 font-we">-4</h4>
                        </Card>
                        <Card id="card2" className="card" draggable="true" k="ck2">
                            <h4 className="text-center h1 font-we">-3</h4>
                        </Card>
                        <Card id="card3" className="card" draggable="true" k="ck3">
                            <h4 className="text-center h1 font-we">-2</h4>
                        </Card>
                        <Card id="card4" className="card" draggable="true" k="ck4">
                            <h4 className="text-center h1 font-we">-1</h4>
                        </Card>
                        <Card id="card5" className="card" draggable="true" k="ck5">
                            <h4 className="text-center h1 font-we">0</h4>
                        </Card>
                        <Card id="card6" className="card" draggable="true" k="ck6">
                            <h4 className="text-center h1 font-we">1</h4>
                        </Card>
                        <Card id="card7" className="card" draggable="true" k="ck7">
                            <h4 className="text-center h1 font-we">2</h4>
                        </Card>
                        <Card id="card8" className="card" draggable="true" k="ck8">
                            <h4 className="text-center h1 font-we">3</h4>
                        </Card>
                        <Card id="card9" className="card" draggable="true" k="ck9">
                            <h4 className="text-center h1 font-we">4</h4>
                        </Card>
                    </Board>   
                )
            } else if(this.state.tipo == "Ecuaciones"){
                return(
                    <Board id="board1" className="board">
                        <Card id="card1" className="card" draggable="true" k="cke1">
                            <h4 className="text-center h1 font-we">-4</h4>
                        </Card>
                        <Card id="card2" className="card" draggable="true" k="cke2">
                            <h4 className="text-center h1 font-we">-3</h4>
                        </Card>
                        <Card id="card3" className="card" draggable="true" k="cke3">
                            <h4 className="text-center h1 font-we">-2</h4>
                        </Card>
                        <Card id="card4" className="card" draggable="true" k="cke4">
                            <h4 className="text-center h1 font-we">-1</h4>
                        </Card>
                        <Card id="card5" className="card" draggable="true" k="cke5">
                            <h4 className="text-center h1 font-we">0</h4>
                        </Card>
                        <Card id="card6" className="card" draggable="true" k="cke6">
                            <h4 className="text-center h1 font-we">1</h4>
                        </Card>
                        <Card id="card7" className="card" draggable="true" k="cke7">
                            <h4 className="text-center h1 font-we">2</h4>
                        </Card>
                        <Card id="card8" className="card" draggable="true" k="cke8">
                            <h4 className="text-center h1 font-we">3</h4>
                        </Card>
                        <Card id="card9" className="card" draggable="true" k="cke9">
                            <h4 className="text-center h1 font-we">X</h4>
                        </Card>
                    </Board>   
                )
            } else if(this.state.tipo == "Patrones"){
                return(
                    <Board id="board1" className="board">
                        <Card id="card1" className="card" draggable="true" k="ckp1">
                            <div className="center">
                                <div className="form-input">
                                    <label htmlFor="file-1">Cargar imagen</label>
                                    <input type="file" id="file-1" accept="image/*" onChange={this.handleChangeImg}/>
                                    {/* <Card id="card1" className="prewiew" draggable="true" k="img">
                                        <img id="file-1-img"/>
                                    </Card> */}
                                    
                                    <div >
                                        <img id="file-1-img"/>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Board>
                )
            }
        }

        const op = this.state.opciones.map((op, i) => {
            return(
                <Card id={`cardF${i+1}`} className="card" draggable="true" k={`op${i+1}`}>
                    <h4 className="text-center h1 font-we" >{op}</h4>
                </Card>
            )
        })

        return(
            <div>
                
                <h3>Crear Ejercicio</h3>
                <label htmlFor="nombre" className="nombre">Nombre del ejercicio:</label>
                <input type="text" name="nombre" id="nombre" className="in-nombre" onChange={this.handleChangeName}/>

                <div className="flexbox">
                    {boardContent()}

                    <Builder id="builder" className="builder" drop={this.handleDropBuilder} info={this.state} op={this.handleOP}></Builder>

                    <BoardOp id="board2" className="board" dragOver={this.handleDragOver} drop={this.handleDrop}>
                        {op}
                    </BoardOp>
                    {/* <Board id="board2" className="board">
                        
                    </Board>    */}
                </div>    
                <div className="pr row">
                    <div className="flexbox-ej">
                        <Ejercicio id="Patrones" img={Pattern} title="Patrones" className="border" onClick={this.handleClick}></Ejercicio>
                        <Ejercicio id="Numeros" img={Numbers} title="Numeros" className="border" onClick={this.handleClick}></Ejercicio>
                        <Ejercicio id="Ecuaciones" img={Equations} title="Ecuaciones" className="border" onClick={this.handleClick}></Ejercicio>
                    </div>
                    <ResetButton click={this.handleReset}></ResetButton>
                    <CrearButton click={this.handleAxios}></CrearButton>
                </div>
                
            </div>
        )
    }

}

export default withRouter(Crear);
