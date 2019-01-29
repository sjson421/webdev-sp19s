import React from 'react'
import ReactDOM from 'react-dom'
import CourseCard from './CourseCard'
import CourseRow from './CourseRow'
const CourseTable = () =>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Owned by</th>
                    <th>Last modified by me</th>
                    <th><i className="fas fa-th-large"></i></th>
                    <th><i className="fas fa-sort"></i></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ReactDOM.render(
                    <CourseRow/>,
                    document.getElementById('root')
                );
            </tbody>
        </table>
    </div>

export default CourseTable