import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({widgets, createWidget, deleteWidget, updateWidget}) =>
    <div>
        <h1>Widget List</h1>
        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
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