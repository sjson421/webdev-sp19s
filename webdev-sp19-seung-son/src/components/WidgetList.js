import React from 'react'

const WidgetList = () =>
    <div><a className="btn btn-light">
        <i className="fas fa-plus"></i> Add Widget
    </a>

        <div
            className="border container">
            <h3> Heading
                Widget </h3>
                <hr/>
                    <div className="float-right margin-bottom">
                        <div className="margin-bottom">
                            <a className="btn btn-success margin-right"> Save </a>
                            Preview
                            <a type="checkbox" className="btn btn-light">
                                <i className="fas fa-toggle-off"></i>
                            </a>
                            <br/>
                        </div>

                        <a className="btn btn-warning">
                            <i className="fas fa-arrow-up"></i>
                        </a>
                        <a className="btn btn-warning">
                            <i className="fas fa-arrow-down"></i>
                        </a>

                        <select>
                            <option selected>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                            <option>Image</option>
                        </select>
                        <a className="btn btn-danger">
                            <i className="fas fa-times"></i>
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

        <br/>
            <br/>

                <div className="border container">
                    <h3>Paragraph Widget</h3>
                    <hr/>
                        <div className="float-right margin-bottom">
                            <div className="margin-bottom">
                                <a className="btn btn-success margin-right"> Save </a>
                                Preview
                                <a type="checkbox" className="btn btn-light">
                                    <i className="fas fa-toggle-off"></i>
                                </a>
                                <br/>
                            </div>

                            <a className="btn btn-warning">
                                <i className="fas fa-arrow-up"></i>
                            </a>
                            <a className="btn btn-warning">
                                <i className="fas fa-arrow-down"></i>
                            </a>

                            <select>
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option>List</option>
                                <option>Image</option>
                            </select>
                            <a className="btn btn-danger">
                                <i className="fas fa-times"></i>
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
                </div>
                <br/><br/>
                    <div className="border container">
                        <h3>List Widget</h3>
                        <hr/>
                            <div className="float-right margin-bottom">
                                <div className="margin-bottom">
                                    <a className="btn btn-success margin-right"> Save </a>
                                    Preview
                                    <a type="checkbox" className="btn btn-light">
                                        <i className="fas fa-toggle-off"></i>
                                    </a>
                                    <br/>
                                </div>

                                <a className="btn btn-warning">
                                    <i className="fas fa-arrow-up"></i>
                                </a>
                                <a className="btn btn-warning">
                                    <i className="fas fa-arrow-down"></i>
                                </a>

                                <select>
                                    <option>Heading</option>
                                    <option>Paragraph</option>
                                    <option>List</option>
                                    <option>Image</option>
                                </select>
                                <a className="btn btn-danger">
                                    <i className="fas fa-times"></i>
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
                    </div>
                    <br/><br/>
                        <div className="border container">
                            <h3>Image Widget</h3>
                            <hr/>
                                <div className="float-right margin-bottom">
                                    <div className="margin-bottom">
                                        <a className="btn btn-success margin-right"> Save </a>
                                        Preview
                                        <a type="checkbox" className="btn btn-light">
                                            <i className="fas fa-toggle-off"></i>
                                        </a>
                                        <br/>
                                    </div>

                                    <a className="btn btn-warning">
                                        <i className="fas fa-arrow-up"></i>
                                    </a>
                                    <a className="btn btn-warning">
                                        <i className="fas fa-arrow-down"></i>
                                    </a>

                                    <select>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                    </select>
                                    <a className="btn btn-danger">
                                        <i className="fas fa-times"></i>
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
                                <img src="https://www.pexels.com/photo/assorted-color-abstract-painting-1833441/"
                                     alt="Abstract Art"></img>
                        </div>
                        <br/><br/>
                            <div className="border container">
                                <h3>Link Widget</h3>
                                <hr/>
                                    <div className="float-right margin-bottom">
                                        <div className="margin-bottom">
                                            <a className="btn btn-success margin-right"> Save </a>
                                            Preview
                                            <a type="checkbox" className="btn btn-light">
                                                <i className="fas fa-toggle-off"></i>
                                            </a>
                                            <br/>
                                        </div>

                                        <a className="btn btn-warning">
                                            <i className="fas fa-arrow-up"></i>
                                        </a>
                                        <a className="btn btn-warning">
                                            <i className="fas fa-arrow-down"></i>
                                        </a>

                                        <select>
                                            <option>Heading</option>
                                            <option>Paragraph</option>
                                            <option>List</option>
                                            <option>Image</option>
                                        </select>
                                        <a className="btn btn-danger">
                                            <i className="fas fa-times"></i>
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
                            </div>
    </div>
export default WidgetList;