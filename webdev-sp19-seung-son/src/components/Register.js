import React from 'react';

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
    }

    render() {
        return (
            <div>
                <div id="registration">
                    <h1 style={title}>Register</h1>
                    <p>Username:</p>
                    <input className="form-control" style={bottom} id="usernameFld"
                           placeholder="Alice"/>
                    <p>Password:</p>
                    <input className="form-control" style={bottom} id="passwordFld"
                           placeholder="123qwe@$%"/>
                    <p>Verify Password:</p>
                    <input className="form-control" style={bottom} id="verifyPasswordFld"
                           placeholder="123qwe@$%"/>
                </div>
                <a id="registerBtn" className="btn btn-success"
                   href="../profile/profile.template.client.html" style={margin}>Register</a>
                <a className="btn btn-danger" href="/" style={margin}>Cancel</a>
            </div>
        )
    }
}

export default Register