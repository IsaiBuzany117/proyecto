import React from 'react';
import '../css/loginStyles.css';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    constructor(){
        super();
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (evt) {
        evt.preventDefault();
        if(this.state.user == 'admin' && this.state.password == 'admin'){
            alert("inicio de sesion");
            //window.location.href = "https://www.google.com";
            this.props.history.push("/home")
        } else {
            alert("datos incorrectos");
        }
    }
    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    render() {
        return(
            <div>
                <div className="login">
                    <div className="login-screen">
                        <div className="app-title">
                            <h1>Login</h1>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-form">
                                <div className="control-group">
                                    <input type="text" className="login-field" placeholder="username" name="user" 
                                    onChange={this.handleChange} />
                                    <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                                </div>
                                <div className="control-group">
                                    <input type="password" className="login-field" placeholder="password" name="password" onChange={this.handleChange} />
                                    <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                </div>
                                {/* <a className="btn btn-primary btn-large btn-block" href="#">login</a> */}
                                <input type="submit" value="login" className="btn btn-primary btn-large btn-block"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default withRouter(Login);