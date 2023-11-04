import React, { Component } from "react";

export default class LifeCycle extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div>
        {this.state.show ? <A /> : <B />}
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

class A extends Component {
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps ::: A");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount A");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount :: A");
  }
  render() {
    console.log("render ::: A");
    return (
      <>
        <h1>a</h1>
      </>
    );
  }
}

class B extends Component {
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps ::: B");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount B");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount :: B");
  }
  render() {
    console.log("render ::: B");
    return (
      <>
        <h1>b</h1>
      </>
    );
  }
}
