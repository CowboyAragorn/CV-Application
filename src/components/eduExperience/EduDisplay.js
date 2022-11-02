import React, { Component } from "react";

class EduDisplay extends Component {
  render() {
    return (
      <>
        {this.props.eduExp.map((experience) => {
          return (
            <>
              <div id="schoolNameDisp">{experience.schoolName}</div>
              <div id="fieldOfStudyDisplay">{experience.fieldOfStudy}</div>
              <div id="startEduDisp">{experience.startDate}</div>
              <div id="endEduDisp">{experience.endDate}</div>
              <button>Edit Education</button>
              <button>Edit Education</button>
            </>
          );
        })}
      </>
    );
  }
}

export default EduDisplay;
