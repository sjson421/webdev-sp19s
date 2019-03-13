import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}

let preview = false;
const getNewlineItems = ({widget}) => {
    let valueItems = "";
    if (widget.items) {
        const myItems = widget.items.split(',');
        for (let i = 0; i < myItems.length; i++) {
            if (i === myItems.length - 1)
                valueItems = valueItems + myItems[i]
            else
                valueItems = valueItems + myItems[i] + "\n";
        }
    }
    return valueItems;
}

const getCommaItems = (widget) => {
    let valueItems = "";

    if (widget) {
        let myItems = widget.split('\n');
        for (let i = 0; i < myItems.length; i++) {
            if (i === myItems.length - 1)
                valueItems = valueItems + myItems[i]
            else
                valueItems = valueItems + myItems[i] + ",";
        }
    }
    return valueItems;
}

const arrayMap = ({widget}) => {
    return widget.items.split(',');
}
const check = ({widget}) => {
    if (!widget.items) {
        widget.items = "";
    }
    if (!widget.listType) {
        widget.listType = "UNORDERED"
    }
}
const ListWidget = ({widget, updateWidget, deleteWidget, updateWidgets, widgets, top, bottom, changeWidgetType}) =>
    <div className="container">
        {check({widget})}
        {() => updateWidget({widget})}

        <h3>List Widget</h3>
        <hr/>
        <div className="float-right">
            <div>
                <a className="btn btn-success"
                   style={buttonMargin}
                   onClick={event =>
                       updateWidget(widget)}> Save </a>
                <span style={{margin: "0 0.5em 0 1em"}}>Preview</span>
                <i className="fa fa-toggle-off"
                   onClick={event => {
                       if (event.target.className == "fa fa-toggle-off") {
                           event.target.className = "fa fa-toggle-on"
                           preview = true;
                           changeWidgetType(widget)
                       } else {
                           event.target.className = "fa fa-toggle-off"
                           preview = false;
                           changeWidgetType(widget)
                       }
                   }}></i>
                <br/>
            </div>

            <a className={top}
               style={buttonMargin}
               onClick={event => {
                   const i = widgets.indexOf(widget);
                   if (i != 0) {
                       const temp = widgets[i - 1];
                       widgets[i - 1] = widget;
                       widgets[i] = temp;
                       updateWidgets(widgets);
                   }
               }}>
                <i className="fa fa-arrow-up"></i>
            </a>
            <a className={bottom}
               style={buttonMargin}
               onClick={event => {
                   const i = widgets.indexOf(widget);
                   if (i != widgets.length - 1) {
                       const temp = widgets[i + 1];
                       widgets[i + 1] = widget;
                       widgets[i] = temp;
                       updateWidgets(widgets);
                   }
               }}>
                <i className="fa fa-arrow-down"></i>
            </a>

            <select style={buttonMargin}
                    defaultValue="LIST"
                    onChange={event => {
                        widget.type = event.target.value
                        changeWidgetType(widget)
                    }}>
                <option value="HEADING">Heading</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="LIST">List</option>
                <option value="IMAGE">Image</option>
                <option value="LINK">Link</option>
            </select>
            <a className="btn btn-danger"
               style={buttonMargin}
               onClick={() => deleteWidget(widget)}>
                <i className="fa fa-times"></i>
            </a>
        </div>
        {
            !preview &&
            <form className="form-group">
            <textarea className="form-control" rows="5"
                      placeholder="Enter one list item per line"
                      defaultValue={getNewlineItems({widget})}
                      onChange={event => {
                          widget.items = getCommaItems(event.target.value);
                      }}/>
                <br/>
                <select className="form-control"
                        defaultValue={widget.listType}
                        onChange={event => {
                            widget.listType = event.target.value;
                            changeWidgetType(widget)
                        }}>
                    <option value="UNORDERED">Unordered list</option>
                    <option value="ORDERED">Ordered list</option>
                </select>
                <br/>
                <label htmlFor="listWidgetName">Enter the name for the widget</label>
                <input
                    id="listWidgetName"
                    defaultValue={widget.name}
                    onChange={event => {
                        widget.name = event.target.value;
                    }}
                    className="form-control"
                    placeholder="Widget Name"/>
                <br/>
            </form>
            ||
            preview &&
            <div>
                <h4>Preview</h4>
                {
                    widget.listType === 'UNORDERED' &&
                    <ul>
                        {arrayMap({widget}).map(item =>
                            <li> {item}</li>
                        )}
                    </ul> ||
                    widget.listType === 'ORDERED' &&
                    <ol>
                        {arrayMap({widget}).map(item =>
                            <li> {item}</li>
                        )}
                    </ol>
                }
            </div>
        }
    </div>

export default ListWidget