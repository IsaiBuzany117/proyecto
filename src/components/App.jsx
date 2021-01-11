import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Crear from './Crear';
import Eliminar from './Eliminar';
import NotFound from './NotFound';

class App extends React.Component {

    render(){
        return(
            <BrowserRouter basename={"/test"}>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/crear" component={Crear}></Route>
                    <Route exact path="/eliminar/:nombre" component={Eliminar}></Route>
                    {/* <Route component={NotFound}></Route> */}
                </Switch>
            </BrowserRouter>
            // <h1>Hello wordl from ReactJs</h1>
        )
    }
}

export default App;