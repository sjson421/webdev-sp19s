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
    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course)
        })
    addCourse = (courseTitle) => {
        if (courseTitle === '') {
            courseTitle = "New Course"
        }
        const course =
            {
                id: (new Date()).getTime(),
                title: courseTitle
            }
        this.setState({
            courses: this.courseService.createCourse(course)
        })
    }

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
                               exact
                               component={Profile}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;