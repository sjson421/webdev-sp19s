import React from 'react'
import WidgetComponent from './WidgetComponent'
import ParagraphWidget from "./ParagraphWidget";

let top = "btn btn-warning"
let bottom = "btn btn-warning"

const WidgetList = ({
                        widgets, createWidget, deleteWidget, updateWidget, updateWidgets, updateHeadingWidget,
                        updateParagraphWidget, updateListWidget, updateImageWidget, updateLinkWidget, changeWidgetType
                    }) =>
    <div>
        <h1>Widget List</h1>
        <span
            title="Upon update, the updated widget will appear at the bottom of the list!">
            <p style={{marginBottom: "2em", color: "blue"}}>Hover for Help!</p>
        </span>
        <div className="list-group">
            {
                widgets.map((widget, index) => {
                        if (index === 0) {
                            top = "btn disabled"
                        } else {
                            top = "btn btn-warning"
                        }
                        if (index === widgets.length - 1) {
                            bottom = "btn disabled"
                        } else {
                            bottom = "btn btn-warning"
                        }
                        return <WidgetComponent
                            key={widget.id}
                            updateWidget={updateWidget}
                            deleteWidget={deleteWidget}
                            updateWidgets={updateWidgets}
                            widget={widget}
                            widgets={widgets}
                            top={top}
                            bottom={bottom}
                            updateHeadingWidget={updateHeadingWidget}
                            updateParagraphWidget={updateParagraphWidget}
                            updateListWidget={updateListWidget}
                            updateImageWidget={updateImageWidget}
                            updateLinkWidget={updateLinkWidget}
                            changeWidgetType={changeWidgetType}/>
                    }
                )
            }
            <button
                onClick={createWidget}
                className="btn btn-success">
                Create New Widget
            </button>
        </div>
    </div>

export default WidgetList