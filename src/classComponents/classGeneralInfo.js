import React from "react";
import './styles/GeneralInfo.css'

export default class GeneralInfo extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            user: {
                fullName: "",
                profession: "",
                email: "",
            },
        }
    }

    handleChange = e => {
        this.setState(
            {
                user: {
                    ...this.state.user,
                    [e.target.name]: e.target.value,
                },
            },
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ component: <div className="generalInfoRendered">
        <div className="generalInfoContainer">
        <div className="fullName"> {this.state.user.fullName.toUpperCase()} </div>
        <div className="currentProfession"> {this.state.user.profession} </div>
        <div className="email"> {this.state.user.email} </div>
        </div>
    </div> });         
    }

    render() {
        return (
            <div className="generalInfo">
                <form className="form">
                <h1>Personal Details</h1>
                    <label>
                        <input type="text" placeholder="full name" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="text" placeholder="profession" name="profession" value={this.state.phoneNumber} onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="text" placeholder="email@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
                {this.state.component}
            </div>
        )
    }
}



