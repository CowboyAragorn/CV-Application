import React, { Component } from "react";

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
      displayInputs: true,
      editing: false,
      key: 0,
      editKey: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
    this.editJobOnClick = this.editJobOnClick.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.addAnotherJob = this.addAnotherJob.bind(this);
  }

  addNewJob() {
    //check if it is an edit or a new item
    this.setState(
      {
        jobExp: [
          ...this.state.jobExp,
          {
            companyName: this.state.companyName,
            mainTasks: this.state.mainTasks,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: this.state.key + 1,
            selected: false,
          },
        ],
        companyName: " ",
        mainTasks: " ",
        startDate: " ",
        endDate: "",
        selected: false,
        displayInputs: false,
      },
      () => {
        console.log(this.state.jobExp);
      }
    );
  }
  //when the edit button is clicked for a job, populate its info in the inputs
  editJobOnClick(name, tasks, start, end, key) {
    this.setState({
      displayInputs: true,
      editing: true,
      companyName: name,
      mainTasks: tasks,
      startDate: start,
      endDate: end,
      editKey: key,
    });
  }

  updateJob() {
    const jobs = [...this.state.jobExp];
    console.log(jobs);
    const jobToEdit = jobs.find((job) => {
      return job.key === this.state.editKey;
    });

    jobToEdit.companyName = this.state.companyName;
    jobToEdit.mainTasks = this.state.mainTasks;
    jobToEdit.startDate = this.state.startDate;
    jobToEdit.endDate = this.state.endDate;

    this.setState({
      companyName: " ",
      mainTasks: " ",
      startDate: " ",
      endDate: "",
      selected: false,
      displayInputs: false,
      editing: false,
      editKey: 0,
    });
  }

  addAnotherJob() {
    this.setState({ displayInputs: true });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <>
        {
          //display the inputs if no displayInputs is occuring
        }
        {this.state.displayInputs ? (
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
            {
              //If you are editing a job, show the edit button, if it is a new job, show the new button
            }
            {this.state.editing ? (
              <button type="button" onClick={this.updateJob}>
                Update Job Experience
              </button>
            ) : (
              <button type="button" onClick={this.addNewJob}>
                Add Job Experience
              </button>
            )}
          </form>
        ) : (
          <>
            <br></br>
            <button type="button" onClick={this.addAnotherJob}>
              Add More Experience
            </button>
          </>
        )}
      </>
    );
  }
}

export default JobExperience;
