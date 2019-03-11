import React from 'react'
import WidgetComponent from './WidgetComponent'
import ParagraphWidget from "./ParagraphWidget";


const asdf = {
    widgets: []
}
const WidgetList = ({widgets, createWidget, deleteWidget, updateWidget, updateWidgets}) =>
    <div>
        <h1 style = {{marginBottom: "2em"}}>Widget List</h1>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        updateWidgets={updateWidgets}
                        widget={widget}
                        widgets={widgets} />
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