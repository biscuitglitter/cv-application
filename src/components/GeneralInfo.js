import React, { Component } from "react";

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props)

    }

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
                    <div className="saveButton">
                        <button type="submit">
                        Save
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default GeneralInfo

/* {this.props.dataFromApp.firstName} */
