import React, { Component } from 'react';

export default class WorkExperience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listOfJobs: [
				{ jobTitle: "systems engineer", company: "ibm", fromDate: "11-2021", untilDate: "04-2022", description: "very good and enriching experience" },
			],
			newJob: { jobTitle: "", company: "", fromDate: "", untilDate: "", description: "" }
		}
	}

		updateValue = (event) => {
			this.setState(
				{
					newJob: {
						...this.state.newJob,
						[event.target.name]: event.target.value
					}
				},
			);
		};
	
		newJob = () => {
			this.setState({
				listOfJobs: [
					...this.state.listOfJobs,
					this.state.newJob,
				],
			});
		};
	
		jobList = () =>
			this.state.listOfJobs.map((item) => (
				console.log( `${item.description}` )
			));
		
		render = () => (
			<div className="container">
				<div className="row">
		<label><input type="text" placeholder="job" name="jobTitle" value={this.state.job} onChange={this.updateValue} /></label>
		<label><input type="text" placeholder="company" name="company" value={this.state.company} onChange={this.updateValue} /></label>
		<label><input type="text" placeholder="fromDate" name="fromDate" value={this.state.fromDate} onChange={this.updateValue} /></label>
		<label><input type="text" placeholder="untilDate" name="untilDate" value={this.state.untilDate} onChange={this.updateValue} /></label>
		<label><input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.updateValue} /></label>
					<button onClick={this.newJob}> Add	</button>
					<button onClick={this.jobList}> Joblist	</button>
				</div>
			</div>
		);
	}
