import React from 'react'
import WidgetComponent from './WidgetComponent'

const buttonMargin = {
    margin: "0.2em"
}
const WidgetList = ({widgets, createWidget, deleteWidget, updateWidget}) =>
    <div>
        <a className="btn btn-light">
            <i className="fa fa-plus"></i> Add Widget
        </a>

        <div className="container">
            <h3> Heading Widget </h3>
            <hr/>
            <div className="float-right">
                <a className="btn btn-success" style = {buttonMargin}> Save </a>
                Preview
                <a type="checkbox" className="btn btn-light" style = {buttonMargin}>
                    <i className="fa fa-toggle-off"></i>
                </a>
                <br/>
                <a className="btn btn-warning" style = {buttonMargin}>
                    <i className="fa fa-arrow-up"></i>
                </a>
                <a className="btn btn-warning" style = {buttonMargin}>
                    <i className="fa fa-arrow-down"></i>
                </a>

                <select style = {buttonMargin}>
                    <option selected>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>
                <a className="btn btn-danger" style = {buttonMargin}>
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <form className="form-group">
                <input className="form-control" type="text" id="headingText"
                       placeholder="Heading text"></input>
                <br/>
                <label htmlFor="size">Size</label> <select className="form-control"
                                                           id="size">
                <option selected>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
            </select>
                <br/>
                <label htmlFor="headingWidgetName">Enter the name for the widget</label>
                <input className="form-control" type="text" id="headingWidgetName"
                       placeholder="Widget Name"></input>
                <br/>
            </form>
            <h4>Preview</h4>
            <h1>Heading text</h1>
        </div>




        <hr/><hr/><hr/><hr/>
        <h1>Widget List</h1>
        <div className="list-group">
        {
            widgets.map(widget =>
                <WidgetComponent
                    key={widget.id}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    widget={widget}/>
            )
        }
        <button
            onClick={createWidget}
            className="btn btn-success">
            Create New Widget
        </button>
        </div>
    </div>

export default WidgetList