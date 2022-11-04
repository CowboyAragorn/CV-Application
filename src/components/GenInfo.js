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
      <div key={"personalInfo"}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={this.firstName}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={this.lastName}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={this.email}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          value={this.phone}
          onChange={this.handleChange}
        ></input>
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
        <br></br>
      </>
    );
  }
}

export default GenInfo;
