import React from 'react'

const ModuleListItem = ({module, selectModule}) =>
    <li onClick={() => selectModule(module)} className="list-group-item">
        {module.title}<i className="fa fa-times float-right"></i>
    </li>

export default ModuleListItem;