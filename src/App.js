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
        <div id="pageContainer">
          <form>
            <h1 id="pageHeader">Resume Creator</h1>
            <GenInfo />
            <EduExperience />
            <JobExperience />
            <br></br>
            <button type="submit" id="submitBtn">
              Submit CV
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
