import './App.css';
import React from "react";
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        user: {
            firstName: "",
            lastName: "",
            Email: "",
            phoneNumber: ""                
        },
    }
}
 
    render() {
        const { user } = this.state;
    return (
        <div className="App">
            <Header />
          <GeneralInfo dataFromApp={user}/>
      </div>
    )
  }
}

export default App;