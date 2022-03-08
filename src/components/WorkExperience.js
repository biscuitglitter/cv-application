import React, { Component } from 'react';
import './styles/WorkExperience.css'
import uniqid from "uniqid";



export default class WorkExperience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listOfJobs: [],
			newJob: { jobTitle: "", company: "", sinceDate: "", untilDate: "", description: "", id: uniqid() },
		}
	}
	handleChange = (event) => {
		this.setState(
			{
				newJob: {
					...this.state.newJob,
					id: this.state.newJob.id,
					[event.target.name]: event.target.value
				},
			},
		);
	};

	addNewJob = e => {
		e.preventDefault()
		this.setState({
			listOfJobs: [
				...this.state.listOfJobs,
				this.state.newJob,
			],
		});
	};

	deleteJob = (deletedJob, index) => event => {
		console.log("deletedJob:", deletedJob);
		const filteredJobs = this.state.listOfJobs.filter(item => {
		  return item !== deletedJob;
		});
		this.setState({
		  listOfJobs: filteredJobs
		},
			() => console.log("index:", index)
		);
	  };

	
	render = () => (
		<div className="workExp">
			<form className="form">
				<h1>Work Experience</h1>
				<label><input type="text" placeholder="job title" name="jobTitle" value={this.state.job} onChange={this.handleChange} /></label>
				<label><input type="text" placeholder="company" name="company" value={this.state.company} onChange={this.handleChange}  /></label>
				<label><input type="text" placeholder="since" name="sinceDate" value={this.state.fromDate} onChange={this.handleChange} /></label>
				<label><input type="text" placeholder="until" name="untilDate" value={this.state.untilDate} onChange={this.handleChange} /></label>
				<label><input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.handleChange} /></label>
				<button onClick={this.addNewJob}> Add </button>
			</form>
			<div className="listAllJobs">
				{this.state.listOfJobs.map((item, index) => {
					return <div className="aNewJobRendered" key={item.id} >
						<div className="workExpContainer">
							<div className="topContainer">
								<div className="topLeft">
									<div className="jobTitle" onDoubleClick={this.changeEditMode}> {item.jobTitle} </div>
									<div className="company" > {item.company} </div>
								</div>

								<div className="topRight">
									<div className="buttonContainer">
								<button className="closeButton" onClick={this.deleteJob(item)} key={index}> X </button>
									</div>
									<div className="datesContainer"> 
									<div className="sinceDate"> {item.sinceDate} </div>
									<div className="betweenDates"> - </div>
									<div className="untilDate"> {item.untilDate} </div> </div>
								</div>

							</div>
							<div className="middle">
								<div className="description"> {item.description} </div>
							</div>
						</div>
					</div>;
				})}
			</div>
		</div>
	);
}




