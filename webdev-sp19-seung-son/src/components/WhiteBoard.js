import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
import WidgetList from "./WidgetList";

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
                <Router>
                    <div>
                        <Link to="/">Course Grid</Link> |
                        <Link to="/table"> Course Table</Link>
                        <br/><br/>
                        <Route path='/' exact
                               render={() =>
                                   <CourseGrid
                                       addCourse = {this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path='/table'
                               render={() =>
                                   <CourseTable
                                       addCourse = {this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/:id"
                               exact
                               component={CourseEditor}/>
                        <Route path='/widgetlist'
                               render={() =>
                                   <WidgetList/>}/>
                        <Link to="/widgetlist">Widget List</Link>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;