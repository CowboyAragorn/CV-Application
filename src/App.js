import React, { Component } from "react";
import "./App.css";
import EduExperience from "./components/eduExperience/EduExperience";
import GenInfo from "./components/genInfo/GenInfo";
import JobExperience from "./components/jobExperience/JobExperience";
//import JobExperienceRender from "./components/jobExperience/JobExperienceRender";
class App extends Component {
  render() {
    return (
      <>
        <form>
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
