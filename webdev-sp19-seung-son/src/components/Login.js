import React from "react";

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
                    <button type="button" className="btn btn-primary">Sign in</button>
                    <a className="btn btn-danger" href="/index.html">Cancel</a>
                    <p align="right">
                        <a href="../register/register.template.client.html">Sign up</a>
                    </p>
                </form>
            </div>
        )
    }
}
export default Login;

