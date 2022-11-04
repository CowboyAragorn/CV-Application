import React, { Component } from "react";

// /A section to add your educational experience
//(school name, title of study, date of study)

//transfer input values to display component
class EduExperience extends Component {
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
        <label htmlFor="schoolName">School Name</label>
        <input
          id="schoolName"
          type="text"
          value={el.schoolName || ""}
          onChange={this.handleChange.bind(this, i)}
        ></input>
        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input
          id="fieldOfStudy"
          onChange={this.handleChange.bind(this, i)}
          value={el.fieldOfStudy || ""}
          type="text"
        ></input>
        <label htmlFor="startDateEdu">Start of study</label>
        <input
          id="startDate"
          type="date"
          name="startVal"
          onChange={this.handleChange.bind(this, i)}
          value={el.startDate || ""}
        ></input>
        <label htmlFor="endDateEdu">Completion of study</label>
        <input
          id="endDate"
          type="date"
          name="endVal"
          onChange={this.handleChange.bind(this, i)}
          value={el.endDate || ""}
        ></input>
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
        { schoolName: "", fieldOfStudy: "", startDate: "", endDate: "" },
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
        <h2>Education Experience</h2>
        {this.createUI()}
        <button type="button" onClick={this.addNewInputs}>
          Add Education Experience
        </button>
        <br></br>
      </>
    );
  }
}

export default EduExperience;
