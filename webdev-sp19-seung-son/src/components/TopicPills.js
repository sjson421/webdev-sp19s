import React from 'react'

const TopicPills = ({topics = [], highlightTopic, selectTopic, deleteTopic, editTopic, createTopic}) =>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li key={topic.id} className="nav-item" style={{padding: "1%"}}>
                    <span onClick={(event) => {
                        highlightTopic(event);
                        selectTopic(topic);
                    }} style={{cursor: "pointer"}}>{topic.title}</span>
                    <br/>
                    <i className="fa fa-times float-right"
                       style={{margin: "0 5%", cursor: "pointer"}}
                       onClick={() => deleteTopic(topic)}></i>
                    <i className="fa fa-pencil float-right"
                       style={{margin: "0 5%", cursor: "pointer"}}
                       onClick={() => {
                           editTopic(topic)
                       }}></i>
                </li>
            )
        }
        <li className="nav-link" style={{cursor: "pointer"}} onClick={() => createTopic()}>
            <i className="fa fa-plus"></i>
        </li>
    </ul>

export default TopicPills