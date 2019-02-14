import React from "react";

const title = {
    marginBottom: "2em"
};
const bottom = {
    marginBottom: "1em"
};

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="registration">
                <h1 style = {title}>Register</h1>
                <p>Username:</p>
                <input className="form-control" style = {bottom} id="usernameFld"
                       placeholder="Alice"/>
                <p>Password:</p>
                <input className="form-control" style = {bottom} id="passwordFld"
                       placeholder="123qwe@$%"/>
                <p>Verify Password:</p>
                <input className="form-control" style = {bottom} id="verifyPasswordFld"
                       placeholder="123qwe@$%"/>
            </div>)
    }
}
export default Profile