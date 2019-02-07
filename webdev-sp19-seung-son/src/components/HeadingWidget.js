import React from 'react'


const buttonMargin = {
    margin: "0.2em"
}
const HeadingWidget = ({widget, updateWidget}) =>
    <div>
        <a className="btn btn-light">
            <i className="fa fa-plus"></i> Add Widget
        </a>

        <div className="container">
            <h3> Heading Widget </h3>
            <hr/>
            <div className="float-right">
                <a className="btn btn-success" style={buttonMargin}> Save </a>
                Preview
                <a type="checkbox" className="btn btn-light" style={buttonMargin}>
                    <i className="fa fa-toggle-off"></i>
                </a>
                <br/>
                <a className="btn btn-warning" style={buttonMargin}>
                    <i className="fa fa-arrow-up"></i>
                </a>
                <a className="btn btn-warning" style={buttonMargin}>
                    <i className="fa fa-arrow-down"></i>
                </a>

                <select style={buttonMargin} value = "Heading">

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
                    value={widget.text}
                    onChange={event => {
                        widget.text = event.target.value;
                        updateWidget(widget);
                    }}
                    className="form-control"
                    placeholder="Heading text"/>
                <br/>
                <label htmlFor="size">Size</label>
                <select className="form-control"
                        id="size"
                        value = "Heading 1"
                        onChange={event => {
                    widget.size = parseInt(event.target.value)
                    updateWidget(widget)
                }}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                </select>
                <br/>
                <label htmlFor="headingWidgetName">Enter the name for the widget</label>
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
            <h3>Preview</h3>
            {
                widget.size === 1 && <h1>{widget.text}</h1> ||
                widget.size === 2 && <h2>{widget.text}</h2> ||
                widget.size === 3 && <h3>{widget.text}</h3> ||
                widget.size === 4 && <h4>{widget.text}</h4> ||
                widget.size === 5 && <h5>{widget.text}</h5>
            }
        </div>
    </div>

export default HeadingWidget