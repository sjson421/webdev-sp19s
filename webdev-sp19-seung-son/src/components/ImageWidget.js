import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}

const ImageWidget = ({widget, updateWidget}) =>
    <div className="container">
        <h3>Image Widget</h3>
        <hr/>
        <div className="float-right">
            <div>
                <a className="btn btn-success" style={buttonMargin}> Save </a>
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

            <select style={buttonMargin} defaultValue="Image">
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
            <input type="text"
                   className="form-control"
                   placeholder="Enter image URL"
                   value={widget.src}
                   onChange={event => {
                       widget.src = event.target.value;
                       updateWidget(widget);
                   }}/>
            <br/>
            <label htmlFor="imageWidgetName">Enter the name for the widget</label>
            <input
                id="imageWidgetName"
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
            <img src={widget.src}
                 alt={widget.src}></img>
        }
    </div>
export default ImageWidget