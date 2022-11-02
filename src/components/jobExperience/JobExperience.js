import React, { Component } from "react";
import JobExpDisplay from "./JobExpDisplay";
//A section to add practical experience
//(company name, position title, main tasks of your jobs,
//date from and until when you worked for that company)
class JobExperience extends Component {
  constructor() {
    super();
    this.state = {
      jobExp: [],
      companyName: " ",
      mainTasks: " ",
      startDate: " ",
      endDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {
        jobExp: [
          ...this.state.jobExp,
          {
            companyName: this.state.companyName,
            mainTasks: this.state.mainTasks,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
          },
        ],
        companyName: " ",
        mainTasks: " ",
        startDate: " ",
        endDate: "",
      },
      () => {
        console.log(this.state.jobExp);
      }
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="companyName"> Company Name</label>
          <input
            id="companyName"
            name="companyName"
            onChange={this.handleChange}
            value={this.state.companyName}
            type="text"
          ></input>
          <label htmlFor="mainTasks"> Job Responsibilities</label>
          <input
            id="mainTasks"
            name="mainTasks"
            onChange={this.handleChange}
            value={this.state.mainTasks}
            type="textarea"
          ></input>
          <label htmlFor="startDateJob">Start of Employment</label>
          <input
            id="startDateJob"
            name="startDate"
            onChange={this.handleChange}
            value={this.state.startDate}
            type="date"
          ></input>
          <label htmlFor="endDateJob">End of Employment</label>
          <input
            id="endDateJob"
            name="endDate"
            onChange={this.handleChange}
            value={this.state.endDate}
            type="date"
          ></input>
          <button type="button" onClick={this.handleClick}>
            Add Job Experience
          </button>
        </form>
        <JobExpDisplay jobExp={this.state.jobExp} />
      </>
    );
  }
}

export default JobExperience;
