import React, { Component } from "react";
import { connect } from "react-redux";

import { randomColor } from "../actions";

class Color extends Component {
  componentDidMount() {
    this.props.randomColor();
  }

  render() {
    return (
      <div
        className="color"
        style={{ width: "80px", height: "80px", background: this.props.color }}
      />
    );
  }
}

export default connect(state => ({ color: state.color }), { randomColor })(
  Color
);
