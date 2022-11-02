import React, { Component } from "react";
import "./App.css";
import EduExperience from "./components/EduExperience";
import GenInfo from "./components/GenInfo";
import JobExperience from "./components/JobExperience";

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
