import React from 'react'

const LessonTabs = ({lessons = [], createLesson, deleteLesson, editLesson, highlightLesson, selectLesson, lessonTitleChanged}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li key={lesson.id} className="nav-group-item" style={{padding: "1%", minWidth: "70px"}}>
                    <span onClick={(event) => {
                        highlightLesson(event);
                        selectLesson(lesson);
                    }} style={{cursor: "pointer"}}>{lesson.title}</span>
                    <br/>
                    <i className="fa fa-times float-right"
                       style={{margin: "5% 5% 0% 5%", cursor: "pointer"}}
                       onClick={() => deleteLesson(lesson)}></i>
                    <i className="fa fa-pencil float-right"
                       style={{margin: "5% 5% 0% 5%", cursor: "pointer"}}
                       onClick={() => {
                           editLesson(lesson)
                       }}></i>
                </li>
            )
        }
        <li className="nav-link" style={{cursor: "pointer"}} onClick={() => createLesson()}>
            <i className="fa fa-plus"></i>
        </li>
        <li className = "nav-item">
            <input
                onChange={lessonTitleChanged}
                className="form-control"/>
        </li>
    </ul>
export default LessonTabs