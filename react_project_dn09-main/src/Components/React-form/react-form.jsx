import React, { Component, Fragment } from "react";
import FormDangKy from "./form-dang-ky/form-dang-ky";
import ListSanPham from "./list-san-pham/list-san-pham";

export default class ReactForm extends Component {
  render() {
    return (
      <div className="container">
        <FormDangKy />
        <ListSanPham />
      </div>
    );
  }
}
