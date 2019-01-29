import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";

const navStyle = {
    marginBottom: '2%',
};

class WhiteBoard extends Component {
    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course)
        })
    addCourse = (courseTitle) => {
        const course =
            {
                id: (new Date()).getTime(),
                title: courseTitle
            }
        this.setState({
            courses: this.courseService.addCourse(course)
        })
    }

    constructor() {
        super();
        this.courseService = new CourseService()
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary"
                     style={navStyle}>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="btn btn-primary" href="#"><i className="fa fa-bars"></i></a><a
                        className="navbar-brand" href="#">Course Manager</a>
                    </form>

                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input id="courseTitle" className="form-control mr-sm-2" type="text"
                               placeholder="New Course Title"/>
                        <a className="btn btn-primary"
                           onClick={() => this.addCourse(document.getElementById('courseTitle').value)}>
                            <i className="fa fa-plus-circle"></i></a>
                    </form>

                </nav>
                <Router>
                    <div>
                        <Link to="/">Course Grid</Link> |
                        <Link to="/table"> Course Table</Link>
                        <Route path='/' exact
                               render={() =>
                                   <CourseGrid
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/table'
                               render={() =>
                                   <CourseTable
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;