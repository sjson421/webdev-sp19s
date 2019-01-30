import React from 'react'
import CourseRow from './CourseRow'

const navStyle = {
    marginBottom: '2%'
};
const CourseTable = ({courses, deleteCourse, addCourse}) =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary"
             style={navStyle}>
            <form className="input-group my-2 my-lg-0">
                <a className="btn btn-primary" href="#"><i className="fa fa-bars"></i></a><a
                className="navbar-brand" href="#">Course Manager</a>
            </form>

            <form className="input-group my-2 my-lg-0">
                <input id="courseTitle" className="form-control mr-sm-2" type="text"
                       placeholder="New Course Title"/>
                <a className="btn btn-primary"
                   onClick={() => addCourse(document.getElementById('courseTitle').value)}>
                    <i className="fa fa-plus-circle"></i></a>
            </form>

        </nav>
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th className = "d-none d-md-table-cell">Owned by</th>
                    <th className = "d-none d-md-table-cell">Last modified by me</th>
                    <th><i className="fa fa-th-large"></i></th>
                    <th><i className="fa fa-sort"></i></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    courses.map(course =>
                        <CourseRow
                            deleteCourse={deleteCourse}
                            course={course}
                            key={course.id}/>
                    )
                }
                </tbody>
            </table>
        </div>
    </div>

export default CourseTable