import React from "react";

export default class EducExp extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            user: {
                company: "",
                profession: "",
                startDate: "",
                endDate: "",
                description: ""
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
    }
    render() {

        return (
            <div className="EducExp">
                <form className="form">
                <h1>Work Experience</h1>
                    <label>
                        <input type="text" placeholder="company" name="company" value={this.state.company} onChange={this.handleChange} />
                    </label>

                    <label>
                        <input type="text" placeholder="profession" name="profession" value={this.state.profession} onChange={this.handleChange} />
                    </label>

                    <label>
                        <input type="text" placeholder="start date" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
                    </label>

                    <label>
                        <input type="text" placeholder="end date" name="endDate" value={this.state.endDate} onChange={this.handleChange} />
                    </label>

                    <label>
                        <input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.handleChange} />
                    </label>
                </form>
                <div className="workExpRendered">
                    <div className="workExpContainer">
                    <div className="company"> {this.state.user.company} </div>
                    <div className="profession"> {this.state.user.profession} </div>
                    <div className="startDate"> {this.state.user.startDate} </div>
                    <div className="endDate"> {this.state.user.endDate} </div>
                    <div className="description"> {this.state.user.description} </div>
                    </div>
                </div>
            </div>
        )
    }
}



