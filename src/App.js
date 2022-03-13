import './App.css';
import React from "react";
import GenInfo from './funcComponents/GenInfo';
// import WorkExp from './funcComponents/WorkExp';

class App extends React.Component {
     render() {
      return (
        <div className="App">
          <GenInfo />
        </div>
      )
    }
  }

export default App;