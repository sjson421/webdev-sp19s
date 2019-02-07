import React from 'react'


const buttonMargin = {
    margin: "0.2em"
}
const LinkWidget = ({widget, updateWidget}) =>
    <div className = "container">
        <h3>Link Widget</h3>
        <hr/>
        <div className="float-right margin-bottom">
            <div className="margin-bottom">
                <a className="btn btn-success margin-right" style={buttonMargin}> Save </a>
                Preview
                <a type="checkbox" className="btn btn-light" style={buttonMargin}>
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

            <select style={buttonMargin} defaultValue = "Link">
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
            <input
                value={widget.title}
                onChange={event => {
                    widget.title = event.target.value;
                    updateWidget(widget);
                }}
                className="form-control"/>
            <br/>
            <label htmlFor="linkUrl">Enter the link URL</label>
            <input
                id="linkUrl"
                type="text"
                className="form-control"
                placeholder="Enter image URL"
                value={widget.href}
                onChange={event => {
                    widget.href = event.target.value;
                    updateWidget(widget);
                }}/>
            <br/>
            <label htmlFor="listWidgetName">Enter the name for the
                widget</label>
            <input
                id="listWidgetName"
                value={widget.name}
                onChange={event => {
                    widget.name = event.target.value;
                    updateWidget(widget);
                }}
                className="form-control"/>
            <br/>
        </form>
        <h4>Preview</h4>
        {
            <a href={widget.href}>{widget.title}</a>
        }
    </div>

export default LinkWidget