import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}
const ParagraphWidget = ({widget, updateWidget}) =>
    <div className = "container">
        <h3>Paragraph Widget</h3>
        <hr/>
        <div className="float-right margin-bottom">
            <div className="margin-bottom">
                <a className="btn btn-success margin-right" style = {buttonMargin}> Save </a>
                Preview
                <a type="checkbox" className="btn btn-light" style = {buttonMargin}>
                    <i className="fa fa-toggle-off"></i>
                </a>
                <br/>
            </div>

            <a className="btn btn-warning" style = {buttonMargin}>
                <i className="fa fa-arrow-up"></i>
            </a>
            <a className="btn btn-warning" style = {buttonMargin}>
                <i className="fa fa-arrow-down"></i>
            </a>

            <select style = {buttonMargin}>
                <option>Heading</option>
                <option defaultValue>Paragraph</option>
                <option>List</option>
                <option>Image</option>
                <option>Link</option>
            </select>
            <a className="btn btn-danger" style = {buttonMargin}>
                <i className="fa fa-times"></i>
            </a>
        </div>
        <form className="form-group">
            <textarea
                value = {widget.text}
                onChange={event => {
                    widget.text = event.target.value;
                    updateWidget(widget);
                }}
                className="form-control"
                rows="2"
                placeholder="Paragraph text"/>
            <br/>
            <label htmlFor="paragraphWidgetName">Enter the name for the widget</label>
            <input
                value={widget.title}
                onChange={event => {
                    widget.title = event.target.value;
                    updateWidget(widget);
                }}
                className="form-control"/>
            <br/>
        </form>
        <h4>Preview</h4>
        <p>{widget.text}</p>

    </div>

export default ParagraphWidget