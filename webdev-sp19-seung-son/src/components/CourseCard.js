import React from 'react'
import {Link} from 'react-router-dom'

const buttonStyle = {
    marginRight: '1%'
};

const CourseCard = ({course, deleteCourse}) =>
    <div className="card"
         styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Card text.</p>
            <Link style = {buttonStyle} className="btn btn-primary" to={`/course/${course.id}`}>Edit</Link>
            <a onClick={() => deleteCourse(course)}
               className="btn btn-danger">Delete</a>
        </div>
    </div>
export default CourseCard;