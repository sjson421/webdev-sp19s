import React from 'react'
import ModuleListItem from "./ModuleListItem";

const buttonStyle = {
    margin: "1% 0"
}

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {
                title: ''
            },
            modules: this.props.modules
        };
    }

    createModule = () => {
        let title = this.state.module.title;

        if (title === '') {
            title = "New Module";
        }

        this.setState(
            {
                module: {
                    id: (new Date()).getTime(),
                    title: title
                }
            }, () => this.setState(
                    {
                        modules: [
                            ...this.state.modules,
                            this.state.module
                        ]
                    }
                ));
    }
    titleChanged = (event) => {
        const newTitle = event.target.value;
        this.newTitle = newTitle;
        this.setState(
            {
                module: {title: newTitle}
            });
        this.props.setTitle(newTitle);
    }
    deleteModule = (dModule) => {
        const newModules = this.state.modules.filter(
            module => module.id !== dModule.id
        )
        this.setState(
            {
                modules: [
                    ...newModules
                ]
            }
        )
    }
    editModule = (module) => {
        if (this.newTitle === '' || !this.newTitle) {
            this.newTitle = "No Title"
        }
        for (let i = 0; i < this.state.modules.length; i++) {
            if (this.state.modules[i].id === module.id) {
                this.state.modules[i].title = this.newTitle;
                break;
            }
        }
        this.setState(
            {
                modules: [...this.state.modules]
            }
        )
    }

    render() {
        return (
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            className="form-control"/>
                        <button
                            style={buttonStyle}
                            onClick={this.createModule}
                            className="btn btn-primary btn-block">
                            Add Module
                        </button>
                    </li>
                    {
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        highlightModule={this.props.highlightModule}
                                        key={module.id}
                                        module={module}
                                        deleteModule={this.deleteModule}
                                        editModule={this.editModule}/>
                                )
                            }
                        )
                    }
                    <li className="list-group-item" style={{color: "green"}}>
                        <b>Help</b>
                        <br/>
                        To edit a module, lesson, or topic, type in the new title in the field above then click the corresponding
                        edit button. The above input field also works for adding new modules, lessons, or topics as well.
                    </li>
                </ul>
            </div>
        )
    }
}

export default ModuleList;