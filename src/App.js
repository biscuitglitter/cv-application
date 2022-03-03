import './App.css';
import React from "react";
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.makeDiv = this.makeDiv.bind(this)

    this.state = {
        user: {
            firstName: "",
            lastName: "",
            Email: "",
            phoneNumber: ""                
        },
    }
  }

  submitInput = e => {
    e.preventDefault()
    this.setState({
      user: {
        firstName: "aaaaaaa",
        lastName: "nooo"
      }
    })
  }

  makeDiv = (e) => {
    e.preventDefault()
    this.setState(
      console.log("yooo!!")
  )
  }

    render() {
        const { user, makeDiv } = this.state;
    return (
        <div className="App">
            <Header />
        <GeneralInfo user={user} makeDiv={makeDiv} />
      </div>
    )
  }
}

export default App;