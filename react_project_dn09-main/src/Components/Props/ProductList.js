import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  hienThiDSMap = () => {
    let { xemChiTietProps, mangPhoneProps } = this.props;
    return mangPhoneProps.map((phone) => {
      return (
        <div className="col-4" key={`phone${phone.maSP}`}>
          <ProductItem xemChiTietProps={xemChiTietProps} phoneProps={phone} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.hienThiDSMap()}</div>;
  }
}
