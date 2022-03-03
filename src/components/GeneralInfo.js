import React from "react";

export default class GeneralInfo extends React.Component {
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

    handleInputChange = e => {
        this.setState({
            user: {
                firstName: e.target.value
            }
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            user: {
                firstName: "",
                lastName: "",
                Email: "",
                phoneNumber: ""
            }
        });
        console.log(this.state.user.firstName)
    }


    render() {
        return (
            <div className="generalInfo">
                <form className="form" onClick={this.handleSubmit}>
                    <label>
                        <p>First Name: </p>
                        <input type="text" id="firstNameInput" value={this.state.user.firstName} onChange={this.handleInputChange} />
                    </label>

                    <label>
                        <p>Last Name: </p>
                        <input type="text" id="lastNameInput" value={this.state.user.lastName} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        <p>Email: </p>
                        <input type="text" id="firstNameInput" value={this.state.user.Email} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        <p>Phone Number:</p>
                        <input type="text" id="firstNameInput" value={this.state.user.phoneNumber} onChange={this.handleInputChange} />
                    </label>

                    <div className="buttonContainer">
                        <button type="submit"> Save </button>
                    </div>
                </form>
            </div>
        )
    }
}


