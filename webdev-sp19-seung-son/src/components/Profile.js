import React from "react";
import {Link} from "react-router-dom";
import UserService from '../services/UserService'

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
        super(props);
        this.service = new UserService();
        this.state = {
            currentUser: '',
            username: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            type: '',
            dob: ''
        }
    }

    usernameChanged = event =>
        this.setState({
            username: event.target.value
        })
    firstNameChanged = event =>
        this.setState({
            firstName: event.target.value
        })
    lastNameChanged = event =>
        this.setState({
            lastName: event.target.value
        })
    phoneChanged = event =>
        this.setState({
            phone: event.target.value
        })
    emailChanged = event =>
        this.setState({
            email: event.target.value
        })
    typeChanged = event =>
        this.setState({
            type: event.target.value
        })
    dobChanged = event =>
        this.setState({
            dob: event.target.value
        })

    render() {
        this.service.profile()
            .then(response => {
                this.setState({
                    currentUser: response
                })
            });
        return (
            <div>
                <div id="profile">
                    <h1 style={title}>Profile</h1>
                    <div className="alert alert-success" role="alert">
                        Profile successfully saved!
                    </div>
                    <p>Username:</p>
                    <input className="form-control" id="usernameFld"
                           style={bottom}
                           onChange={this.usernameChanged}  defaultValue = {this.state.currentUser.username} readonly/>
                    <p>First Name:</p>
                    <input className="form-control"
                           style={bottom}
                           onChange={this.firstNameChanged} defaultValue = {this.state.currentUser.firstName}/>
                    <p>Last Name:</p>
                    <input className="form-control"
                           style={bottom}
                           onChange={this.lastNameChanged} defaultValue = {this.state.currentUser.lastName}/>
                    <p>Phone:</p>
                    <input className="form-control" id="phoneFld" placeholder="(555)123-4324"
                           style={bottom}
                           onChange={this.phoneChanged} defaultValue = {this.state.currentUser.phone}/>
                    <p>Email:</p>
                    <input className="form-control" id="emailFld" placeholder="alice@wonderland.com" style={bottom}
                           onChange={this.emailChanged} defaultValue = {this.state.currentUser.email}/>
                    <p>Role:</p>
                    <select className="form-control" id="roleFld" style={bottom}
                            defaultValue={this.state.currentUser.type}
                            onChange={this.typeChanged}>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                        /*Admin Not functional. Not part of assignment*/
                        <option value="ADMIN">Admin</option>
                    </select>
                    <p>Date of Birth:</p>
                    <input className="form-control" id="dobFld"
                           placeholder="mm/dd/yyyy" type="date" style={bottom}
                           defaultValue={this.state.currentUser.dob}
                           onChange={this.dobChanged}/>
                </div>
                <button
                    id="updateBtn"
                    className="btn btn-success"
                    style={margin}> Update
                </button>
                <a className="btn btn-danger" href="/" style={margin}>Logout</a>
                <Link to="/"><h6 className="float-right" style={{marginTop: "2em"}}>Return home</h6></Link>
            </div>

        )
    }
}

export default Profile