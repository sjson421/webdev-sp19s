import React from 'react'

const TopicPills = ({topics = [], highlightTopic, selectTopic, deleteTopic, editTopic, createTopic, topicTitleChanged}) =>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li key={topic.id} className="nav-item" style={{padding: "1em"}}>
                    <span onClick={(event) => {
                        highlightTopic(event);
                        selectTopic(topic);
                    }} style={{cursor: "pointer"}}>{topic.title}</span>
                    <br/>
                    <div className="float-right">
                        <i className="fa fa-pencil"
                           style={{margin: "0 0.2em 0 0", cursor: "pointer"}}
                           onClick={() => {
                               editTopic(topic)
                           }}></i>
                        <i className="fa fa-times"
                           style={{margin: "0 0.2em 0 0", cursor: "pointer"}}
                           onClick={() => deleteTopic(topic)}></i>
                    </div>
                </li>
            )
        }
        <li className="nav-item">
            <input
                style={{marginLeft:"0.5em"}}
                onChange={topicTitleChanged}
                className="form-control center-block"/>
        </li>
        <li className="nav-link" style={{cursor: "pointer"}} onClick={() => createTopic()}>
            <i className="fa fa-plus"></i>
        </li>
    </ul>

export default TopicPills