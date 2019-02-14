import React from "react";
const margin = {
    margin: "0.2em"
};
class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2"> Username </label>
                        <div className="col-sm-10">
                            <input className="form-control" placeholder="alice" id="username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2"> Password </label>
                        <div className="col-sm-10">
                            <input className="form-control" type="password"
                                   placeholder="!@#$QWERzxc" id="password"/>
                        </div>
                    </div>
                    <a className="btn btn-primary" href="/profile" style ={margin}>Sign in</a>
                    <a className="btn btn-danger" href="/" style ={margin}>Cancel</a>
                    <p align="right">
                        <a href="../register/register.template.client.html">Sign up</a>
                    </p>
                </form>
            </div>
        )
    }
}
export default Login;

