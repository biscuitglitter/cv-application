import './App.css';
import React from "react";
import GeneralInfo from './components/GeneralInfo';
import EducExp from './components/EducExp';

class App extends React.Component {
     render() {
      return (
        <div className="App">
          <GeneralInfo />
          <EducExp />
        </div>
      )
    }
  }

export default App;