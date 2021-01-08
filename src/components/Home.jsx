import React from 'react';
import Erow from './ERow';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
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
                        <Erow nombre="Ejercicio 1"></Erow>
                        <Erow nombre="Patrones 1"></Erow>
                        <Erow nombre="Numeros 1"></Erow>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;