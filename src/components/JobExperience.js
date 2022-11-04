import React, { Component } from "react";

// /A section to add your educational experience
//(school name, title of study, date of study)

//transfer input values to display component
class JobExperience extends Component {
  constructor() {
    super();
    this.state = {
      values: [],
    };

    //this.handleChange = this.handleChange.bind(this);
    this.addNewInputs = this.addNewInputs.bind(this);
    this.removeExp = this.removeExp.bind(this);
  }

  createUI() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          type="text"
          value={el.companyName || ""}
          onChange={this.handleChange.bind(this, i)}
        ></input>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          id="jobTitle"
          onChange={this.handleChange.bind(this, i)}
          value={el.jobTitle || ""}
          type="text"
        ></input>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          onChange={this.handleChange.bind(this, i)}
          value={el.startDate || ""}
        ></input>
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          onChange={this.handleChange.bind(this, i)}
          value={el.endDate || ""}
        ></input>
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          type="textbox"
          onChange={this.handleChange.bind(this, i)}
          value={el.description || ""}
        ></textarea>
        <button type="button" onClick={this.removeExp.bind(this, i)}>
          Delete
        </button>
        <br></br>
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i][event.target.id] = event.target.value;
    this.setState({ values });
  }

  addNewInputs() {
    this.setState((prevState) => ({
      values: [
        ...prevState.values,
        {
          companyName: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  }

  removeExp(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  render() {
    return (
      <>
        <h2>Work Experience</h2>
        {this.createUI()}
        <button type="button" onClick={this.addNewInputs}>
          Add Work Experience
        </button>
        <br></br>
      </>
    );
  }
}

export default JobExperience;
