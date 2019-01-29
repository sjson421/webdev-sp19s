import React, {Component} from 'react'

const NewCourseRow = ({course, deleteCourse}) =>
    <tr>
        <td><i className="fa fa-file"></i></td>
        <td><a
            href="/course-editor/course-editor.template.client.html">New Course</a></td>
        <td>me</td>
        <td>6:45 PM</td>
        <td></td>
        <td></td>
        <td><a onClick={() => deleteCourse(course)} className="btn btn-light">
            <i className="fa fa-times"></i></a></td>
    </tr>
export default NewCourseRow;