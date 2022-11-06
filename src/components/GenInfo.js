import React, { Component } from "react";

// /A section to add your educational experience
//(school name, title of study, date of study)

//transfer input values to display component
class GenInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  createUI() {
    return (
      <div key={"personalInfo"} className="personalInfoContainer">
        <div className="inputContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            className="input"
            id="firstName"
            type="text"
            value={this.firstName}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="inputContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="input"
            id="lastName"
            type="text"
            value={this.lastName}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            id="email"
            type="text"
            value={this.email}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="inputContainer">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="input"
            id="phone"
            type="text"
            value={this.phone}
            onChange={this.handleChange}
          ></input>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <>
        <h2>Personal Information</h2>
        {this.createUI()}
      </>
    );
  }
}

export default GenInfo;
