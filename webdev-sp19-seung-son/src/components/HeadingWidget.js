import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}
const HeadingWidget = ({widget, updateWidget, deleteWidget, updateWidgets, widgets}) =>
    <div>
        <div className="container">
            <h3> Heading Widget </h3>
            <hr/>
            <div className="float-right">
                <a className="btn btn-success" style={buttonMargin}> Save </a>
                <span style={{margin: "0 0.5em 0 1em"}}>Preview</span>
                <i className="fa fa-toggle-off"
                   onClick={event => {
                       if (event.target.className == "fa fa-toggle-off") {
                           event.target.className = "fa fa-toggle-on"
                           widget.preview = '{}'
                           updateWidget(widget)
                       } else {
                           event.target.className = "fa fa-toggle-off"
                           widget.preview = '{"display": "none"}'
                           updateWidget(widget)
                       }
                   }}></i>
                <br/>
                <a className="btn btn-warning"
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
                <a className="btn btn-warning"
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
                        defaultValue="Heading"
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
                <a className="btn btn-danger"
                   style={buttonMargin}
                   onClick={() => deleteWidget(widget)}>
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
                        defaultValue="Heading 1"
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
                    id="headingWidgetName"
                    value={widget.name}
                    onChange={event => {
                        widget.name = event.target.value;
                        updateWidget(widget);
                    }}
                    className="form-control"
                    placeholder="Widget Name"/>
                <br/>
            </form>
            <div style={JSON.parse(widget.preview)}>
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
    </div>

export default HeadingWidget