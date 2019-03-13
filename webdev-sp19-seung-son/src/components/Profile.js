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
            dob: '',
            visible: {display: 'none'}
        }
    }

    componentDidMount() {
        this.service.profile()
            .then(response => {
                if (response != null) {
                    this.selected = response.type;
                    this.setState({
                        currentUser: response,
                        username: response.username,
                        firstName: response.firstName,
                        lastName: response.lastName,
                        phone: response.phone,
                        email: response.email,
                        type: response.type,
                        dob: response.dob
                    })
                }
            });
    }

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
    typeChanged = event => {
        this.selected = event.target.value;
        return this.setState({
            type: event.target.value
        })
    }
    dobChanged = event => {
        return this.setState({
            dob: event.target.value
        })}
    updateUser = () => {
        const s = this.state;
        const c = this.state.currentUser;

        const user = {
            id: c.id,
            type: s.type,
            firstName: s.firstName,
            lastName: s.lastName,
            username: c.username,
            password: c.password,
            dob: s.dob,
            phone: s.phone,
            email: s.email
        }
        this.service.updateUser(user)
            .then(response => {
                if (response) {
                    this.setState({
                        visible: {}
                    });
                } else {
                    alert("User update has failed!")
                }
            });
    }
    logout = () =>
        this.service.logout();

    render() {
        if (!this.state.currentUser) {
            this.state.currentUser = '';
        }
        return (
            <div>
                <div id="profile">
                    <h1 style={title}>Profile</h1>
                    <div className="alert alert-success" role="alert" style = {this.state.visible}>
                        Profile successfully saved!
                    </div>
                    <p>Username:</p>
                    <input className="form-control" id="usernameFld"
                           style={bottom}
                           defaultValue={this.state.currentUser.username} readOnly/>
                    <p>First Name:</p>
                    <input className="form-control"
                           style={bottom}
                           onChange={this.firstNameChanged} defaultValue={this.state.currentUser.firstName}/>
                    <p>Last Name:</p>
                    <input className="form-control"
                           style={bottom}
                           onChange={this.lastNameChanged} defaultValue={this.state.currentUser.lastName}/>
                    <p>Phone:</p>
                    <input className="form-control" id="phoneFld" placeholder="(555)123-4324"
                           style={bottom}
                           onChange={this.phoneChanged} defaultValue={this.state.currentUser.phone}/>
                    <p>Email:</p>
                    <input className="form-control" id="emailFld" placeholder="alice@wonderland.com" style={bottom}
                           onChange={this.emailChanged} defaultValue={this.state.currentUser.email}/>
                    <p>Role:</p>
                    <select className="form-control" id="roleFld" style={bottom}
                            value={this.selected}
                            onChange={this.typeChanged}>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                        /*Admin Not functional. Not part of assignment*/
                        <option value="ADMIN">Admin</option>
                    </select>
                    <p>Date of Birth:</p>
                    {console.log(this.state.currentUser.dob)}
                    <input className="form-control" id="dobFld"
                           placeholder="mm/dd/yyyy" type="date" style={bottom}
                           defaultValue={this.state.currentUser.dob}
                           onChange={this.dobChanged}/>
                </div>
                <button
                    id="updateBtn"
                    className="btn btn-success"
                    style={margin}
                    onClick={this.updateUser}> Update
                </button>
                <a className="btn btn-danger" style={margin} href="/"
                   onClick={this.logout}>Logout</a>
                <Link to="/"><h6 className="float-right" style={{marginTop: "2em"}}>Return home</h6></Link>
            </div>

        )
    }
}

export default Profile