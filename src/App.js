import './App.css';
import React from "react";
import GeneralInfo from './funcComponents/GeneralInfo';
import WorkExperience from './funcComponents/WorkExperience';

class App extends React.Component {
     render() {
      return (
        <div className="App">
          <GeneralInfo />
          <WorkExperience />
        </div>
      )
    }
  }

export default App;