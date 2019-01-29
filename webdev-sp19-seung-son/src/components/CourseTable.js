import React from 'react'
import CourseRow from './CourseRow'
import NewCourseRow from "./NewRow";

const CourseTable = ({courses, deleteCourse}) =>
    <div className="table-responsive">
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Owned by</th>
                <th>Last modified by me</th>
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

export default CourseTable