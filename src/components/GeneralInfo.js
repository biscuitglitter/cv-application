import React, { Component } from "react";

class GeneralInfo extends React.Component {
    render() {
        return (
            <div className="generalInfo">
                <form className="form">
                    <label> <p>First Name: </p>
                        <input type="text" id="firstNameInput" />
                    </label>
                    <label><p>Last Name: </p>
                        <input type="text" id="lastNameInput" />
                        </label>
                    <label> <p>Email: </p>
                        <input type="text" id="firstNameInput" />
                    </label>
                    <label> <p>Phone Number:</p>
                        <input type="text" id="firstNameInput" />
                    </label>
                    <div className="buttonContainer">
                        <button type="submit" onClick={this.props.makeDiv}>
                        Save
                    </button>
                    </div>
                    {this.props.user.firstName}
                </form>
            </div>
        )
    }
}
export default GeneralInfo

