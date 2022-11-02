import React, { Component } from "react";
import "./App.css";
import EduExperience from "./components/eduExperience/EduExperience";
import GenInfo from "./components/genInfo/GenInfo";
import JobExperience from "./components/jobExperience/JobExperience";

class App extends Component {
  render() {
    return (
      <>
        <GenInfo />
        <EduExperience />
        <JobExperience />
      </>
    );
  }
}

export default App;
