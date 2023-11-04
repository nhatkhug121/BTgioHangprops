import React, { Component } from "react";
// connect redux
import { connect } from "react-redux";
class CountRedux extends Component {
  render() {
    return (
      <div>
        <p>Count: 1234</p>
        <button className="btn btn-success mx-2">+</button>
        <button className="btn btn-success mx-2">-</button>
      </div>
    );
  }
}
// @param {*} rootReducer
const mapStateToProps = (rootReducer) => {
  console.log(rootReducer);
  return {
    countState: rootReducer.CountRedux,
  };
};
export default connect(mapStateToProps)(CountRedux);
