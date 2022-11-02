import React, { Component } from "react";

// /A section to add your educational experience
//(school name, title of study, date of study)

class EduExperience extends Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="schoolName">School Name</label>
          <input id="schoolName" type="text"></input>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input id="fieldOfStudy" type="text"></input>
          <label htmlFor="startDateEdu">Start of study</label>
          <input id="startDateEdu" type="date"></input>
          <label htmlFor="endDateEdu">Completion of study</label>
          <input id="endDateEdu" type="date"></input>
        </form>
        <br></br>
      </>
    );
  }
}

export default EduExperience;
