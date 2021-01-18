import React from 'react';
import Erow from './ERow';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor (){
        super();
        this.state = {
            ejercicios: []
        }
        this.handleAxios = this.handleAxios.bind(this);
        this.handleAxios();
    }

    handleAxios () {
        // let url = `https://jsonplaceholder.typicode.com/users`;
        let url =`http://localhost:8080/test/LeerServlet`
        axios.get(url)
        .then(response => {
            console.log(response.data);

            this.setState({
                ejercicios: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
        console.log(this.state.ejercicios);
    }

    render() {

        const todosejercicios = this.state.ejercicios.map((ejercicio, i) => {
            return(
                <Erow nombre={ejercicio.nombre} id={i}></Erow>
            )
        })

        return(
            <div>
                <h1>Home</h1>
                <Link to = "/crear">Crear nuevo ejercicio</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ejercicio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todosejercicios}
                        {/* <Erow nombre="Ejercicio 1"></Erow>
                        <Erow nombre="Patrones 1"></Erow>
                        <Erow nombre="Numeros 1"></Erow> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;