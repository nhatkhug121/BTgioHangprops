import React, { Component } from "react";
import { flushSync } from "react-dom";

export default class FormDangKy extends Component {
  state = {
    value: {
      id: "",
      productId: "",
      price: "",
      image: "",
      productType: "",
      productDesc: "",
    },

    error: {
      id: "phai la so",
      productId: "",
      price: "",
      image: "",
      productType: "",
      productDesc: "",
    },
    touch: {
      id: false,
      productId: false,
      price: false,
      image: false,
      productType: false,
      productDesc: false,
    },
  };

  handleValidate = () => {
    const newError = { ...this.state.error };
    const { value } = this.state;
    for (let prop in value) {
      console.log({ prop });
      switch (prop) {
        case "id":
        case "productId": {
          newError[prop] = "";
          const REGEX_NUMBER = /^\d+$/;
          if (!REGEX_NUMBER.test(value[prop])) {
            newError[prop] = "phai la so";
          }
          if (value[prop].length === 0) {
            newError[prop] = "khong duoc bo trong";
          }

          break;
        }
        case "price": {
          newError[prop] = "";
          if (!(Number(value[prop]) <= 100 && Number(value[prop]) >= 5)) {
            newError[prop] = "price phải nằm trong khoản từ 5 đến 100";
          }
          const REGEX_NUMBER = /^\d+$/;
          if (!REGEX_NUMBER.test(value[prop])) {
            newError[prop] = "phai la so";
          }
          if (value[prop].length === 0) {
            newError[prop] = "khong duoc bo trong";
          }
          break;
        }
        case "image": {
          newError[prop] = "";
          const REGEX_URL =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
          if (!REGEX_URL.test(value[prop])) {
            newError[prop] = "Đường dẫn không hợp lệ.";
          }

          if (value[prop].length === 0) {
            newError[prop] = "khong duoc bo trong";
          }
          break;
        }
        case "productType":
          newError[prop] = "";
          if (value[prop].length === 0) {
            newError[prop] = "khong duoc bo trong";
          }
          break;

        case "productDesc":
          break;
        default:
          break;
      }
    }
    this.setState({
      error: newError,
    });
  };
  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    flushSync(() => {
      this.setState({ value: { ...this.state.value, [name]: value } });
    });
    this.handleValidate();
  };

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({ touch: { ...this.state.touch, [name]: true } });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    console.log(this.state);
    return (
      <form
        className="mt-4 p-4"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                onBlur={this.handleBlur}
                value={this.state.value.id}
                name="id"
                onChange={this.handleChange}
                className="form-control"
                id="id"
              />
              {this.state.touch.id && this.state.error.id && (
                <p className="text-danger">{this.state.error.id}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="product_id" className="form-label">
                Product Id
              </label>
              <input
                onBlur={this.handleBlur}
                value={this.state.productId}
                name="productId"
                onChange={this.handleChange}
                className="form-control"
                id="product_id"
              />
              {this.state.touch.productId && this.state.error.productId && (
                <p className="text-danger">{this.state.error.productId}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                onBlur={this.handleBlur}
                value={this.state.value.price}
                name="price"
                onChange={this.handleChange}
                className="form-control"
                id="price"
              />
              {this.state.touch.price && this.state.error.price && (
                <p className="text-danger">{this.state.error.price}</p>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">
                Image
              </label>
              <input
                onBlur={this.handleBlur}
                name="image"
                onChange={this.handleChange}
                value={this.state.value.image}
                type="email"
                className="form-control"
                id="Image"
              />
              {this.state.touch.image && this.state.error.image && (
                <p className="text-danger">{this.state.error.image}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="Product_type" className="form-label">
                Product type
              </label>
              <select
                className="custom-select"
                defaultValue={"1"}
                name="productType"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.value.productType}
              >
                <option value={""}>Open this select menu</option>
                <option value="1">Phone</option>
                <option value="2">Tivi</option>
                <option value="3">Laptop</option>
              </select>

              {this.state.touch.productType && this.state.error.productType && (
                <p className="text-danger">{this.state.error.productType}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="Product_description" className="form-label">
                Product description
              </label>
              <input
                type="email"
                className="form-control"
                id="Product_description"
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={this.state.value.productDesc}
              />
              {this.state.touch.productDesc && this.state.error.productDesc && (
                <p className="text-danger">{this.state.error.productDesc}</p>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// export default function FormRegister() {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     validationSchema: Yup.object().shape({
//       firstName: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("Required"),
//       lastName: Yup.string()
//         .min(2, "Too Short!")
//         .max(50, "Too Long!")
//         .required("Required"),
//       email: Yup.string().email("Invalid email").required("Required"),
//     }),
//     onSubmit: (values) => {
//       //   alert(JSON.stringify(values, null, 2));
//       console.log(values);
//     },
//   });
//   console.log(formik.errors);
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
