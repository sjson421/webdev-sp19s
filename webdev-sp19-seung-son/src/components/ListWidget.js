import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}

const getNewlineItems = ({widget}) => {
    let valueItems = "";
    const myItems = widget.items.split(',');
    for (let i = 0; i < myItems.length; i++) {
        valueItems = valueItems + myItems[i] + "\n";
    }
    return valueItems;
}

const getCommaItems = ({widget}) => {
    let valueItems = "";
    const myItems = widget.split('\n');
    for (let i = 0; i < myItems.length; i++) {
        valueItems = valueItems + myItems[i] + ",";
    }
    return valueItems;
}

const getArrayItems = ({widget}) => {
    return widget.items.split(',');
}

const ListWidget = ({widget, updateWidget}) =>
    <div className="container">
        <h3>List Widget</h3>
        <hr/>
        <div className="float-right">
            <div>
                <a className="btn btn-success" style={buttonMargin}> Save </a>
                Preview
                <a type="checkbox" className="btn btn-light">
                    <i className="fa fa-toggle-off"></i>
                </a>
                <br/>
            </div>

            <a className="btn btn-warning" style={buttonMargin}>
                <i className="fa fa-arrow-up"></i>
            </a>
            <a className="btn btn-warning" style={buttonMargin}>
                <i className="fa fa-arrow-down"></i>
            </a>

            <select style={buttonMargin}>
                <option>Heading</option>
                <option>Paragraph</option>
                <option defaultValue>List</option>
                <option>Image</option>
                <option>Link</option>
            </select>
            <a className="btn btn-danger" style={buttonMargin}>
                <i className="fa fa-times"></i>
            </a>
        </div>
        <form className="form-group">
            <textarea className="form-control" rows="5"
                      placeholder="Enter one list item per line"
                      value={getNewlineItems({widget})}
                      onChange={event => {
                          widget.items = getCommaItems(event.target.value);
                          updateWidget(widget);
                      }}/>
            <br/>
            <select className="form-control"
                    onChange={event => {
                        widget.listType = event.target.value;
                        updateWidget(widget);
                    }}>
                <option value="UNORDERED" defaultValue>Unordered list</option>
                <option value="ORDERED">Ordered list</option>
            </select>
            <br/>
            <label htmlFor="listWidgetName">Enter the name for the widget</label>
            <input
                value={widget.title}
                onChange={event => {
                    widget.title = event.target.value;
                    updateWidget(widget);
                }}
                className="form-control"
                placeholder="Widget Name"/>
            <br/>
        </form>
        <h4>Preview</h4>
        {
            widget.listType === 'UNORDERED' &&
            <ul>

            </ul> ||
            widget.listType === 'ORDERED' &&
            <ol>

            </ol>
        }
    </div>

export default ListWidget