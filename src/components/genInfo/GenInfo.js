import React, { Component } from "react";
import GenInfoDisplay from "./GenInfoDisplay";

//A section to add general information like name, email, phone number.

class GenInfo extends Component {
  constructor() {
    super();
    this.state = {
      genInfo: [],
      firstName: " ",
      lastName: " ",
      email: " ",
      phoneNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.schoolName);
    this.setState(
      {
        genInfo: [
          ...this.state.genInfo,
          {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
          },
        ],
        firstName: " ",
        lastName: " ",
        email: " ",
        phoneNumber: "",
      },
      () => {
        console.log(this.state.genInfo);
      }
    );
  }
  handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
            type="text"
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
            name="lastName"
            type="text"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="text"
          ></input>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            onChange={this.handleChange}
            value={this.state.phoneNumber}
            name="phoneNumber"
            type="text"
          ></input>
          <button type="button" onClick={this.handleClick}>
            Submit General Info
          </button>
        </form>
        <br></br>
        <GenInfoDisplay genInfo={this.state.genInfo} />
      </>
    );
  }
}

export default GenInfo;
