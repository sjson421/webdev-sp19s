import React from 'react'

const LessonTabs = ({lessons = [], createLesson, deleteLesson, editLesson, highlightLesson, selectLesson, lessonTitleChanged}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <li key={lesson.id} className="nav-group-item" style={{padding: "1em"}}>
                    <span onClick={(event) => {
                        highlightLesson(event);
                        selectLesson(lesson);
                    }} style={{cursor: "pointer"}}>{lesson.title}</span>
                    <br/>
                    <div className='float-right'>
                        <i className="fa fa-pencil"
                           style={{margin: "0 0.2em 0 0", cursor: "pointer"}}
                           onClick={() => {
                               editLesson(lesson)
                           }}></i>
                        <i className="fa fa-times"
                           style={{margin: "0 0.2em 0 0", cursor: "pointer"}}
                           onClick={() => deleteLesson(lesson)}></i>
                    </div>
                </li>
            )
        }
        <li className="nav-item">
            <input
                style={{marginLeft:"0.5em"}}
                onChange={lessonTitleChanged}
                className="form-control"/>
        </li>
        <li className="nav-link" style={{cursor: "pointer"}} onClick={() => createLesson()}>
            <i className="fa fa-plus"></i>
        </li>
    </ul>
export default LessonTabs