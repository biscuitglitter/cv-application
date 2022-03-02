import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducExp from "./components/EducExp"
import WorkExp from "./components/WorkExp"

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducExp />
        <WorkExp />
      </div>
    )
  }
}

export default App;