import React from "react";
import './styles/WorkExperience.css'


export default class Testie extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listOfJobs: [
                {
                    action: {
                        description: "",
                        date: ""
                } },
			],
			newJob: "",
		};
	}

	updateValue = e => {
        this.setState({
            newJob: {
                action: {
                    [e.target.name]: e.target.value,
            }
        } });
	};

	newJob = () => {
		this.setState({
			listOfJobs: [
				...this.state.listOfJobs,
                {
                    action: {
                        description: this.state.description,
                        date: this.state.date
                } },
			],
		});
	};

	jobRows = () =>
		this.state.listOfJobs.map((item) => (
			<jobRows key={item.action} item={item} />
		));

	render = () => (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<input
                        className="form-control"
                        name="description"
						value={this.state.description}
						onChange={this.updateValue}
                    />
                    <input
                        className="form-control"
                        name="date"
						value={this.state.date}
						onChange={this.updateValue}
					/>
					<button className="btn btn-primary" onClick={this.newJob}>
						Add
					</button>
				</div>				
			</div>
		</div>
	); 
}