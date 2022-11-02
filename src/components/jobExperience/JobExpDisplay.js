import React, { Component } from "react";

class JobExpDisplay extends Component {
  render() {
    return (
      <>
        {this.props.jobExp.map((experience) => {
          return (
            <>
              <div id="companyNameDisp">{experience.companyName}</div>
              <div id="mainTasksDisp">{experience.mainTasks}</div>
              <div id="startDateDisp">{experience.startDate}</div>
              <div id="endDateDisp">{experience.endDate}</div>
              <button>Edit Job Experience</button>
              <button>Delete</button>
            </>
          );
        })}
      </>
    );
  }
}

export default JobExpDisplay;
