import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}

let preview = false;

const ImageWidget = ({widget, updateWidget, deleteWidget, updateWidgets, widgets, top, bottom, changeWidgetType}) =>
    <div className="container">
        <h3>Image Widget</h3>
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
                    defaultValue="IMAGE"
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
                <input type="text"
                       className="form-control"
                       placeholder="Image URL"
                       defaultValue={widget.src}
                       onChange={event => {
                           widget.src = event.target.value;
                       }}/>
                <br/>
                <label htmlFor="imageWidgetName">Enter the name for the widget</label>
                <input
                    id="imageWidgetName"
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
                    <img src={widget.src}
                         alt={widget.src}></img>
                }
            </div>
        }
    </div>
export default ImageWidget