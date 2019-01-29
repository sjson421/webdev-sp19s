import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course}, {deleteCourse}) =>
    <div classname="row">
        <tr>
            <td><i className="fas fa-file-alt"></i></td>
            <td>
                <Link to={`/course/${course.id}`}>{course.title}</Link>
                {/*<a*/}
                {/*href="/course-editor/course-editor.template.client.html">{course.title}</a></td>*/}
            </td>
            <td>me</td>
            <td>6:45 PM</td>
            <td></td>
            <td></td>
            <td><a onClick={() => deleteCourse(course)} className="btn btn-light">
                <i className="fas fa-times"></i></a></td>
        </tr>
    </div>

export default CourseRow;