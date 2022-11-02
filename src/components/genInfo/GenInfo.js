import React, { Component } from "react";

//A section to add general information like name, email, phone number.

class GenInfo extends Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text"></input>
          <label htmlFor="email">Email</label>
          <input id="email" type="text"></input>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text"></input>
          <button type="button">Submit</button>
        </form>
        <br></br>
      </>
    );
  }
}

export default GenInfo;
