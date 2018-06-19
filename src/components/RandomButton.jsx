import React from "react";
import { randomColor } from "../actions";

import { connect } from "react-redux";

class randomButton extends React.Component {
  render() {
    return (
      <button onClick={e => this.props.randomColor()}>Random Color</button>
    );
  }
}

export default connect(state => ({}), { randomColor })(randomButton);
