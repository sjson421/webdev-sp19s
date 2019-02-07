import React from 'react'

const buttonMargin = {
    margin: "0.2em"
}
const WidgetList = () =>
    <ul className="container-fluid">
        <a className="btn btn-light">
            <i className="fa fa-plus"></i> Add Widget
        </a>

        <li className="container">
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

                <select style={buttonMargin}>
                    <option selected>Heading</option>
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
        </li>
        <br/><br/>
        <li className="border container">
            <h3>Paragraph Widget</h3>
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

                <select style={buttonMargin}>
                    <option>Heading</option>
                    <option selected>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>
                <a className="btn btn-danger" style={buttonMargin}>
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <form className="form-group">
                <textarea className="form-control" col="2" placeholder="Paragraph text"></textarea>
                <br/>
                <label htmlFor="paragraphWidgetName">Enter the name for the widget</label>
                <input className="form-control" type="text" id="paragraphWidgetName"
                       placeholder="Widget Name"></input>
                <br/>
            </form>
            <h4>Preview</h4>
            <p>Paragraph text</p>
        </li>
        <br/><br/>
        <li className="border container">
            <h3>List Widget</h3>
            <hr/>
            <div className="float-right margin-bottom">
                <div className="margin-bottom">
                    <a className="btn btn-success margin-right" style={buttonMargin}> Save </a>
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

                <select style={buttonMargin}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option selected>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>
                <a className="btn btn-danger" style={buttonMargin}>
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <form className="form-group">
                        <textarea className="form-control" col="4"
                                  placeholder="Enter one list item per line"></textarea>
                <br/>
                <select className="form-control">
                    <option selected>Unordered list</option>
                    <option>Ordered list</option>
                </select>
                <br/>
                <label htmlFor="listWidgetName">Enter the name for the widget</label>
                <input className="form-control" type="text" id="listWidgetName"
                       placeholder="Widget Name"></input>
                <br/>
            </form>
            <h4>Preview</h4>
            <ul>
                <li>Enter one list item per line</li>
            </ul>
        </li>
        <br/><br/>
        <li className="border container">
            <h3>Image Widget</h3>
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

                <select style={buttonMargin}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option selected>Image</option>
                    <option>Link</option>
                </select>
                <a className="btn btn-danger" style={buttonMargin}>
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <form className="form-group">
                <input type="text" className="form-control" placeholder="Enter image URL"></input>
                <br/>
                <label htmlFor="listWidgetName">Enter the name for the widget</label>
                <input className="form-control" type="text" id="listWidgetName"
                       placeholder="Widget Name"></input>
                <br/>
            </form>
            <h4>Preview</h4>
            <img
                src="https://images.pexels.com/photos/1833441/pexels-photo-1833441.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Abstract Art"></img>
        </li>
        <br/><br/>
        <li className="border container">
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

                <select style={buttonMargin}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option selected>Link</option>
                </select>
                <a className="btn btn-danger" style={buttonMargin}>
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <form className="form-group">
                <input className="form-control" type="text" id="linkText"
                       placeholder="Link text"></input>
                <br/>
                <label htmlFor="linkUrl">Enter the link URL</label>
                <input className="form-control" type="text" id="linkUrl"
                       placeholder="Link URL"></input>
                <br/>
                <label htmlFor="listWidgetName">Enter the name for the
                    widget</label>
                <input className="form-control" type="text" id="listWidgetName"
                       placeholder="Widget Name"></input>
                <br/>
            </form>
            <h4>Preview</h4>
            <a href="#">Link text</a>
        </li>
    </ul>
export default WidgetList;