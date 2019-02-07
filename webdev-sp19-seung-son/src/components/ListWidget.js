import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}

const getNewlineItems = ({widget}) => {
    let valueItems = "";
    const myItems = widget.items.split(',');
    for (let i = 0; i < myItems.length; i++) {
        if (i === myItems.length - 1)
            valueItems = valueItems + myItems[i]
        else
            valueItems = valueItems + myItems[i] + "\n";
    }
    return valueItems;
}

const getCommaItems = (widget) => {
    let valueItems = "";
    let myItems = widget.split('\n');
    for (let i = 0; i < myItems.length; i++) {
        if (i === myItems.length - 1)
            valueItems = valueItems + myItems[i]
        else
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

            <select style={buttonMargin} value = "List">
                <option>Heading</option>
                <option>Paragraph</option>
                <option>List</option>
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
                    defaultValue = "Unordered list"
                    onChange={event => {
                        widget.listType = event.target.value;
                        updateWidget(widget);
                    }}>
                <option value="UNORDERED">Unordered list</option>
                <option value="ORDERED">Ordered list</option>
            </select>
            <br/>
            <label htmlFor="listWidgetName">Enter the name for the widget</label>
            <input
                id = "listWidgetName"
                value={widget.name}
                onChange={event => {
                    widget.name = event.target.value;
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
                {getArrayItems({widget}).map((item) =>
                    <li>{item}</li>)}
            </ul> ||
            widget.listType === 'ORDERED' &&
            <ol>
                {getArrayItems({widget}).map((item) =>
                    <li>{item}</li>)}
            </ol>
        }
    </div>

export default ListWidget