import React from "react";
import {Link} from "react-router-dom";

const title = {
    marginBottom: "2em"
};
const bottom = {
    marginBottom: "1em"
};
const margin = {
    margin: "0.2em"
};

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div id="profile">
                    <h1 style = {title}>Profile</h1>
                    <div className="alert alert-success" role="alert">
                        Profile successfully saved!
                    </div>
                    <p>Username:</p>
                    <input className="form-control" id="usernameFld"
                           placeholder="Alice" style = {bottom} readOnly/>
                    <p>Phone:</p>
                    <input className="form-control" id="phoneFld"
                           placeholder="(555)123-4324" style = {bottom} />
                    <p>Email:</p>
                    <input className="form-control" id="emailFld"
                           placeholder="alice@wonderland.com" style = {bottom} />
                    <p>Role:</p>
                    <select className="selectpicker" id="roleFld" style = {bottom} >
                        <option>Faculty</option>
                        <option>Student</option>
                        <option>Admin</option>
                    </select>
                    <p>Date of Birth:</p>
                    <input className="form-control myinput" id="dobFld"
                           placeholder="mm/dd/yyyy" type="date" style = {bottom} />
                </div>
                <button
                    id="updateBtn"
                    className="btn btn-success"
                    style={margin}> Update
                </button>
                <a className="btn btn-danger" href="/" style={margin}>Logout</a>
                <Link to="/"><h6 className = "float-right" style={{marginTop: "2em"}}>Return home</h6></Link>
            </div>

        )
    }
}

export default Profile