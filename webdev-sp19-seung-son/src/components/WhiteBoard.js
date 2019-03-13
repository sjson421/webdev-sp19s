import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
import Login from './Login'
import Profile from './Profile'
import Register from './Register'

class WhiteBoard extends Component {

    constructor() {
        super();
        this.courseService = new CourseService();
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses =>
                this.setState({courses: courses}));
    }


    deleteCourse = course =>
        this.courseService.deleteCourse(course)
            .then(response =>
                this.setState({courses: response})
            )

    addCourse = (courseTitle) => {
        if (courseTitle === '') {
            courseTitle = "New Course"
        }
        const course =
            {
                id: "0",
                title: courseTitle,
                modules: []
            }
        return this.courseService.createCourse(course)
            .then(response =>
                this.setState({courses: response})
            )
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path='/' exact
                               render={() =>
                                   <CourseGrid
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path='/table'
                               render={() =>
                                   <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path="/login"
                               render={() =>
                                   <Login/>}/>
                        <Route path="/register"
                               render={() =>
                                   <Register/>}/>
                        <Route path="/profile"
                               render={() =>
                                   <Profile/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;