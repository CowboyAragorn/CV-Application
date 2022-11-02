import React, { Component } from "react";

class GenInfoDisplay extends Component {
  render() {
    return (
      <>
        {this.props.genInfo.map((experience) => {
          return (
            <>
              <div id="firstNameDisp">{experience.firstName}</div>
              <div id="lastNameDisp">{experience.lastName}</div>
              <div id="emailDisp">{experience.email}</div>
              <div id="phoneDisp">{experience.phoneNumber}</div>
              <button>Edit Personal Info</button>
              <button>Delete</button>
            </>
          );
        })}
      </>
    );
  }
}

export default GenInfoDisplay;
