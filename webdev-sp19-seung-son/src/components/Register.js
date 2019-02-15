import React from 'react';
import {Link} from "react-router-dom";
import UserService from "../services/UserService";
import {withRouter} from 'react-router-dom'

const title = {
    marginBottom: "2em"
};
const bottom = {
    marginBottom: "1em"
};
const margin = {
    margin: "0.2em"
};

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.service = new UserService();
        this.state = {
            username: '',
            password: '',
            verifiedPassword: ''
        }
    }

    usernameChanged = event =>
        this.setState({
            username: event.target.value
        })
    passwordChanged = event =>
        this.setState({
            password: event.target.value
        })
    verifiedChanged = event =>
        this.setState({
            verifiedPassword: event.target.value
        })
    register = ({history}) => {
        if (this.state.password != this.state.verifiedPassword) {
            alert("Your passwords do not match!")
        } else {
            const user = {
                username: this.state.username,
                password: this.state.password
            }
            this.service.register(user)
                .then(response => {
                    if (!response) {
                        alert("Your username is already taken!");
                    } else {
                        this.props.history.push('/profile')
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <div id="registration">
                    <h1 style={title}>Register</h1>
                    <p>Username:</p>
                    <input className="form-control" style={bottom} id="usernameFld"
                           placeholder="Alice" onChange={this.usernameChanged}/>
                    <p>Password:</p>
                    <input className="form-control" style={bottom} id="passwordFld"
                           placeholder="123qwe@$%" onChange={this.passwordChanged}/>
                    <p>Verify Password:</p>
                    <input className="form-control" style={bottom} id="verifyPasswordFld"
                           placeholder="123qwe@$%" onChange={this.verifiedChanged}/>
                </div>
                <a id="registerBtn" className="btn btn-success"
                   style={margin}
                   onClick={this.register}>Register</a>
                <a className="btn btn-danger" href="/" style={margin}>Cancel</a>
                <Link to="/"><h6 className="float-right" style={{marginTop: "2em"}}>Return home</h6></Link>
            </div>
        )
    }
}

export default withRouter(Register)