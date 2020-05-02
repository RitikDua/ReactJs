import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const node = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: node.offsetTop,
      left: node.offsetLeft
    });
  }
  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) + 30
      // backgroundColor: "black",
      // border: "1px solid black",
      // borderRadius: "9px",
    };
    return React.createElement(
      "div",
      { style: { display: "inline" } ,className:'container'},
      React.createElement(
        "span",
        {
          style: { color: "blue" },
          onMouseEnter: this.toggle,
          onMouseOut: this.toggle
        },
        this.props.children
      ),
      React.createElement(
        "div",
        { className: "tooltip bottom", style: style, role: "tooltip" },
        React.createElement("div", { className: "tooltip-arrow" }),
        React.createElement(
          "div",
          { className: "tooltip-inner" },
          this.props.text
        )
      )
    );
  }
}
