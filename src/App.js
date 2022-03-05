import './App.css';
import React from "react";
import GeneralInfo from './components/GeneralInfo';
import WorkExperience from './components/WorkExperience';

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