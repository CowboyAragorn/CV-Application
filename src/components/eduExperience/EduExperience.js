import React, { Component } from "react";
import EduDisplay from "./EduDisplay";
//import EduDisplay from "./EduDisplay";
//import EduForm from "./EduForm";
// /A section to add your educational experience
//(school name, title of study, date of study)

//transfer input values to display component
class EduExperience extends Component {
  constructor() {
    super();
    this.state = {
      eduExp: [],
      schoolNameVal: " ",
      fosVal: " ",
      startVal: " ",
      endVal: " ",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.schoolName);
    this.setState(
      {
        //schoolName: [...this.state.schoolName, [this.state.schoolNameVal]],
        eduExp: [
          ...this.state.eduExp,
          {
            schoolName: this.state.schoolNameVal,
            fieldOfStudy: this.state.fosVal,
            startDate: this.state.startVal,
            endDate: this.state.endVal,
          },
        ],
        schoolNameVal: " ",
        fosVal: " ",
        startVal: " ",
        endVal: " ",
      },
      () => {
        console.log(this.state.eduExp);
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
          <label htmlFor="schoolName">School Name</label>
          <input
            id="schoolName"
            name="schoolNameVal"
            type="text"
            onChange={this.handleChange}
            value={this.state.schoolNameVal}
          ></input>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input
            id="fieldOfStudy"
            name="fosVal"
            onChange={this.handleChange}
            value={this.state.fosVal}
            type="text"
          ></input>
          <label htmlFor="startDateEdu">Start of study</label>
          <input
            id="startDateEdu"
            type="date"
            name="startVal"
            onChange={this.handleChange}
            value={this.state.startVal}
          ></input>
          <label htmlFor="endDateEdu">Completion of study</label>
          <input
            id="endDateEdu"
            type="date"
            name="endVal"
            onChange={this.handleChange}
            value={this.state.endVal}
          ></input>
          <button type="button" onClick={this.handleClick}>
            Submit
          </button>
        </form>
        <br></br>
        <EduDisplay eduExp={this.state.eduExp} />
      </>
    );
  }
}

export default EduExperience;
