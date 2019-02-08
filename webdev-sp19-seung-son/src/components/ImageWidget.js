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
                <span style={{margin: "0 0.5em 0 1em"}}>Preview</span>
                <i className="fa fa-toggle-off"
                   onClick={event => {
                       if (event.target.className == "fa fa-toggle-off") {
                           event.target.className = "fa fa-toggle-on"
                           widget.preview = {}
                           updateWidget(widget)
                       } else {
                           event.target.className = "fa fa-toggle-off"
                           widget.preview = {display: 'none'}
                           updateWidget(widget)
                       }
                   }}></i>
                <br/>
            </div>

            <a className="btn btn-warning" style={buttonMargin}>
                <i className="fa fa-arrow-up"></i>
            </a>
            <a className="btn btn-warning" style={buttonMargin}>
                <i className="fa fa-arrow-down"></i>
            </a>

            <select style={buttonMargin}
                    defaultValue="IMAGE"
                    onChange={event => {
                        widget.type = event.target.value
                        updateWidget(widget)
                    }}>
                <option value="HEADING">Heading</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="LIST">List</option>
                <option value="IMAGE">Image</option>
                <option value="LINK">Link</option>
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

        <div style={widget.preview}>
            <h4>Preview</h4>
            {
                <img src={widget.src}
                     alt={widget.src}></img>
            }
        </div>
    </div>
export default ImageWidget