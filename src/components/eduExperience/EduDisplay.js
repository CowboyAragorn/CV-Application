import React, { Component } from "react";

class EduDisplay extends Component {
  render() {
    return (
      <>
        <div id="schoolNameDisp">{this.props.schoolName}</div>
        <div id="fieldOfStudyDisplay"></div>
        <div id="startEduDisp"></div>
        <div id="endEduDisp"></div>
      </>
    );
  }
}

export default EduDisplay;
