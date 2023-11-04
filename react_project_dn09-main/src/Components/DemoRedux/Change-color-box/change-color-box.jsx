import React, { Component } from "react";
import { connect } from "react-redux";
import { ChangeColorBoxConst } from "../../../redux/reducer/change-color-box/change-color-box.const";
import { changeColorCreator } from "../../../redux/reducer/change-color-box/change-color-box.creator";
class ChangeColorBox extends Component {
  render() {
    const { changeColor } = this.props;
    return (
      <div>
        <div
          className="house"
          style={{
            width: 100,
            height: 100,
            // 2. binding state lên giao diện.
            backgroundColor: this.props.bgcBox, //this.state.bgColor,
          }}
        />

        <div className="mt-2">
          <button
            onClick={() => {
              changeColor("red");
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              changeColor("Green");
            }}
            className="btn btn-success mx-2"
          >
            Green
          </button>
          <button
            onClick={() => {
              changeColor("Blue");
            }}
            className="btn btn-primary mx-2"
          >
            Blue
          </button>
          <button
            onClick={() => {
              changeColor("Yellow");
            }}
            className="btn btn-warning"
          >
            Yellow
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  // console.log({ rootReducer });
  return {
    bgcBox: rootReducer.changeColorBoxReducer,
  };
};

const mapDispatchToPops = (dispatch) => {
  return {
    changeColor: (color) => {
      // console.log({ color });
      const action = changeColorCreator(color);
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToPops)(ChangeColorBox);
