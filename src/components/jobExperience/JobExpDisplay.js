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
              <button
                type="button"
                onClick={() => {
                  this.props.onClick(
                    experience.companyName,
                    experience.mainTasks,
                    experience.startDate,
                    experience.endDate,
                    experience.key
                  );
                }}
              >
                Edit Job Experience
              </button>
              <button type="button">Delete</button>
            </>
          );
        })}
      </>
    );
  }
}

export default JobExpDisplay;
