import React from "react";
import {Link, Route} from "react-router-dom";
import UserService from "../services/UserService";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';

const margin = {
    margin: "0.2em"
};

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.service = new UserService();
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        const user = {
            id: "",
            type: "",
            firstName: "",
            lastName: "",
            username: this.state.username,
            password: this.state.password,
            dob: ""
        }
        this.service.login(user)
            .then((response) => {
                if (!response) {
                    alert("Your login credentials are incorrect.")
                } else {
                    this.props.history.push('/profile')
                }
            })
    }

    usernameChanged = event =>
        this.setState({
            username: event.target.value
        })
    passwordChanged = event =>
        this.setState({
            password: event.target.value
        })

    render() {
        return (
            <div>
                <h1 style={{marginBottom: "1em"}}>Login</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2"> Username </label>
                        <div className="col-sm-10">
                            <input className="form-control" placeholder="alice" id="username"
                                   onChange={this.usernameChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2"> Password </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="password"
                                   placeholder="!@#$QWERzxc" id="password"
                                   onChange={this.passwordChanged}/>
                        </div>
                    </div>
                    <a className="btn btn-primary" style={margin}
                       onClick={this.login}>Sign in</a>
                    <a className="btn btn-danger" href="/" style={margin}>Cancel</a>
                    <p align="right">
                        <a href="/register">Sign up</a>
                    </p>
                </form>
                <Link to="/"><h6 className="float-right" style={{marginTop: "2em"}}>Return home</h6></Link>
            </div>
        )
    }
}

export default withRouter(Login);

