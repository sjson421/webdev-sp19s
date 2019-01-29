import React from 'react'
import CourseCard from './CourseCard'

const navStyle = {
    marginBottom: '2%'
};

const CourseGrid = ({courses, deleteCourse, addCourse}) =>

    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary"
             style={navStyle}>
            <form className="form-inline my-2 my-lg-0">
                <a className="btn btn-primary" href="#"><i className="fa fa-bars"></i></a><a
                className="navbar-brand" href="">Course Manager</a>
            </form>

            <form className="form-inline my-2 my-lg-0 ml-auto">
                <input id="courseTitle" className="form-control mr-sm-2" type="text"
                       placeholder="New Course Title"/>
                <a className="btn btn-primary"
                   onClick={() => addCourse(document.getElementById('courseTitle').value)}>
                    <i className="fa fa-plus-circle"></i></a>
            </form>

        </nav>
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