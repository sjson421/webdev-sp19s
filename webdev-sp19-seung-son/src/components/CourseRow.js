import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>
    <tr>
        <td><i className="fa fa-file"></i></td>
        <td>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
        </td>
        <td className = "d-none d-md-table-cell">me</td>
        <td className = "d-none d-md-table-cell">6:45 PM</td>
        <td></td>
        <td></td>
        <td><a onClick={() => deleteCourse(course)} className="btn btn-light">
            <i className="fa fa-times"></i></a></td>
    </tr>
export default CourseRow;