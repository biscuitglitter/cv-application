import './App.css';
import React from "react";
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';

class App extends React.Component {
     render() {
      return (
        <div className="App">
          <Header />
          <GeneralInfo />
        </div>
      )
    }
  }

export default App;