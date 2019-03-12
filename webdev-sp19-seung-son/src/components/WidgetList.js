import React from 'react'
import WidgetComponent from './WidgetComponent'
import ParagraphWidget from "./ParagraphWidget";

let top = "btn btn-warning"
let bottom = "btn btn-warning"

const WidgetList = ({
                        widgets, createWidget, deleteWidget, updateWidget, updateWidgets, updateHeadingWidget,
                        updateParagraphWidget, updateListWidget, updateImageWidget, updateLinkWidget
                    }) =>
    <div>
        <h1 style={{marginBottom: "2em"}}>Widget List</h1>
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
                            updateLinkWidget={updateLinkWidget}/>
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