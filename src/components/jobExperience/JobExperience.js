import React, { Component } from "react";
//A section to add practical experience
//(company name, position title, main tasks of your jobs,
//date from and until when you worked for that company)
class JobExperience extends Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="companyName"> Company Name</label>
          <input id="companyName" type="text"></input>
          <label htmlFor="mainTasks"> Job Responsibilities</label>
          <input id="mainTasks" type="textarea"></input>
          <label htmlFor="startDateJob">Start of Employment</label>
          <input id="startDateJob" type="date"></input>
          <label htmlFor="endDateJob">End of Employment</label>
          <input id="endDateJob" type="date"></input>
          <button type="button">Submit</button>
        </form>
      </>
    );
  }
}

export default JobExperience;
