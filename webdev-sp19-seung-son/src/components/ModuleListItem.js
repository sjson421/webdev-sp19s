import React from 'react'

const ModuleListItem = ({module, selectModule, highlightModule, deleteModule, editModule}) =>
    <li className="list-group-item">
        <span onClick={(event) => {
            highlightModule(event);
            selectModule(module);
        }} style={{cursor: "pointer"}}>{module.title}</span>
        <i className="fa fa-times float-right"
           style={{margin: "0 1%", cursor: "pointer"}}
           onClick={() => deleteModule(module)}></i>
        <i className="fa fa-pencil float-right"
            style={{margin: "0 1%", cursor: "pointer"}}
           onClick={() => {editModule(module)}}></i>
    </li>

export default ModuleListItem;