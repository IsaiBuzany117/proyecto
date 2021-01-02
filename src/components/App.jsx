import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Crear from './Crear';
import NotFound from './NotFound';

class App extends React.Component {

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/crear" component={Crear}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;