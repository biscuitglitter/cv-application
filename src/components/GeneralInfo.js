import React from "react";

export default class GeneralInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""
            },
        }
    }

    handleChange = e => {
        this.setState(
            {
                user: {
                    [e.target.name]: e.target.value,
                }
            },
        );
        console.log(this.state.user.firstName)
    }
  
    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            user: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""
            }
        });
        alert("A form was submitted!")
    }


    render() {
        const { user } = this.state 
        return (
            <div className="generalInfo">
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                        <p>First Name: </p>
                        <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange} />
                    </label>

                    <label>
                        <p>Last Name: </p>
                        <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange}/>
                    </label>

                    <label>
                        <p>Email: </p>
                        <input type="text" name="email" value={user.email} onChange={this.handleChange}/>
                    </label>

                    <label>
                        <p>Phone Number:</p>
                        <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={this.handleChange} />
                    </label>

                    <div className="buttonContainer">
                        <button type="submit"> Save </button>
                    </div>
                </form>
            </div>
        )
    }
}


