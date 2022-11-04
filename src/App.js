import React, { Component } from "react";
import "./App.css";
import EduExperience from "./components/EduExperience";
import GenInfo from "./components/GenInfo";
import JobExperience from "./components/JobExperience";
//import JobExperienceRender from "./components/jobExperience/JobExperienceRender";
class App extends Component {
  render() {
    return (
      <>
        <form>
          <h1>Resume Creator</h1>
          <GenInfo />
          <EduExperience />
          <JobExperience />
          <br></br>
          <button type="submit">Submit CV</button>
        </form>
      </>
    );
  }
}

export default App;
