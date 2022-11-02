import React, { Component } from "react";

class GenInfoDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.genInfo.map((experience) => {
          return (
            <>
              <div id="nameDisp">
                {experience.firstName + " " + experience.lastName}
              </div>
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
