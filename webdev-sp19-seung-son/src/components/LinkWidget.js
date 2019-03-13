import React from 'react'


const buttonMargin = {
    margin: "0.2em"
}
let preview = false;
const LinkWidget = ({widget, updateWidget, deleteWidget, updateWidgets, widgets, top, bottom, changeWidgetType}) =>
    <div className="container">
        <h3>Link Widget</h3>
        <hr/>
        <div className="float-right margin-bottom">
            <div className="margin-bottom">
                <a className="btn btn-success"
                   style={buttonMargin}
                   onClick={event =>
                       updateWidget(widget)}> Save </a>
                <span style={{margin: "0 0.5em 0 1em"}}>Preview</span>
                <i className="fa fa-toggle-off"
                   onClick={event => {
                       if (event.target.className == "fa fa-toggle-off") {
                           event.target.className = "fa fa-toggle-on"
                           changeWidgetType(widget)
                           preview = true;
                       } else {
                           event.target.className = "fa fa-toggle-off"
                           widget.preview = '{"display": "none"}'
                           changeWidgetType(widget)
                           preview = false;
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
                    defaultValue="LINK"
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
                <input
                    defaultValue={widget.title}
                    onChange={event => {
                        widget.title = event.target.value;
                        changeWidgetType(widget)
                    }}
                    className="form-control"
                    placeholder="Link text"/>
                <br/>
                <label htmlFor="linkUrl">Enter the link URL</label>
                <input
                    id="linkUrl"
                    type="text"
                    className="form-control"
                    placeholder="Link URL"
                    defaultValue={widget.href}
                    onChange={event => {
                        widget.href = event.target.value;
                    }}/>
                <br/>
                <label htmlFor="listWidgetName">Enter the name for the
                    widget</label>
                <input
                    id="listWidgetName"
                    defaultValue={widget.name}
                    onChange={event => {
                        widget.name = event.target.value;
                    }}
                    className="form-control"
                    placeholder="Widget name"/>
                <br/>
            </form>
            ||
            preview &&

            <div>
                <h4>Preview</h4>
                {
                    <a href={"http://" + widget.href}>{widget.title}</a>
                }
            </div>
        }
    </div>

export default LinkWidget