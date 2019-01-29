import React from 'react'
const CourseRow = ({courseName}, {owner}, {modifiedTime}) =>
    return (
        <tr>
            <td><i className="fas fa-file-alt"></i></td>
            <td><a
                href="/course-editor/course-editor.template.client.html">{courseName}</a></td>
            <td>{owner}</td>
            <td>{modifiedTime}</td>
            <td></td>
            <td></td>
            <td><a className="btn btn-light" href="#"><i
                className="fas fa-times"></i></a></td>
        </tr>
    )
export default CourseRow;