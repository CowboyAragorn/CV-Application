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
    this.addEduExperience = this.addEduExperience.bind(this);
    this.removeExp = this.removeExp.bind(this);
  }

  //add a way to iterate through and add count
  createUI() {
    return this.state.values.map((el, i, el1) => (
      <div key={i}>
        <label htmlFor="schoolName">School Name</label>
        <input
          id="schoolName"
          type="text"
          value={el || ""}
          onChange={this.handleChange.bind(this, i)}
        ></input>
        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input
          id="fieldOfStudy"
          onChange={this.handleChange.bind(this, i)}
          value={el1 || ""}
          type="text"
        ></input>
        <label htmlFor="startDateEdu">Start of study</label>
        <input
          id="startDateEdu"
          type="date"
          /*
                name="startVal"
                onChange={this.handleChange}
                value={this.state.startVal}
                */
        ></input>
        <label htmlFor="endDateEdu">Completion of study</label>
        <input
          id="endDateEdu"
          type="date"
          /*
                name="endVal"
                onChange={this.handleChange}
                value={this.state.endVal}
                */
        ></input>
        <button type="button" onClick={this.removeExp.bind(this, i)}>
          Delete
        </button>
        <br></br>
      </div>
    ));
  }

  addEduExperience() {
    this.setState((prevState) => ({ values: [...prevState.values, ""] }));
  }
  removeExp(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }
  render() {
    return (
      <>
        {this.createUI()}
        <button type="button" onClick={this.addEduExperience}>
          Add Education Experience
        </button>
        <br></br>
      </>
    );
  }
}

export default EduExperience;
