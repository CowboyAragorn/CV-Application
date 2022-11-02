import React, { Component } from "react";
import JobExpDisplay from "./JobExpDisplay";
import JobExperience from "./JobExperience";

class JobExperienceRender extends Component {
  constructor() {
    super();
    this.state = {
      editing: true,
    };
  }
  render() {
    return (
      <>
        <JobExperience />
        <JobExpDisplay />
      </>
    );
  }
}

export default JobExperienceRender;
