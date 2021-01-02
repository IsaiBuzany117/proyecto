import React from 'react';
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
                
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;