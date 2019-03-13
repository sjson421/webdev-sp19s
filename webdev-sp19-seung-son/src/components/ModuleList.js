import React from 'react'
import ModuleListItem from "./ModuleListItem";

const buttonStyle = {
    margin: "1% 0"
}

const ModuleList = ({modules = [], createModule, deleteModule, editModule, highlightModule, selectModule, moduleTitleChanged}) =>
    <div>
        <h3>Module List</h3>
        <ul className="list-group">
            <li className="list-group-item">
                <input
                    onChange={moduleTitleChanged}
                    className="form-control"/>
                <button
                    style={buttonStyle}
                    onClick={createModule}
                    className="btn btn-primary btn-block">
                    Add Module
                </button>
            </li>
            {
                modules.map(
                    (module) => {
                        return (
                            <ModuleListItem
                                selectModule={selectModule}
                                highlightModule={highlightModule}
                                key={module.id}
                                module={module}
                                deleteModule={deleteModule}
                                editModule={editModule}/>
                        )
                    }
                )
            }
        </ul>
    </div>

export default ModuleList;