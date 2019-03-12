import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Whiteboard from './components/WhiteBoard';

ReactDOM.render(
  <div className="container-fluid">
      <Whiteboard/>
  </div>,
  document.getElementById("root")
);