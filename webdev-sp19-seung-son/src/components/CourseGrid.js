import React from 'react'
import CourseCard from './CourseCard'
import {Link, Route} from "react-router-dom";

const navStyle = {
    marginBottom: '2%'
};

const CourseGrid = ({courses, deleteCourse, addCourse}) =>

    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary"
             style={navStyle}>
            <form className="input-group my-2 my-lg-0">
                <a className="btn btn-primary" href="#"><i className="fa fa-bars"></i></a><a
                className="navbar-brand" href="">Course Manager</a>
            </form>

            <form className="input-group my-2 my-lg-0">
                <input id="courseTitle" className="form-control mr-sm-2" type="text"
                       placeholder="New Course Title"/>
                <a className="btn btn-primary"
                   onClick={() => addCourse(document.getElementById('courseTitle').value)}>
                    <i className="fa fa-plus-circle"></i></a>
            </form>
            <Link to="/login"><h6 className="nav-link input-group my-2 my-lg-0"
                                  style={{marginBottom: "0.2em", color: "WHITE"}}>Login</h6></Link>
            <Link to="/register"><h6 className="nav-link input-group my-2 my-lg-0"
                                     style={{marginBottom: "0.2em", color: "WHITE"}}>Register</h6></Link>
        </nav>
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th><Link to="/table"><i className="fa fa-list"></i></Link></th>
                    <th><i className="fa fa-sort"></i></th>
                    <th></th>
                </tr>
                </thead>
            </table>
        </div>
        <div className="card-deck row">
            {
                courses.map(course =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        course={course}
                        key={course.id}/>
                )
            }
        </div>
    </div>
export default CourseGrid