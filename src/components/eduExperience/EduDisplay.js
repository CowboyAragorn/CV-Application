import React, { Component } from "react";

class EduDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.addStates = this.addStates.bind(this);
  }
  /*
  handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  */

  render() {
    return (
      <>
        {this.props.eduExp.map((experience, index) => {
          return (
            <>
              <label htmlFor="schoolName">School Name</label>
              <input
                id="schoolName"
                name={"schoolName" + experience.count}
                type="text"
                value={this.state.value}
              ></input>
              <label htmlFor="fieldOfStudy">Field of Study</label>
              <input
                id="fieldOfStudy"
                name="fosVal"
                /*
                onChange={this.handleChange}
                value={this.state.fosVal}
                type="text"
                */
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
              <button
                name={index}
                type="button"
                onClick={() => this.props.onClick(index)}
              >
                Delete
              </button>
              <br></br>
            </>
          );
        })}
      </>
    );
  }
}

export default EduDisplay;
