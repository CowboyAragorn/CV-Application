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
      count: 0,
      schoolName: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEduExperience = this.addEduExperience.bind(this);
    this.removeExp = this.removeExp.bind(this);
  }

  addEduExperience() {
    this.setState({
      eduExp: [
        ...this.state.eduExp,
        {
          count: this.state.count,
          schoolName: this.state.schoolName,
          fieldOfStudy: null,
          startDate: null,
          endDate: null,
        },
      ],
      count: this.state.count + 1,
    });
  }
  removeExp(index) {
    console.log(index);
    let eduExpCopy = [...this.state.eduExp];
    console.log(eduExpCopy);
    eduExpCopy.splice(index, 1);
    console.log(eduExpCopy);
    this.setState({ eduExp: eduExpCopy });
  }

  handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  render() {
    return (
      <>
        <EduDisplay eduExp={this.state.eduExp} onClick={this.removeExp} />
        <button type="button" onClick={this.addEduExperience}>
          Add Education Experience
        </button>
        <br></br>
      </>
    );
  }
}

export default EduExperience;
